let db = null;

const isBun = typeof Bun !== "undefined" && Bun.version;

if (isBun) {
  console.log("[DB] Running on Bun using bun:sqlite");
  db = require("./db.bun");
} else {
  try {
    require.resolve("better-sqlite3");
    console.log("[DB] Running on Node with better-sqlite3");
    db = require("./db.node");
  } catch (err) {
    console.warn("[DB] No better-sqlite3 → using Pure JS SQLite");
    db = require("./db.puer");
  }
}

module.exports = db;
