import React, { useState } from "react";
import uniq from "lodash/fp/uniq";
import { normalizeLabelString } from "lib";
import { TEST_IDS } from "./SearchForm";

const SUGGESTED_LABELS = [
  "good first issue",
  "help wanted",
  "first-timers-only"
];

const LabelInput = () => {
  const [labelArray, setLabelArray] = useState(SUGGESTED_LABELS);
  const [label, setLabel] = useState("");

  const handleChange = e => {
    setLabel(e.target.value);
  };

  const handleSubmitLabel = e => {
    e.preventDefault();
    const normalizedLabel = normalizeLabelString(label);
    if (normalizedLabel !== "") {
      setLabelArray(ls => uniq([...ls, normalizedLabel]));
      setLabel("");
    }
  };
  return (
    <label>
      <span className="label-text">With labels</span>
      <input
        autoComplete="off"
        list="labels"
        value={label}
        placeholder="Add a label"
        onChange={handleChange}
        onKeyDown={e => e.keyCode === 13 && handleSubmitLabel(e)}
      />
      <datalist id="labels">
        {SUGGESTED_LABELS.filter(l => !labelArray.includes(l)).map(label => (
          <option key={label} value={label} />
        ))}
      </datalist>
      <ul data-testid={TEST_IDS.activeLabels}>
        {labelArray.map(label => (
          <li key={label}>
            <button
              onClick={_e => setLabelArray(ls => ls.filter(l => l !== label))}
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
  );
};

export default LabelInput;
