import React from "react";

import { TEST_IDS } from "./SearchForm";
import {
  addSelectedLabel,
  removeSelectedLabel,
  setCurrentLabel
} from "store/actions";
import { useSearch } from "App";

const LabelInput = () => {
  const [
    { currentLabel, selectedLabels, suggestedLabels },
    dispatch
  ] = useSearch();

  const handleChange = e => {
    dispatch(setCurrentLabel(e.target.value));
  };
  const handleRemoveLabel = label => _e => {
    dispatch(removeSelectedLabel(label));
  };

  const handleAddLabel = e => {
    e.preventDefault();
    dispatch(addSelectedLabel(e.target.value));
  };
  return (
    <label>
      <span className="label-text">With labels</span>
      <input
        autoComplete="off"
        list="labels"
        value={currentLabel}
        placeholder="Add a label"
        onChange={handleChange}
        onKeyDown={e => e.keyCode === 13 && handleAddLabel(e)}
        onBlur={handleAddLabel}
      />
      <datalist id="labels">
        {suggestedLabels.map(label => (
          <option key={label} value={label} />
        ))}
      </datalist>
      <ul data-testid={TEST_IDS.activeLabels}>
        {selectedLabels.map(label => (
          <li key={label}>
            <button onClick={handleRemoveLabel(label)}>
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
