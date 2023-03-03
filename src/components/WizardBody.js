import React from "react";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import StatusBar from "./StatusBar";
import Button from "./Button";
import TrustElements from "./TrustElements";

const wizardData = [
  {
    question: "Gibt es eine Unterkunft für die Betreuungskraft?",
    type: "select",
    answers: [
      "Ja, ein privates zimmer",
      "Ja, ein private Wohneinheit",
      "Nein",
      "Noch unklar",
    ],
  },
  {
    question: "Wann soll die Betreuung beginnen?",
    type: "select",
    answers: ["Schnellst möglich", "In 2-3 Wochen", "In 1-2 Monaten", "Später"],
  },
  {
    question:
      "Wie viele Personen wohnen im Haushalt des Betreuungsbedürtfigen?",
    type: "select",
    answers: ["Keine", "Eine Person", "Mehrere Personen", "Noch unklar"],
  },
  {
    question: "Welcher Pflegegrad liegt vor?",
    type: "select",
    answers: [
      "Pflegegrad 1",
      "Pflegegrad 2",
      "Pflegegrad 3",
      "Pflegegrad 4",
      "Pflegegrad 5",
      "Noch unklar",
    ],
  },
  {
    question: "Leidet die pflegebedürftige Person an Demenz?",
    type: "select",
    answers: ["Ja", "Ja, stark", "Nein", "Unklar"],
  },
  {
    question: "Wie mobil ist die Pflegebedürftige Person?",
    type: "select",
    answers: [
      "Rollstuhl erofrderlich",
      "Bettlägerig",
      "Noch unklar",
      "Uneingeschränkt",
    ],
  },
  {
    question: "Wird nächtliche Betruung benötigt?",
    type: "select",
    answers: ["Ja, gelegentlich", "Ja, regelmäßig", "Nein", "Noch unklar"],
  },
  {
    question: "Für wen suchen Sie eine Betreuungskraft?",
    type: "select",
    answers: ["Eltern", "Großeltern", "Mich selbst", "Jemand Anderes"],
  },
  {
    question: "Wie gut sollte die Pflegekraft Deutsch sprechen?",
    type: "select",
    answers: [
      "Kein Deutsch Erforderlich",
      "Level 1 - Anfänger",
      "Level 2 - Grundkenntnisse",
      "Level 3 - Fortgeschritten",
    ],
  },
  {
    question: "Was ist Ihnen bei dieser Anfrage am wichtigsten?",
    type: "select",
    answers: [
      "Die beste Betreuungskraft finden",
      "Preise vergleichen",
      "Anbieter vergleichen",
      "Weitere Informationen erhalten",
    ],
  },
  {
    question: "Wo wird die Betreuungskraft benötigt?",
    type: "textInput",
    inputLabel: "Postleitzahl",
    inputPlaceholder: "e.g 10367",
  },
];
const WizardBody = ({
  currentQuestion,
  userAnswers,
  setUserAnswers,
  setCurrentQuestion,
}) => {
  if (currentQuestion > 11) return null;
  return (
    <div className={"p-4"}>
      <StatusBar
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      <Question question={wizardData[currentQuestion - 1].question} />
      <AnswerOptions
        question={wizardData[currentQuestion - 1]}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
      />
      {currentQuestion === 1 && <TrustElements />}
      {currentQuestion === 11 && (
        <Button
          disabled={userAnswers.postcode.length < 5}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
    </div>
  );
};

export default WizardBody;
