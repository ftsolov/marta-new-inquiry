import React from "react";

const Button = ({ setCurrentQuestion, disabled }) => {
  const handleButtonClick = () => {
    setCurrentQuestion((prev) => prev + 1);
  }

  return (
    <div
      className={
        "w-full flex items-center p-4 absolute bottom-0 left-0 right-0 border-t"
      }
    >
      <button
        className={
          "w-full text-center font-medium bg-primary py-4 rounded-md text-xl disabled:bg-primary/60 text-white transition"
        }
        onClick={handleButtonClick}
        disabled={disabled}
      >
        Continue
      </button>
    </div>
  );
};

export default Button;
