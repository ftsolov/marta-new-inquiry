import React from "react";

const Question = ({ question }) => {
  return (
    <h1
      className={"text-2xl hype text-navy font-semibold mb-6"}
      lang={"de"}
      style={{ hyphens: "auto" }}
    >
      {question}
    </h1>
  );
};

export default Question;
