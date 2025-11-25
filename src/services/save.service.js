const db = require("../database/db");

function normalize(job, source) {
  return {
    job_id: job.job_id,
    source: source,
    job_title: job.title || job.subject || null,
    company: job.company || job.company_name || null,
    location: job.location || job.area || null,
    salary_text: job.salary || job.salary_range || null,
    posted_datetime: job.posted_at || job.updated_at || null,
    url: job.url,
    fetched_at: new Date().toISOString()
  };
}

function saveJobs(source, jobs) {
  const insert = db.prepare(`
    INSERT INTO jobs (
      job_id, source, job_title, company, location,
      salary_text, posted_datetime, url, fetched_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(job_id) DO UPDATE SET
      source = excluded.source,
      job_title = excluded.job_title,
      company = excluded.company,
      location = excluded.location,
      salary_text = excluded.salary_text,
      posted_datetime = excluded.posted_datetime,
      url = excluded.url,
      fetched_at = excluded.fetched_at;
  `);

  const insertMany = db.transaction((items) => {
    for (const job of items) {
      const n = normalize(job, source);

      insert.run(
        n.job_id,
        n.source,
        n.job_title,
        n.company,
        n.location,
        n.salary_text,
        n.posted_datetime,
        n.url,
        n.fetched_at
      );
    }
  });

  insertMany(jobs);
  return { inserted: jobs.length };
}

module.exports = { saveJobs };
