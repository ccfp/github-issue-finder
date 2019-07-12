import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchForm, { TEST_IDS } from "./SearchForm";
import { LANGUAGES } from "./LanguageInput";

afterEach(cleanup);

test("`LabelInput` adds a label to `labelArray`", () => {
  const { getByLabelText, getByTestId } = render(<SearchForm />);

  const labelInput = getByLabelText(/label/i);
  const activeLabels = getByTestId(TEST_IDS.activeLabels);

  expect(labelInput).toHaveValue("");

  fireEvent.change(labelInput, { target: { value: "Foo" } });
  expect(labelInput).toHaveValue("Foo");

  fireEvent.keyDown(labelInput, { keyCode: 13 });

  expect(labelInput).toHaveValue("");
  expect(activeLabels).toHaveTextContent("foo");
});

test("`LanguageInput` selection works", () => {
  const { getByLabelText } = render(<SearchForm />);

  const languageInput = getByLabelText(/language/i);

  fireEvent.change(languageInput, { target: { value: LANGUAGES[1] } });
  expect(languageInput).toHaveValue(LANGUAGES[1]);
});

test("`KeywordsInput` selection works", () => {
  const { getByLabelText } = render(<SearchForm />);

  const keywordsInput = getByLabelText(/keywords/i);

  fireEvent.change(keywordsInput, { target: { value: "Hello" } });
  expect(keywordsInput).toHaveValue("Hello");
});

test("`SearchForm` form submit works", () => {
  const { getByLabelText } = render(<SearchForm />);

  const keywordsInput = getByLabelText(/keywords/i);
  const languageInput = getByLabelText(/language/i);
  const labelInput = getByLabelText(/label/i);

  fireEvent.change(keywordsInput, { target: { value: "Hello" } });
  fireEvent.change(labelInput, { target: { value: "Foo" } });
  fireEvent.keyDown(labelInput, { keyCode: 13 });
  fireEvent.change(languageInput, { target: { value: LANGUAGES[1] } });

  // @TODO: Implement the `handleSubmit` test
});
