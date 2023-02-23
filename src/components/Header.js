import React from "react";
import ProgressBar from "./ProgressBar";

const Header = ({ currentQuestion }) => {
  return (
    <div className={"w-full relative"}>
      <div
        className={
          "w-full h-16 p-4 flex flex-row bg-white justify-between items-center border-border border-b"
        }
      >
        <img src="/logo.svg" className={"-ml-1.5"} alt="" />
        <h1>EN</h1>
      </div>
      {currentQuestion < 12 && <ProgressBar progress={currentQuestion} />}
    </div>
  );
};

export default Header;
