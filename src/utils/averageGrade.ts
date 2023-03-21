export function averageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  if (grades.some((grade) => grade < 0)) {
    throw new Error("Negative grades are not allowed");
  }

  if (grades.some((grade) => grade > 6)) {
    throw new Error('Grades above 6 are not allowed');
  }

  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  return Number(average.toFixed(2));
}
