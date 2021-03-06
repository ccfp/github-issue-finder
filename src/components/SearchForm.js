import React from "react";

import KeywordsInput from "./KeywordsInput";
import LabelInput from "./LabelInput";
import LanguageInput from "./LanguageInput";

export const TEST_IDS = {
  activeLabels: "active-labels"
};

const SearchForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <KeywordsInput />
      <LabelInput />
      <LanguageInput />
      <button type="submit">Search →</button>
    </form>
  );
};

export default SearchForm;
