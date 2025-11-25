// flashcard component
import React, { useState } from "react";
import FlipButton from "./FlipButton";
import "./Flashcard.css";

function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);


  return (
    <div className="flashcard">
      <p className="flashcard-text">
        {showAnswer ? answer : question}
      </p>
      <FlipButton onClick={() => setShowAnswer(!showAnswer)} />
    </div>
  );
}

export default Flashcard;