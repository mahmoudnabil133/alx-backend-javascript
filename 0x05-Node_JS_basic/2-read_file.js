const fs = require('fs');

const countStudents = (path) => {
  try {
    const csvData = fs.readFileSync(path, 'utf8');
    const lines = csvData.split('\n').filter((line) => line.trim() !== '');
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
    for (const k in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, k)) { // This is the safer way to check
        const names = fields[k];
        if (names.length > 0) {
          console.log(`Number of students in ${k}: ${names.length}. List: ${names.join(', ')}`);
        }
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
