const path = require("path");
const initSqlJs = require("sql.js");

let db = null;

(async () => {
  const SQL = await initSqlJs({
    locateFile: (file) => path.join(__dirname, file)
  });

  const dbPath = path.join(process.cwd(), "data", "jobs.db");

  // ถ้ามีไฟล์ → โหลด
  const fs = require("fs");
  let data = null;

  if (fs.existsSync(dbPath)) {
    data = new Uint8Array(fs.readFileSync(dbPath));
    db = new SQL.Database(data);
  } else {
    db = new SQL.Database();
  }

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

  // บันทึกกลับไฟล์ก่อนปิด
  process.on("exit", () => {
    const data = Buffer.from(db.export());
    fs.writeFileSync(dbPath, data);
  });
})();

module.exports = () => db;
