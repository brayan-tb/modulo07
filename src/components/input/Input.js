import React from "react";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>
        {props.text}
        {props.required && <span className="red">*</span>}
      </label>
      <input
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.text + "..."}
        autoComplete="off"
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maskLimit}
      />
    </>
  );
};

export default Input;
