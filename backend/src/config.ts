import process from "node:process";

/**
 * Central configuration, loaded from environment variables.
 * See .env.example for the full list.
 */
export const config = {
  port: Number(process.env.PORT ?? 3000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  jwtSecret: process.env.JWT_SECRET ?? "dev-secret-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  dbDriver: (process.env.DB_DRIVER ?? "sqlite") as "sqlite" | "postgres",
  dbPath: process.env.DB_PATH ?? "./data/ibadan-life.db",
  databaseUrl: process.env.DATABASE_URL ?? "",
  adminToken: process.env.ADMIN_TOKEN ?? "dev-admin-token",
};
