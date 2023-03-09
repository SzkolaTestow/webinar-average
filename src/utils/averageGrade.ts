export function averageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  if (grades.some((grade) => grade < 0)) {
    throw new Error("Negative grades are not allowed");
  }

  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  return Number(average.toFixed(2));
}
