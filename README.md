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

เวลารัน    & "..\node-v20.19.5-win-x64\node.exe" server.js