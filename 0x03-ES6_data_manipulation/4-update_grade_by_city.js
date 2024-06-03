export default function updateStudentGradeByCity(students, city, grades) {
  if (!(students instanceof Array)) return [];
  return students.filter((st) => st.location === city).map((st) => {
    const stGrade = grades.filter((g) => g.studentId === st.id);
    if (stGrade.length > 0) return { ...st, grade: stGrade[0].grade };
    return { ...st, grade: 'N/A' };
  });
}
