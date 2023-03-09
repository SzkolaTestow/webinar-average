import { averageGrade } from "./averageGrade";

describe("averageGrade", () => {
  test("returns 0 for an empty array", () => {
    expect(averageGrade([])).toEqual(0);
  });

  test("returns the average of grades in an array with one element", () => {
    expect(averageGrade([5])).toEqual(5.0);
  });

  test("returns the average of grades in an array with multiple elements", () => {
    expect(averageGrade([2, 4, 6, 3.5, 5.5])).toEqual(4.2);
  });

  test("throws an error when there are negative grades", () => {
    expect(() => averageGrade([-2, 4, -6, 8])).toThrow(
      "Negative grades are not allowed"
    );
  });

  test("throws an error when there is at least one negative grade in an array with positive grades", () => {
    expect(() => averageGrade([2, 4, -6, 8])).toThrow(
      "Negative grades are not allowed"
    );
  });

  test("does not throw an error when there are no negative grades", () => {
    expect(() => averageGrade([2, 4, 6, 8])).not.toThrow();
  });
});
