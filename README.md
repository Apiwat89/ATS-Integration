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




ATS-INTEGRATION/
│
├── data/
│   └── jobs.db                 <-- SQLite database เก็บข้อมูล normalized แล้ว
│
├── mock/
│   ├── jobsdb.json             <-- mock จาก JobsDB
│   └── jobthai.json            <-- mock จาก JobThai
│
├── src/
│   ├── config/
│   │   └── env.js              <-- config ต่าง ๆ (ยังน้อย)
│   │
│   ├── controllers/
│   │   └── job.controller.js   <-- รวม Controller พวก mock, saveMockToDb
│   │
│   ├── database/
│   │   ├── db.node.js          <-- SQLite init (production)
│   │   ├── db.bun.js
│   │   ├── db.puer.js
│   │   └── db.js               <-- ตัวเลือก DB loader
│   │
│   ├── routes/
│   │   └── job.route.js        <-- API path ต่าง ๆ
│   │
│   ├── services/
│   │   ├── jobsdb.service.js   <-- (อนาคต) ดึงจริงจาก JobsDB API
│   │   ├── jobthai.service.js  <-- (อนาคต) ดึงจริงจาก JobThai API
│   │   ├── mock.service.js     <-- ดึง mock สำหรับ dev
│   │   └── save.service.js     <-- normalize + save เข้า DB
│   │
│   ├── utils/
│   │   ├── cron.js             <-- cron schedule อัปเดต DB ทุก 1 นาที
│   │   └── logger.js
│   │
│   └── server.js               <-- เริ่ม server + เรียก cron
│
├── package.json
└── README.md
