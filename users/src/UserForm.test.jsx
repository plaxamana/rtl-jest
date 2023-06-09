import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
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

test("it calls onUserAdd when the form is submitted", async () => {
  // NOT THE BEST IMPLEMENTATION
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  // render the UserForm
  render(<UserForm onUserAdd={callback} />);

  // find the inputs
  const [name, email] = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // simulate clicking and entering data
  await user.click(name);
  await user.keyboard("jane");

  await user.click(email);
  await user.keyboard("jane@gmail.com");

  await user.click(button);

  // assertion
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: "jane", email: "jane@gmail.com" });
});
