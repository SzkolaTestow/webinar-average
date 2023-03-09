import { classes, users } from "./data";
import {
  ClassWithMarks,
  Mark,
  UserWithClassesWithMarks,
  UserWithMarks,
} from "../types";

function getRandomInt() {
  let rand = Math.random();
  if (rand < 0.25) {
    return 1;
  } else if (rand < 0.3) {
    return 2;
  } else if (rand < 0.85) {
    return Math.floor(Math.random() * 4) + 3;
  } else {
    return 6;
  }
}

export const getMarks = (): Mark[] => {
  const data: Mark[] = [];
  let uuid = 1;

  // Loop through each student and class combination
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < classes.length; j++) {
      // Generate random values for each date in the past month
      for (let k = 0; k < 5; k++) {
        const value = getRandomInt(); // Random value between 1 and 6
        const date = new Date(Date.now() - k * 86400000); // Current date minus k days
        const entry = {
          uuid: uuid.toString(),
          student: users[i],
          class: classes[j],
          value: value,
          date: date,
        };
        data.push(entry);
        uuid++;
      }
    }
  }

  return data;
};

const marks: Mark[] = getMarks();

export const userWithMarks: UserWithMarks[] = users.map((user) => ({
  ...user,
  marks: marks.filter((mark) => mark.student.uuid === user.uuid),
}));

export const classWithMarks: ClassWithMarks[] = classes.map((classItem) => ({
  ...classItem,
  marks: marks.filter((mark) => mark.class.uuid === classItem.uuid),
}));

export const userWithClassesWithMarks: UserWithClassesWithMarks[] = users.map(
  (user) => ({
    ...user,
    classesWithMarks: classWithMarks
      .filter((classItem) =>
        classItem.marks.some((mark) => mark.student.uuid === user.uuid)
      )
      .map((classItem) => ({
        ...classItem,
        marks: classItem.marks.filter(
          (mark) => mark.student.uuid === user.uuid
        ),
        students: classItem.students.filter(
          (student) => student.uuid === user.uuid
        ),
      })),
  })
);
