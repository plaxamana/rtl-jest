import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";
import { test, expect } from "vitest";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find elements in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing
  // what its expected to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
