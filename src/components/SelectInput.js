import React from "react";

const SelectInput = ({
  text,
  selectedAnswer,
  selected,
  handleSelectAnswer,
  index,
}) => {
  return (
    <div
      className={`w-full transition duration-100 p-6 border border-2 active:scale-[.98] border-border text-lg text-navy font-normal bg-white rounded-md ${
        selected
          ? "border-primary text-indigo-500 bg-[#FAFBFF] font-medium"
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
