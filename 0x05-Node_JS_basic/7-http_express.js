/* eslint-disable */
const express = require('express');
const fs = require('fs');
const app = express();
const path = process.argv[2] || 'none';
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  const data = fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
	    res.end('Cannot load the database');
    } else {
	    const lines = data.trim().split('\n');
      const len = lines.length - 1;
      let cs = 0;
      const csList = [];
	    let swe = 0;
      const sweList = [];
      res.write(`Number of students: ${len}\n`);
      for (let i = 1; i < lines.length; i++) {
        const [fname, lname, age, field] = lines[i].split(',');
        if (field === 'CS') {
          cs++;
          csList.push(fname);
        } else if (field === 'SWE') {
          swe++;
          sweList.push(fname);
        }
      }
      res.write(`Number of students in CS: ${cs}. List: ${csList.join(', ')}\n`);
      res.write(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}\n`);
      res.end();
	    }
  });
});

app.listen(1245);
module.exports = app;
