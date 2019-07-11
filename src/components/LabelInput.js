import React, { useState } from "react";
import uniq from "lodash/fp/uniq";

const SUGGESTED_LABELS = [
  "good first issue",
  "help wanted",
  "first-timers-only"
];

const LabelInput = () => {
  const [labels, setLabels] = useState([]);

  const handleChange = e => {
    setLabels(e.target.value);
  };

  const handleSubmitLabel = e => {
    e.preventDefault();
    if (labels !== "") {
      setLabels(ls => uniq([...ls, labels.toLowerCase()]));
    }
  };
  return (
    <label>
      <span className="label-text">With label</span>
      <input
        autoComplete="off"
        list="labels"
        value={labels}
        onChange={handleChange}
        onKeyDown={e => e.keyCode === 13 && handleSubmitLabel(e)}
      />
      <datalist id="labels">
        {SUGGESTED_LABELS.filter(l => !labels.includes(l)).map(label => (
          <option key={label} value={label} />
        ))}
      </datalist>
      {/* This map function seems to be the troublemaker. But I can't figure out exactly why */}
      {/* <ul>
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
      </ul> */}
    </label>
  );
};

export default LabelInput;
