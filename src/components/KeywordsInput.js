import React from "react";
import { setKeywords } from "store/actions";
import { useSearch } from "App";

const KeywordInput = () => {
  const [{ keywords }, dispatch] = useSearch();

  const handleChange = e => {
    dispatch(setKeywords(e.target.value));
  };

  return (
    <label>
      <span className="label-text">Keywords</span>
      <input value={keywords} onChange={handleChange} placeholder="None" />
    </label>
  );
};

export default KeywordInput;
