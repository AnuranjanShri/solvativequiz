import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getQuizAnalysis,
  getSelectedQuestion,
} from "../../Store/Selectors/quiz";
import { resetState } from "../../Store/Reducer/quiz";
import { redirect, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const analysis = useSelector(getQuizAnalysis);
  const { score, correct, wrong, skipped } = analysis;
  const questionList = useSelector(getSelectedQuestion);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRetakeQuiz = () => {
    dispatch(resetState());
    navigate("/");
    return;
  };

  const calculateScorePercentage = (correctAnswers, totalQuestions = 10) => {
    if (totalQuestions === 0) return 0; // Avoid division by zero
    return (correctAnswers / totalQuestions) * 100;
  };
  let percentage = calculateScorePercentage(correct);
  if (questionList.length === 0) {
    navigate("/");
    return;
  }
  return (
    <div className="result-page-wrapper">
      <div className="congrats">Congratulations</div>
      <div className="note">You successfully completed the Quiz and holds</div>
      <div className="result">
        <span className="score">Your Score</span>
        <span className="percentage">{percentage}%</span>
        <span className="result-note">
          {percentage < 60 ? "Keep Practicing" : "Great Job"}
        </span>
      </div>
      <div>
        <div>Out of 10 question</div>
        <div className="analysis-detail">
          <div className="data">
            <span>{correct}</span> Correct
          </div>
          <div className="data">
            <span>{wrong}</span> Incorrect
          </div>
          <div className="data">
            <span>{skipped}</span> Not Answered
          </div>
        </div>
      </div>
      <div className="retake">
        <div className="retake-button" onClick={handleRetakeQuiz}>
          Retake quiz
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
