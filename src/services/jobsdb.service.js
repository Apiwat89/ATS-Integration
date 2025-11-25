const axios = require("axios");

async function fetchRealJobsDB() {
  try {
    const response = await axios.get("https://example.com/jobsdb/api"); // รอทีม JobsDB ส่งให้จริง
    return response.data;
  } catch (err) {
    console.error("Error fetching JobsDB API:", err.message);
    return null;
  }
}

module.exports = { fetchRealJobsDB };
