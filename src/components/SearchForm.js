import React, { useState } from "react";
import uniq from "lodash/fp/uniq";

const useInput = initialState => {
  const [value, setValue] = useState(initialState);
  const handleChange = e => {
    setValue(e.target.value);
  };
  return [value, setValue, handleChange];
};

const SUGGESTED_LABELS = [
  "good first issue",
  "help wanted",
  "first-timers-only"
];

const LANGUAGES = ["Haskell", "JavaScript", "OCaml", "PureScript"];

function App() {
  const [query, handleQueryChange] = useInput("");

  const [label, setLabelValue, handleLabelChange] = useInput("");
  const [labels, setLabels] = useState([]);

  const [language, handleLanguageChange] = useInput(LANGUAGES[1]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ query, labels, language });
  };

  const handleSubmitLabel = e => {
    e.preventDefault();
    if (label !== "") {
      setLabels(ls => uniq([...ls, label.toLowerCase()]));
      setLabelValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="label-text">Keywords</span>
        <input value={query} onChange={handleQueryChange} />
      </label>
      <label>
        <span className="label-text">With label</span>
        <input
          autoComplete="off"
          list="labels"
          value={label}
          onChange={handleLabelChange}
          onKeyDown={e => e.keyCode === 13 && handleSubmitLabel(e)}
        />
        <datalist id="labels">
          {SUGGESTED_LABELS.filter(l => !labels.includes(l)).map(label => (
            <option key={label} value={label} />
          ))}
        </datalist>
        <ul>
          {labels.map(label => (
            <li key={label}>
              <button
                onClick={_e => setLabels(ls => ls.filter(l => l !== label))}
              >
                <span role="img" aria-label="X">
                  ❌
                </span>
              </button>
              {label}
            </li>
          ))}
        </ul>
      </label>
      <label>
        <span className="label-text">In language</span>
        <select value={language} onChange={handleLanguageChange}>
          {LANGUAGES.map(language => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Search →</button>
    </form>
  );
}

export default App;
