import React from "react";

const SelectInput = ({
  text,
  selected,
  handleSelectAnswer,
  index,
}) => {
  return (
    <div
      className={`w-full transition duration-100 p-5 border border-2 active:scale-[.98] border-border text-lg text-navy font-normal bg-white rounded-md ${
        selected
          ? "border-primary-400 text-primary-600 bg-primary-200 font-medium"
          : "null"
      }`}
      onClick={handleSelectAnswer}
      key={index}
    >
      {text}
    </div>
  );
};

export default SelectInput;
