const { Database } = require("bun:sqlite");
const path = require("path");

const dbPath = path.join(process.cwd(), "data", "jobs.db");
const db = new Database(dbPath);

db.run(`
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
`);

module.exports = db;
