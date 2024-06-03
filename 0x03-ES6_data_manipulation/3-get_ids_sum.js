export default function getStudentIdsSum(students) {
  let sum = 0;
  if (!(students instanceof Array)) {
    return sum;
  }
  sum = students.reduce((tot, st)=> tot + st.id, 0);
  console.log(sum)
  return sum;

}
