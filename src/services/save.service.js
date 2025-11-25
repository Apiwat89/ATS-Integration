const db = require("../database/db");

function saveJobs(source, jobs) {
  const insert = db.prepare(`
    INSERT INTO jobs (source, job_id, title, company, location, salary, posted_at, url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertMany = db.transaction((jobsList) => {
    for (const job of jobsList) {
      insert.run(
        source,
        job.job_id,
        job.title,
        job.company,
        job.location,
        job.salary,
        job.posted_at || job.updated_at || null,
        job.url
      );
    }
  });

  insertMany(jobs);

  return { inserted: jobs.length };
}

module.exports = { saveJobs };
