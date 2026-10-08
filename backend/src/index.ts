import { config } from "./config.js";
import { createDatabase, migrate } from "./db/database.js";
import { createApp } from "./api/app.js";
import { logger } from "./lib/logger.js";

const db = createDatabase(config.dbPath);
migrate(db);

const { app } = createApp(db);

app.listen(config.port, () => {
  logger.info(`IBADAN LIFE backend listening on http://localhost:${config.port} (env=${config.nodeEnv})`);
});
