// @flow
import React from "react";
import { getUsersWithClassesAndMarks } from "../../mockData/getData";
import { useLoaderData } from "react-router-dom";
import { UserWithClassesWithMarks } from "../../types";
import { Container, SmallContainer } from "../Container";
import { StudentAvatar } from "../StudentAvatar";
import { UserName } from "../UserName";
import { ElementsList } from "../ElementsList/ElementsList";
import { Element } from "../ElementsList/Element";
import { averageGrade } from "../../utils/averageGrade";
import { ButtonViewDetail } from "../ButtonViewDetail";

type Props = {};
export const profilesLoader = async () => {
  const users = await getUsersWithClassesAndMarks();
  return { users };
};

export const Profiles = (props: Props) => {
  const { users } = useLoaderData() as { users: UserWithClassesWithMarks[] };

  if (!users) return <div>Loading...</div>;

  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {users.map((user) => {
        return (
          <div className="p-2">
            <SmallContainer>
              <div>
                <StudentAvatar avatar={user.avatar} />
              </div>
              <div>
                <UserName user={user} />
                <ElementsList
                  elements={
                    <Element
                      elementName={"Średnia roczna"}
                      content={averageGrade(
                        user.classesWithMarks.flatMap((classWithMarks) =>
                          classWithMarks.marks.map((mark) => mark.value)
                        )
                      )}
                    />
                  }
                />
                <div className={"flex justify-end align-bottom"}>
                  <ButtonViewDetail href={`profile/${user.uuid}`} />
                </div>
              </div>
            </SmallContainer>
          </div>
        );
      })}
    </div>
  );
};
