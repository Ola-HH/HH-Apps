const LetterButton = ({ text, click }) => (
      <button className="letter-btn" onClick={click}>
        {text}
      </button>
  );

  export default LetterButton;