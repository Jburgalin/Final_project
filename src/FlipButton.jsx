import "./FlipButton.css";

function FlipButton({ onClick }) {
  return (
    <button className="flip-button" onClick={onClick}>
      Flip Card
    </button>
  );
}

export default FlipButton;