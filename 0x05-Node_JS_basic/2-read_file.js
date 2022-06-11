/* eslint-disable */
const fs = require('fs');

const countStudents = (path) => {
  try {
    const conts = fs.readFileSync(path, 'utf8');
    const lines = conts.trim().split('\n');
    const len = lines.length - 1;
    let cs = 0;
    const csList = [];
    let swe = 0;
    const sweList = [];
    console.log(`Number of students: ${len}`);
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
    console.log('');
    console.log(`Number of students in CS: ${cs}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${swe}. List: ${sweList.join(', ')}`);
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
