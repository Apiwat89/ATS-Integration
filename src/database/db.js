const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(process.cwd(), "data", "jobs.db");
const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    job_id TEXT UNIQUE,
    source TEXT,
    job_title TEXT,
    company TEXT,
    location TEXT,
    salary_text TEXT,
    posted_datetime TEXT,
    url TEXT,
    fetched_at TEXT
  );
`).run();

module.exports = db;