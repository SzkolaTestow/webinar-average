import React from "react";

type Props = {
  elements: React.ReactNode;
};
export const ElementsList = ({ elements }: Props) => {
  return (
    <ul role="list" className="divide-y divide-gray-200 ">
      {elements}
    </ul>
  );
};
