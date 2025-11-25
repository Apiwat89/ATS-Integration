const axios = require("axios");
const env = require("../config/env");

async function fetchRealJobsDB() {
  try {
    const response = await axios.get(env.JOBDB_API); // รอทีม JobsDB ส่งให้จริง
    return response.data;
  } catch (err) {
    console.error("Error fetching JobsDB API:", err.message);
    return null;
  }
}

module.exports = { fetchRealJobsDB };
