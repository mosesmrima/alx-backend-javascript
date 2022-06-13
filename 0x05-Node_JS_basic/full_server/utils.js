const fs = require('fs');

const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let lines = data.trim().split('\n');
	let student = [];
        const csList = [];
        const sweList = [];
        for (let i = 1; i < lines.length; i++) {
          student = lines[i].split(',');
          if (student[3] === 'CS') {
            csList.push(student[0]);
          } else if (student[3] === 'SWE') {
            sweList.push(student[0]);
          }
        }
        resolve({ csList, sweList });
      }
    });
  });
};

module.exports = readDatabase;
