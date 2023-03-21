import React from "react";
import { render, screen } from "@testing-library/react";
import { Profile } from "./Profile";
import { SubjectCode } from "../../types";

const props = {
  uuid: "123",
  firstName: "John",
  lastName: "Snow",
  avatar: "http://example.com",
  classesWithMarks: [
    {
      uuid: "1",
      name: "Angielski",
      subject: SubjectCode.ENGLISH,
      marks: [{ uuid: "1", value: 5 }],
    },
    {
      uuid: "2",
      name: "Matematyka",
      subject: SubjectCode.MATH,
      marks: [{ uuid: "2", value: 4 }],
    },
  ],
};

describe("Profiles", () => {
  it("should display name and avatar", () => {
    render(<Profile {...props} />);

    expect(screen.getByText("John Snow")).toBeVisible();
    expect(screen.getByRole("img").getAttribute("src")).toBe(
      "http://example.com"
    );
  });

  it("should display an average grade", () => {
    render(<Profile {...props} />);

    expect(screen.getByText("4.5")).toBeVisible();
  });
});
