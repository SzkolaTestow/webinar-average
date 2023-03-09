// @flow
import React from "react";

type Props = {
  avatar: string;
};
export const StudentAvatar = ({ avatar }: Props) => {
  return <img className="w-40 h-40 rounded-b-2xl" key={avatar} src={avatar} />;
};
