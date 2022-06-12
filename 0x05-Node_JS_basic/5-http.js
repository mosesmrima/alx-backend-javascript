/* eslint-disable */
const http = require('http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];
const app = http.createServer((req, res) => {
    if (req.url == "/") {
	req.write('Hello Holberton School!');
	res.end();
    } else if (req.url == "/students") {
	countStudents(path)
      .then((data) => {
        res.write('This is the list of our students\n')
        data = data.map((item, idx) => {
          if (idx === 0) {
            res.write(item + '\n');
          } else {
            res.write(item + '\n')
          }
        })
        res.end();
      })
      .catch(() => {
        console.log();
        res.write('This is the list of our students\n');
        res.write('Cannot load the database');
        res.end();
      });
    }
});

app.listen(1245);
module.exports = app;
