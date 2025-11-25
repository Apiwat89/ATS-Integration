const path = require("path");
const fs = require("fs");

function readMockFile(filename) {
  const filePath = path.join(__dirname, "../../mock", filename);
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

module.exports = {
  getJobsdbMock: () => readMockFile("jobsdb.json"),
  getJobthaiMock: () => readMockFile("jobthai.json")
};
