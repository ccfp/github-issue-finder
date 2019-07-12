import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchForm from "./SearchForm";

afterEach(cleanup);

test("LabelInput can be focused and accepts text input", () => {
  const { getByLabelText } = render(<SearchForm />);

  const labelInput = getByLabelText(/label/i);
  labelInput.focus();
  expect(labelInput).toHaveFocus();

  fireEvent.change(labelInput, { target: { value: "foo" } });
  expect(labelInput).toHaveValue("foo");
});
