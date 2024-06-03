export default function getStudentsByLocation(students, location) {
  let selected_students = []
  if (!(students instanceof Array)){
    return selected_students; 
  }
  selected_students = students.filter(st=> st.location === location);
  return selected_students;
}
