import React, { useState } from "react";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

const AnswerOptions = ({
  question,
  userAnswers,
  setUserAnswers,
  setCurrentQuestion,
  currentQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleSelectAnswer = (index) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    }, 500);
  };

  return (
    <div className={"flex flex-col w-full gap-2"}>
      {question.type === "select" ? (
        question.answers.map((answerOption, index) => {
          return (
            <SelectInput
              text={answerOption}
              selected={selectedAnswer === index}
              selectedAnswer={selectedAnswer}
              setUserAnswers={setUserAnswers}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              handleSelectAnswer={() => handleSelectAnswer(index)}
            />
          );
        })
      ) : (
        <TextInput
          label={question.inputLabel}
          stateValue={userAnswers}
          setStateFunction={setUserAnswers}
          value={userAnswers.postcode}
          id={"postcode"}
          inputPlaceholder={question.inputPlaceholder}
        />
      )}
    </div>
  );
};

export default AnswerOptions;
