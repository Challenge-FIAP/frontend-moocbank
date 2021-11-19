import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <>
      <label htmlFor={rest.name}>{label}</label>
      <input
        type={rest.type ? rest.type : "text"}
        className="form-control"
        {...rest}
      ></input>
    </>
  );
};

export default Input;
