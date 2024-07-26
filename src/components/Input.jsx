import React from "react";

const Input = ({ type, value, onChange, required, className }) => {
  return (
    <div className="form-group custom-form">
      <input
        type={type}
        required={required}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
