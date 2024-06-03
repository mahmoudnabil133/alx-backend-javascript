export default function getListStudentIds(obj) {
  const ids = [];
  if (!(obj instanceof Array)) {
    return ids;
  }
  obj.forEach((student) => ids.push(student.id));
  // another way
  // ids = obj.map(st=> st.id)
  return ids;
}
