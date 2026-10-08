import { config } from "../config.js";
import { createDatabase, migrate } from "./database.js";
import { logger } from "../lib/logger.js";

const db = createDatabase(config.dbPath);
migrate(db);
logger.info(`Database ready at ${config.dbPath} (driver=${config.dbDriver})`);
db.close();
