// @flow
import React from "react";
import { User } from "../types";

type Props = {
  user: User;
};
export const UserName = ({ user }: Props) => {
  return (
    <h1 className="text-xl">
      {user.firstName || user.lastName ? (
        <>
          {user.firstName} {user.lastName}
        </>
      ) : (
        <i>No Name</i>
      )}
    </h1>
  );
};
