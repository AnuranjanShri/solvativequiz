import React from "react";

const ProgressBar = ({ currentQuestion, totalQuestions, timeLeft }) => {
  const percentageCovered = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-details">
        <div>
          <span className="question-num">{currentQuestion}</span>/10
        </div>
        <div className="timer">0:{timeLeft}</div>
      </div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${percentageCovered}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
