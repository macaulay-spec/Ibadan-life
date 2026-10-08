import { describe, it, expect } from "vitest";
import request from "supertest";
import { makeApp } from "./helpers";

const ADMIN = { "x-admin-token": "dev-admin-token" };

async function registerPlayer(app: ReturnType<typeof makeApp>["app"], name: string, background: "lapo" | "nepo" = "lapo") {
  const res = await request(app)
    .post("/api/auth/register")
    .send({ email: `${name}@ibadan.io`, password: "password123", name, background });
  expect(res.status).toBe(201);
  return { token: res.body.token as string, player: res.body.player };
}

describe("economy HTTP API (end-to-end)", () => {
  it("health check is open", async () => {
    const { app } = makeApp();
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("register -> balance reflects the starting stipend", async () => {
    const { app } = makeApp();
    const { token } = await registerPlayer(app, "ada", "lapo");

    const res = await request(app).get("/api/economy/balance").set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.cash).toBe(500); // ₦500 Lapo stipend
    expect(res.body.total).toBe(500);
  });

  it("rejects authenticated routes without a token (401)", async () => {
    const { app } = makeApp();
    const res = await request(app).get("/api/economy/balance");
    expect(res.status).toBe(401);
  });

  it("two players transfer money; the 2.5% tax is applied and balances are exact", async () => {
    const { app } = makeApp();
    const ada = await registerPlayer(app, "ada", "lapo"); // ₦500
    const bola = await registerPlayer(app, "bola", "lapo"); // ₦500

    // Ada sends Bola ₦100. Tax = ₦2.50. Ada pays ₦102.50 total.
    const send = await request(app)
      .post("/api/economy/transfer")
      .set("Authorization", `Bearer ${ada.token}`)
      .send({ toPlayerId: bola.player.id, amount: 100 });
    expect(send.status).toBe(200);
    expect(send.body.amount).toBe(100);
    expect(send.body.tax).toBe(2.5);
    expect(send.body.total).toBe(102.5);

    const adaBal = await request(app).get("/api/economy/balance").set("Authorization", `Bearer ${ada.token}`);
    expect(adaBal.body.cash).toBe(397.5); // 500 - 102.5

    const bolaBal = await request(app).get("/api/economy/balance").set("Authorization", `Bearer ${bola.token}`);
    expect(bolaBal.body.cash).toBe(600); // 500 + 100
  });

  it("rejects a transfer the sender cannot afford (amount + tax)", async () => {
    const { app } = makeApp();
    const ada = await registerPlayer(app, "ada", "lapo"); // ₦500
    const bola = await registerPlayer(app, "bola", "lapo");

    const res = await request(app)
      .post("/api/economy/transfer")
      .set("Authorization", `Bearer ${ada.token}`)
      .send({ toPlayerId: bola.player.id, amount: 500 }); // needs 512.50
    expect(res.status).toBe(400);
  });

  it("deposit and withdraw move money between cash and bank", async () => {
    const { app } = makeApp();
    const { token } = await registerPlayer(app, "ada", "lapo"); // ₦500 cash

    const dep = await request(app).post("/api/economy/deposit").set("Authorization", `Bearer ${token}`).send({ amount: 200 });
    expect(dep.status).toBe(200);
    expect(dep.body.balance).toMatchObject({ cash: 300, bank: 200 });

    const wd = await request(app).post("/api/economy/withdraw").set("Authorization", `Bearer ${token}`).send({ amount: 50 });
    expect(wd.status).toBe(200);
    expect(wd.body.balance).toMatchObject({ cash: 350, bank: 150 });
  });

  it("admin faucet credits a player; non-admin is forbidden (403)", async () => {
    const { app } = makeApp();
    const { player } = await registerPlayer(app, "ada", "lapo"); // ₦500

    const forbidden = await request(app).post("/api/economy/faucet").send({ playerId: player.id, amount: 100, reason: "wage" });
    expect(forbidden.status).toBe(403);

    const ok = await request(app)
      .post("/api/economy/faucet")
      .set(ADMIN)
      .send({ playerId: player.id, amount: 100, reason: "wage" });
    expect(ok.status).toBe(200);
    expect(ok.body.balance.cash).toBe(600);
  });

  it("admin sink debits a player (rent/utility)", async () => {
    const { app } = makeApp();
    const { player } = await registerPlayer(app, "ada", "lapo"); // ₦500
    const res = await request(app)
      .post("/api/economy/sink")
      .set(ADMIN)
      .send({ playerId: player.id, amount: 50, reason: "electricity_bill" });
    expect(res.status).toBe(200);
    expect(res.body.balance.cash).toBe(450);
  });

  it("integrity endpoint reports a healthy ledger", async () => {
    const { app } = makeApp();
    const ada = await registerPlayer(app, "ada", "lapo");
    const bola = await registerPlayer(app, "bola", "lapo");
    await request(app)
      .post("/api/economy/transfer")
      .set("Authorization", `Bearer ${ada.token}`)
      .send({ toPlayerId: bola.player.id, amount: 100 });

    const res = await request(app).get("/api/economy/verify").set(ADMIN);
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.mismatches).toHaveLength(0);
  });

  it("public player profile is visible without auth", async () => {
    const { app } = makeApp();
    const { player } = await registerPlayer(app, "ada", "lapo");
    const res = await request(app).get(`/api/players/${player.id}`);
    expect(res.status).toBe(200);
    expect(res.body.player.name).toBe("ada");
    expect(res.body.player).not.toHaveProperty("cash"); // public profile hides money
  });
});
