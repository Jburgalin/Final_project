import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import LoadingIndicator from "./LoadingIndicator";

export default function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);

  useEffect(() => {
    async function fetchTrivia() {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const data = await response.json();
        
        if(data && data.results){
const formattedData = data.results.map(item => ({
          question: item.question,
          answer: item.correct_answer
        }));
        setTriviaData(formattedData);
}
    }
    fetchTrivia(); // call it
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1 < triviaData.length ? prev + 1 : 0);
    setResetTrigger((prev) => prev + 1);
  };

  const handleprev = () => {
    setCurrentIndex((prev) => prev - 1 >= 0 ? prev - 1 : triviaData.length - 1);
    setResetTrigger((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Trivia Flashcards</h1>
      {triviaData.length > 0 ? (
       <>
        <Flashcard
          question={triviaData[currentIndex].question}
          answer={triviaData[currentIndex].answer}
          resetTrigger={resetTrigger}
        />
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleprev} style={{ marginRight: "10px" }}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>  
       </>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
} 
