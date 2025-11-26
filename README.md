# ATS-Integration

ใช้เทส node ใช้งานได้ไหม แบบ Portable
cd "D:\CPF Intern\node-v20.19.5-win-x64"
.\npm.cmd -v
.\npm.cmd init -y

หลังจากนั้นกลับมาที่
cd "D:\CPF Intern\ATS-Integration"
& "..\node-v20.19.5-win-x64\npm.cmd" init -y
& "..\node-v20.19.5-win-x64\npm.cmd" install express
.\npm.cmd install axios
& "..\node-v20.19.5-win-x64\npm.cmd" install node-cron

เครื่องที่ไม่มี node
& "D:\CPF\ATS Integration\node-v20.19.6-win-x64\node.exe" node_modules/nodemon/bin/nodemon src/server.js

เครื่องที่มี node
ืnpm install
npx nodemon src/server.js


api web
/api/jobs/jobsdb/mock
/api/jobs/jobthai/mock
/api/jobs/save-mock

api SAP team
/SAP/jobs/all
/SAP/jobs/jobdb
/SAP/jobs/jobthai
/SAP/jobs/:id