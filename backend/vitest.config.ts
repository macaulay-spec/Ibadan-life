import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    environment: "node",
    globals: false,
    // Each test file gets a fresh in-memory database via the test helpers.
    pool: "forks",
    testTimeout: 20000,
    server: {
      deps: {
        // `node:sqlite` is an experimental builtin that Vite does not recognise
        // as a builtin, so force it to be external (resolved natively by Node).
        external: ["node:sqlite"],
      },
    },
  },
});
