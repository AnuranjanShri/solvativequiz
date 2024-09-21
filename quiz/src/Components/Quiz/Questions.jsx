import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedQuestion } from "../../Store/Selectors/quiz";
import ProgressBar from "./ProgressBar";
import {
  updateCorrectAns,
  updateSkippedQues,
  updateWrongAns,
} from "../../Store/Reducer/quiz";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const dispatch = useDispatch();
  const questionList = useSelector(getSelectedQuestion);
  const navigate = useNavigate();

  useEffect(() => {
    // Timer logic to decrement every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      handleNextQuestion();
    }

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;
    // Update score if answer is correct
    if (selectedAnswer === questionList[currentQuestionIndex].correctAnswer) {
      dispatch(updateCorrectAns());
    } else {
      dispatch(updateWrongAns());
    }

    // Reset selected answer and timer
    setSelectedAnswer(null);
    setTimeLeft(10);

    // Move to next question or finish quiz
    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/result");
    }
  };

  const handleSkipQuestion = () => {
    if (selectedAnswer) return;
    if (currentQuestionIndex === questionList.length - 1) {
      navigate("/result");
    }
    dispatch(updateSkippedQues());
    setSelectedAnswer(null);
    setTimeLeft(10);

    // Move to next question or finish quiz
    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (questionList.length === 0) {
    navigate("/");
    return;
  }
  return (
    <div className="question-display-page-wrapper">
      <ProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={10}
        timeLeft={timeLeft}
      />
      <div className="question-display-section">
        <div className="question-section">
          {currentQuestionIndex + 1}.{" "}
          {questionList[currentQuestionIndex].question}
        </div>
        <div className="answer-section-wrapper">
          <div className="options-section">
            {questionList[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`single-option ${
                  selectedAnswer === index ? "selected" : ""
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div
                  className={`radio-button ${
                    selectedAnswer === index ? "selected-rb" : ""
                  }`}
                ></div>
                <div className="option">{option}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="quiz-controller">
          <div
            onClick={() => handleNextQuestion(selectedAnswer)}
            className={`next`}
          >
            {currentQuestionIndex === 9 ? "Finish" : "Next"}
          </div>
          <div onClick={handleSkipQuestion} className={`skip`}>
            Skip this question
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
