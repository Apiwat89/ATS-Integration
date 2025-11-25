// src/database/db.js

let db = null;

// ถ้าเป็น Bun → ใช้ bun:sqlite
if (typeof Bun !== "undefined") {
  db = require("./db.bun");
} else {
  // ถ้าเป็น Node ปกติ (แบบติดตั้ง) → ลองใช้ better-sqlite3
  try {
    require.resolve("better-sqlite3");
    db = require("./db.node");
  } catch (err) {
    console.warn("[DB] better-sqlite3 not found → fallback to db.bun.js");
    db = require("./db.bun"); // fallback แบบ pure JS
  }
}

module.exports = db;