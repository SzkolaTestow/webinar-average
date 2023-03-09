// @flow
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flow-root">
      <div className="max-w-2xl mx-auto">
        <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 flex gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export const SmallContainer = ({ children }: ContainerProps) => {
  return (
    <div className="flow-root">
      <div className="max-w-sm">
        <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 flex gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};
