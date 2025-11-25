import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";

export default function App() {
  const [triviaData, setTriviaData] = useState([]);

  useEffect(() => {
    async function fetchTrivia() {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const data = await response.json();

        const formattedData = data.results.map(item => ({
          question: item.question,
          answer: item.correct_answer
        }));

        setTriviaData(formattedData);
      } catch (error) {
        console.error("Error fetching trivia:", error);
      }
    }

    fetchTrivia();
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Trivia Flashcards</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {triviaData.length === 0 ? (
          <p>Loading trivia...</p>
        ) : (
          triviaData.map((item, index) => (
            <Flashcard
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))
        )}
      </div>
    </div>
  );
}