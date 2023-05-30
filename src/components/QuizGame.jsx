import React, { useState } from 'react';
import './QuizGame.css';

const QuizGame = () => {
  const generateRandomNumbers = () => {
    const randomNumbers = new Set();
    while (randomNumbers.size < 5) {
      randomNumbers.add(Math.floor(Math.random() * 100));
    }
    return Array.from(randomNumbers);
  };
  const [numbers, setNumbers] = useState(generateRandomNumbers());
  const [userInput, setUserInput] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const handleDragStart = (event, value) => {
    event.dataTransfer.setData('text/plain', value);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const value = event.dataTransfer.getData('text/plain');
    const updatedInput = [...userInput];
    const inputIndex = updatedInput.indexOf(value);
    if (inputIndex !== -1) {
      updatedInput[inputIndex] = null;
      setUserInput(updatedInput);
    }
    if (!updatedInput.includes(value)) {
      updatedInput[index] = value;
      setUserInput(updatedInput);
    }
  };



  const handleReset = () => {
    setNumbers(generateRandomNumbers());
    setUserInput([]);
    setIsCorrect(false);
    setIsChecking(false);
  };

  const handleCheck = () => {
    setIsChecking(true);
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    //const sortedUserInput = [...userInput].sort((a, b) => a - b);
    console.log(sortedNumbers);
    //console.log(sortedUserInput);
    setIsCorrect(checkArraysEqual(sortedNumbers, userInput));
  };

  const checkArraysEqual = (arr1, arr2) => {
    // arr2 is char
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== parseInt(arr2[i])) {
        return false;
      }
    }
    return true;
  };

  const renderNumberOptions = () => {
    return numbers.map((number, index) => {
      if (!userInput.includes(number)) {
        return (
          <div
            key={index}
            className="option"
            draggable={!isChecking}
            onDragStart={(event) => handleDragStart(event, number)}
          >
            {number}
          </div>
        );
      } else {
        return (
          <div
            key={index}
            className="option disabled"
          >
            {number}
          </div>
        );
      }
    });
  };

  const renderInputFields = () => {
    return numbers.map((_, index) => (
      <div
        key={index}
        className="input-field"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, index)}
      >
        {userInput[index] ? (
          <div className="input-value">{userInput[index]}</div>
        ) : (
          <div className="input-placeholder">Drop</div>
        )}
      </div>
    ));
  };

  return (
    <div className="quiz-game">
      <h1>Sort the Numbers!</h1>
      <div className="options">{renderNumberOptions()}</div>
      <div className="inputs">{renderInputFields()}</div>
      {isChecking && (
        <div className="result">{isCorrect ? 'Correct!' : 'Wrong!'}</div>
      )}
      <button
        className="check-button"
        disabled={isChecking || userInput.length !== 5}
        onClick={handleCheck}
      >
        Check
      </button>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default QuizGame;








