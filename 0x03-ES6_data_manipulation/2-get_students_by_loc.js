export default function getStudentsByLocation(students, location) {
  let selectedStudents = [];
  if (!(students instanceof Array)) {
    return selectedStudents;
  }
  selectedStudents = students.filter((st) => st.location === location);
  return selectedStudents;
}
