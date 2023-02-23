import React, { useState } from "react";
import WizardBody from "./WizardBody";
import Header from "./Header";
import LoadingPage from "../pages/LoadingPage";
import SignUpPage from "../pages/SignUpPage";

const Wizard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const [userAnswers, setUserAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    postcode: "",
  });

  return (
    <div className={"bg-white"}>
      <Header currentQuestion={currentQuestion} />
      {currentQuestion === 12 ? (
        <LoadingPage setCurrentQuestion={setCurrentQuestion} />
      ) : currentQuestion === 13 ? (
        <SignUpPage
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        />
      ) : (
        <WizardBody
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        />
      )}
    </div>
  );
};

export default Wizard;
