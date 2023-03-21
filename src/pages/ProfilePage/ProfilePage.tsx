// @flow
import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import { getUser, getUserWithClassesAndMarks } from "../../mockData/getData";
import { ClassWithMarks, UserWithClassesWithMarks } from "../../types";
import { ElementsList } from "../../components/ElementsList/ElementsList";
import { Container } from "../../components/Container";
import { StudentAvatar } from "../../components/StudentAvatar";
import { UserName } from "../../components/UserName";
import { averageGrade } from "../../utils/averageGrade";
import { Element } from "../../components/ElementsList/Element";
import { NavigateButton } from "../../components/NavigateButton";

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
      <Container>
        <div>
          <StudentAvatar avatar={user.avatar} />
        </div>
        <div>
          <UserName firstName={user.firstName} lastName={user.lastName} />
          <ElementsList elements={getUserClasses()} />
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
