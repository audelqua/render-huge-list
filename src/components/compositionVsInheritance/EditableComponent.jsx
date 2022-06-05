import React, { useState } from "react";
import useToggle from '../../hooks/useToggle'

const Editable = () => {
    //instead of defining state and handleToggle here and also in other component we can define 
    // it in useToggle hook as react composition ask us to dont repeat similar codes
    const { bool, handleToggle } = useToggle()
    const [inputValue, setInputValue] = useState("Title");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            {bool ? (
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
            <button onClick={handleToggle}>{bool ? "Cancel" : "Edit"}</button>
        </div>
    );
};

export default Editable;