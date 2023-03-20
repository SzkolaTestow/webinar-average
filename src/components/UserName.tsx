// @flow
import React from "react";
import { User } from "../types";

type Props = {
  firstName: string;
  lastName: string;
};
export const UserName = ({ firstName, lastName }: Props) => {
  return (
    <h1 className="text-xl">
      {firstName || lastName ? (
        <>
          {firstName} {lastName}
        </>
      ) : (
        <i>No Name</i>
      )}
    </h1>
  );
};
