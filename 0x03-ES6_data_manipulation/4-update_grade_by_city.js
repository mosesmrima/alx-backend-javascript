/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsCity = students.filter((student) => student.location === city);
  return studentsCity.map((student) => {
    const found = newGrades.find((grade) => grade.studentId === student.id);
    if (found === undefined) {
      student.grade = "N/A";
      return student;
    }
    student.grade = found.grade;
    return student;
  });
}
