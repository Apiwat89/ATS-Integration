const { Database } = require("bun:sqlite");
const path = require("path");

const dbPath = path.join(process.cwd(), "data", "jobs.db");
const db = new Database(dbPath);

db.run(`
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
`);

module.exports = db;
