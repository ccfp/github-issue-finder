import React, { useState } from "react";

const LANGUAGES = ["Any", "Haskell", "JavaScript", "OCaml", "PureScript"];

const LanguageInput = () => {
  const [language, setLanguage] = useState(LANGUAGES[2]);

  const handleChange = e => {
    setLanguage(e.target.value);
  };

  return (
    <label>
      <span className="label-text">In language</span>
      <select value={language} onChange={handleChange}>
        {LANGUAGES.map(language => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageInput;
