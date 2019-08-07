import React from "react";
import { useSearch } from "App";
import { stringify } from "query-string";
import { navigate } from "@reach/router";
import KeywordsInput from "./KeywordsInput";
import LabelInput from "./LabelInput";
import LanguageInput from "./LanguageInput";

export const TEST_IDS = {
  activeLabels: "active-labels"
};

const SearchForm = () => {
  const [{ keywords, selectedLabels, selectedLanguage }] = useSearch();

  const handleSubmit = e => {
    e.preventDefault();
    const str = stringify({
      keywords,
      labels: selectedLabels,
      language: selectedLanguage
    });
    navigate(`/results?${str}`);
    console.log(str);
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
