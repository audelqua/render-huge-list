import React, { useState } from "react";

const Editable = () => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState("Title");

  const toggleEditable = () => {
    setEditable((prevEditable) => !prevEditable);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {editable ? (
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      ) : (
        <>Title: {inputValue}</>
      )}
      <button onClick={toggleEditable}>{editable ? "Cancel" : "Edit"}</button>
    </div>
  );
};

export default Editable;