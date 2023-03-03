import React from "react";

const StatusBar = ({ currentQuestion, setCurrentQuestion }) => {
  const handleBackClick = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className={"w-full flex-row flex gap-8 mt-2 mb-4"}>
      {currentQuestion > 1 && (
        <button
          onClick={handleBackClick}
          className={"text-navy w-full text-left font-medium"}
        >
          Zurück
        </button>
      )}
      <p className={"mx-auto text-navy/70 text-base w-full text-center"}>
        Schritt {currentQuestion}/11
      </p>
      {currentQuestion > 1 && <div className={"w-full"}></div>}
    </div>
  );
};

export default StatusBar;
