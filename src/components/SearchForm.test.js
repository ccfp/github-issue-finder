import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchForm, { TEST_IDS } from "./SearchForm";
import { SearchProvider } from "App";

afterEach(cleanup);

const renderWithProvider = () =>
  render(
    <SearchProvider>
      <SearchForm />
    </SearchProvider>
  );

test("`LabelInput` adds a label to `labelArray`", () => {
  const { getByLabelText, getByTestId } = renderWithProvider();

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
  const { getByLabelText } = renderWithProvider();

  const languageInput = getByLabelText(/language/i);

  fireEvent.change(languageInput, { target: { value: "Haskell" } });
  expect(languageInput).toHaveValue("Haskell");
});

test("`KeywordsInput` selection works", () => {
  const { getByLabelText } = renderWithProvider();

  const keywordsInput = getByLabelText(/keywords/i);

  fireEvent.change(keywordsInput, { target: { value: "Hello" } });
  expect(keywordsInput).toHaveValue("Hello");
});

test("`SearchForm` form submit works", () => {
  const { getByLabelText } = renderWithProvider();

  const keywordsInput = getByLabelText(/keywords/i);
  const languageInput = getByLabelText(/language/i);
  const labelInput = getByLabelText(/label/i);

  fireEvent.change(keywordsInput, { target: { value: "Hello" } });
  fireEvent.change(labelInput, { target: { value: "Foo" } });
  fireEvent.keyDown(labelInput, { keyCode: 13 });
  fireEvent.change(languageInput, { target: { value: "Any" } });

  // @TODO: Implement the `handleSubmit` test
});
