import React from "react";

const TextInput = ({
  label,
  inputPlaceholder,
  setStateFunction,
  onBlur,
  stateValue,
  value,
  id,
  autoFocus,
  type,
}) => {
  const handleInputChange = (e) => {
    setStateFunction({ ...stateValue, [id]: e.target.value });
  };

  return (
    <div className={"w-full"}>
      <label htmlFor={id} className={"text-lg text-navy font-medium"}>
        {label}
      </label>
      <input
        type={type ?? "text"}
        id={id}
        autoFocus={autoFocus}
        placeholder={inputPlaceholder}
        onChange={handleInputChange}
        value={value}
        onBlur={onBlur}
        className={
          "px-4 py-3 w-full border-border border-2 rounded-md text-lg focus:outline-primary text-navy/80 mt-1"
        }
      />
    </div>
  );
};

export default TextInput;
