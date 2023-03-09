// @flow
import React from "react";
import { ClassWithMarks } from "../../types";
import { averageGrade } from "../../utils/averageGrade";

type Props = {
  elementName: string;
  content: React.ReactNode;
};
export const Element = ({ elementName, content }: Props) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate ">{elementName}</p>
        </div>
        <div className="inline-flex items-center text-base font-semibold">
          {content}
        </div>
      </div>
    </li>
  );
};
