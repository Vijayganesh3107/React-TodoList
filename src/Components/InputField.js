import React from "react";
import ReactDom from "react-dom";
import { Fragment, useState } from "react";

const InputField = (props) => {
  const [inputValue, setInputField] = useState("");

  const updateInputField = (event) => {
    setInputField(event.target.value);
  };

  const submitFunction = () => {
    if (inputValue) {
      props.add(inputValue);
    } else {
      setInputField("");
    }
  };

  return (
    <Fragment>
      <input
        type="text"
        value={inputValue}
        onChange={updateInputField}
        placeholder="Enter the work to do"
      ></input>
      <button onClick={submitFunction}>➕</button>
    </Fragment>
  );
};

export default InputField;
