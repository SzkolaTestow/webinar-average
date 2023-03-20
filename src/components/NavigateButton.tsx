import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  href: string;
  back?: boolean;
};
export const NavigateButton = ({ href, back = false }: ButtonProps) => {
  return (
    <Link
      className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      to={href}
    >
      <svg
        className={`h-5 w-5 ${back ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  );
};
