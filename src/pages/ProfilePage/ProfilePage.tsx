// @flow
import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import { getUser, getUserWithClassesAndMarks } from "../../mockData/getData";
import {
  Class,
  ClassWithMarks,
  Mark,
  UserWithClassesWithMarks,
} from "../../types";
import { ElementsList } from "../../components/ElementsList/ElementsList";
import { Container } from "../../components/Container";
import { StudentAvatar } from "../../components/StudentAvatar";
import { UserName } from "../../components/UserName";
import { averageGrade } from "../../utils/averageGrade";
import { Element } from "../../components/ElementsList/Element";
import { ButtonBack } from "../../components/ButtonBack";

type Props = {};

export const profileLoader = async ({ params }: any) => {
  const user = await getUserWithClassesAndMarks(params.userId);
  return { user };
};
const ProfilePage = (props: Props) => {
  const { user } = useLoaderData() as { user: UserWithClassesWithMarks };

  if (!user) return <div>Loading...</div>;

  const getUserClasses = () => {
    return user.classesWithMarks.map((classWithMarks: ClassWithMarks) => {
      return (
        <Element
          elementName={classWithMarks.name}
          content={averageGrade(classWithMarks.marks.map((mark) => mark.value))}
          key={classWithMarks.uuid}
        />
      );
    });
  };

  return (
    <div className="relative">
      <div className={"absolute left-4 top-4"}>
        <ButtonBack href="/" />
      </div>
      <Container>
        <div>
          <StudentAvatar avatar={user.avatar} />
        </div>
        <div>
          <UserName user={user} />
          <ElementsList elements={getUserClasses()} />
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
