import React, { useState } from "react";

const KeywordInput = () => {
  const handleChange = e => {
    setKeywords(e.target.value);
  };

  const [keywords, setKeywords] = useState("");

  return (
    <label>
      <span className="label-text">Keywords</span>
      <input value={keywords} onChange={handleChange} placeholder="None" />
    </label>
  );
};

export default KeywordInput;
