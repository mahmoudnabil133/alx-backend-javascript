const http = require('http');

const port = 1245;
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const Count = lines.length - 1;
    const fields = {};
    for (let i = 1; i < lines.length; i += 1) {
      const st = lines[i].split(',');
      if (!fields[st[3]]) {
        fields[st[3]] = [];
      }
      fields[st[3]].push(st[0]);
    }
    console.log(`Number of students: ${Count}`);
    let stData = [];
    for (const k in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, k)) { // This is the safer way to check
        const names = fields[k];
        if (names.length > 0) {
          stData.push(`Number of students in ${k}: ${names.length}. List: ${names.join(', ')}`);
        }
      }
    }
    stData = stData.join('\n');
    resolve(stData);
  });
});
const sendResponse = (res, statusCode, data) => {
  res.statusCode = statusCode;
  res.setHeader('Content-type', 'text/plain');
  res.end(data);
};

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    const msg = 'Hello Holberton School!';
    sendResponse(res, 200, msg);
  }
  if (req.url === '/students') {
    try {
      const studetsData = await countStudents(process.argv[2]);
      const msg = `This is the list of our students\n${studetsData}`;
      sendResponse(res, 200, msg);
    } catch (err) {
      const msg = `This is the list of our students\n${err.message}`;
      sendResponse(res, 500, msg);
    }
  }
});

app.listen(port);

module.exports = app;
