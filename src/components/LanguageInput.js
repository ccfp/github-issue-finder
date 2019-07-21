import React from "react";
import { useSearch } from "App";
import { setSelectedLanguage } from "store/actions";

const LanguageInput = () => {
  const [{ languages, selectedLanguage }, dispatch] = useSearch();

  const handleChange = e => {
    dispatch(setSelectedLanguage(e.target.value));
  };

  return (
    <label>
      <span className="label-text">In language</span>
      <select value={selectedLanguage} onChange={handleChange}>
        {languages.map(language => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageInput;
