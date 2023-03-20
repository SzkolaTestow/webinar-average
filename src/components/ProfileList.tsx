// @flow
import React from "react";
import { getUsersWithClassesAndMarks } from "../mockData/getData";
import { useLoaderData } from "react-router-dom";
import { UserWithClassesWithMarks } from "../types";
import { Profile } from "./Profile/Profile";

type Props = {};
export const profilesLoader = async () => {
  const users = await getUsersWithClassesAndMarks();
  return { users };
};

export const ProfileList = (props: Props) => {
  const { users } = useLoaderData() as { users: UserWithClassesWithMarks[] };

  if (!users) return <div>Loading...</div>;

  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {users.map((user) => (
        <Profile
          firstName={user.firstName}
          lastName={user.lastName}
          uuid={user.uuid}
          avatar={user.avatar}
          classesWithMarks={user.classesWithMarks}
        />
      ))}
    </div>
  );
};
