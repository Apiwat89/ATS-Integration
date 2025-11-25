const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(process.cwd(), "data", "jobs.db");
const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS jobs (
    id TEXT PRIMARY KEY,
    source TEXT,
    title TEXT,
    company TEXT,
    location TEXT,
    salary TEXT,
    url TEXT,
    posted_at TEXT,
    fetched_at TEXT
  );
`).run();

module.exports = db;
