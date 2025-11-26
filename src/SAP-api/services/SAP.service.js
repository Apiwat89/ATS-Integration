const db = require("../../database/db");

function getAllJobs() {
  return db.prepare("SELECT * FROM jobs ORDER BY posted_datetime DESC").all();
}

function getJobsBySource(source) {
  return db.prepare(
    "SELECT * FROM jobs WHERE source = ? ORDER BY posted_datetime DESC"
  ).all(source);
}

function getJobById(id) {
  return db.prepare(
    "SELECT * FROM jobs WHERE job_id = ? LIMIT 1"
  ).get(id);
}

module.exports = {
  getAllJobs,
  getJobsBySource,
  getJobById
};
