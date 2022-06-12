/* eslint-disable */
const http = require('http');
const fs = require('fs');
const path = process.argv[2] || "database.csv";
const app = http.createServer((req, res) => {
    if (req.url == "/") {
	res.write('Hello Holberton School!');
	res.end();
    } else if (req.url == "/students") {
	res.write('This is the list of our students\n');
	const data = fs.readFile(path, 'utf8', (err, data) => {
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

	});
    }
});

app.listen(1245);
module.exports = app;
