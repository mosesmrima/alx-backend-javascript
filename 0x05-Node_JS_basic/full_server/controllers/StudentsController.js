import { path } from '../server';

const readDatabase = require('../utils');

export class StudentsController {
  static getAllStudents (request, response) {
    readDatabase(path)
      .then((data) => {
        response.write('This is the list of our students\n');
        response.write(`Number of students in CS: ${data.csList.length}. List: ${data.csList.join(', ')}\n`);
        response.write(`Number of students in SWE: ${data.sweList.length}. List: ${data.sweList.join(', ')}\n`);
        response.status(200).send();
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (request, response) {
    readDatabase(path)
      .then((data) => {
        if (request.params.major === 'CS') {
          response.status(200).send(`List: ${data.csList.join(', ')}`);
        } else if (request.params.major === 'SWE') {
          response.status(200).send(`List: ${data.sweList.join(', ')}`);
        } else {
          response.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
