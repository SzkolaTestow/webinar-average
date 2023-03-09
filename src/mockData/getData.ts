import { classes, users } from "./data";
import { fakeNetwork } from "./fakeNetwork";
import {
  classWithMarks,
  userWithClassesWithMarks,
  userWithMarks,
} from "./marks";

export async function getUsers() {
  await fakeNetwork("users");
  return users.sort((a, b) => a.lastName.localeCompare(b.lastName));
}

export async function getUsersWithClassesAndMarks() {
  await fakeNetwork("getUserWithClassesAndMarks");
  return userWithClassesWithMarks.sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );
}

export async function getUser(uuid: string) {
  await fakeNetwork("getUser");
  return users.find((user) => user.uuid === uuid);
}

export async function getUserWithMarks(uuid: string) {
  await fakeNetwork("getUserWithMarks");
  return userWithMarks.find((user) => user.uuid === uuid);
}

export async function getClasses() {
  await fakeNetwork("getClasses");
  return classes;
}

export async function getClass(uuid: string) {
  await fakeNetwork("getClass");
  return classes.find((classItem) => classItem.uuid === uuid);
}

export async function getClassWithMarks(uuid: string) {
  await fakeNetwork("getClassWithMarks");
  return classWithMarks.find((classItem) => classItem.uuid === uuid);
}

export async function getUserWithClassesAndMarks(uuid: string) {
  await fakeNetwork("getUserWithClassesAndMarks");
  return userWithClassesWithMarks.find((user) => user.uuid === uuid);
}
