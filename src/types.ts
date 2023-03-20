export type User = {
  uuid: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  avatar: string;
};

export enum SubjectCode {
  ENGLISH = "ENGLISH",
  POLISH = "POLISH",
  HISTORY = "HISTORY",
  MATH = "MATH",
  GEOGRAPHY = "GEOGRAPHY",
  FRENCH = "FRENCH",
  SPANISH = "SPANISH",
  PHYSICS = "PHYSICS",
  CHEMISTRY = "CHEMISTRY",
  BIOLOGY = "BIOLOGY",
  IT = "IT",
  MUSIC = "MUSIC",
  ART = "ART",
  PE = "PE",
  RELIGION = "RELIGION",
  ECONOMICS = "ECONOMICS",
}

export type Class = {
  uuid: string;
  name: string;
  subject: SubjectCode;
};

export type Mark = {
  uuid: string;
  value: number;
};

export type UserWithMarks = User & {
  marks: Mark[];
};

export type ClassWithMarks = Class & {
  marks: Mark[];
};

export type UserWithClasses = User & {
  classes: Class[];
};

export type UserWithClassesWithMarks = User & {
  classesWithMarks: ClassWithMarks[];
};
