// @flow
import React from "react";
import { SmallContainer } from "../Container";
import { StudentAvatar } from "../StudentAvatar";
import { UserName } from "../UserName";
import { ElementsList } from "../ElementsList/ElementsList";
import { Element } from "../ElementsList/Element";
import { averageGrade } from "../../utils/averageGrade";
import { NavigateButton } from "../NavigateButton";
import { ClassWithMarks } from "../../types";

type Props = {
  uuid: string;
  avatar: string;
  firstName: string;
  lastName: string;
  classesWithMarks: ClassWithMarks[];
};

export const Profile = ({
  avatar,
  firstName,
  lastName,
  classesWithMarks,
  uuid,
}: Props) => {
  return (
    <div className="p-2">
      <SmallContainer>
        <div>
          <StudentAvatar avatar={avatar} />
        </div>
        <div>
          <UserName firstName={firstName} lastName={lastName} />
          <ElementsList
            elements={
              <Element
                elementName={"Średnia roczna"}
                content={averageGrade(
                  classesWithMarks.flatMap((classWithMarks) =>
                    classWithMarks.marks.map((mark) => mark.value)
                  )
                )}
              />
            }
          />
          <div className={"flex justify-end align-bottom"}>
            <NavigateButton href={`profile/${uuid}`} />
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};
