const express = require('express');

const app = express();
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
    let stData = [];
    stData.push(`Number of students: ${Count}`);
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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentsData = await countStudents(process.argv[2]);
    const msg = `This is the list of our students\n${studentsData}`;
    res.status(200).send(msg);
  } catch (err) {
    const msg = `This is the list of our students\n${err.message}`;
    res.status(500).send(msg);
  }
});

app.listen(port);
module.exports = app;
