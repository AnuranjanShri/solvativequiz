import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../Store/Selectors/quiz";
import { updateSelectedCategory } from "../../Store/Reducer/quiz";
import { useNavigate } from "react-router-dom";
const CategorySelector = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCategory = useSelector(getCategory);
  const availableCategories = [
    {
      label: "Javascript Basics",
      value: "jsBasicQuestions",
    },
    {
      label: "React Basics",
      value: "reactBasics",
    },
    {
      label: "Node Basics",
      value: "nodeBasics",
    },
    {
      label: "Angular Basics",
      value: "angularBasics",
    },
  ];

  const handleSelectedCategory = (category) => {
    dispatch(updateSelectedCategory(category));
  };
  const handleStartQuiz = () => {
    if (selectedCategory) {
      navigate("/questions");
    }
  };

  return (
    <div className="category-selector-wrapper">
      <div className="category-selector-header">
        Please select topic to continue
      </div>
      <div className="category-display">
        {availableCategories.map((category, index) => {
          return (
            <div
              key={index}
              className={`category-option ${
                selectedCategory === category.value
                  ? "selected-category-option"
                  : ""
              }`}
              onClick={() => handleSelectedCategory(category.value)}
            >
              <div
                className={`category-selector ${
                  selectedCategory === category.value
                    ? "selected-category-rb"
                    : ""
                }`}
              ></div>
              <div className="category">{category.label}</div>
            </div>
          );
        })}
      </div>
      <div className="start-quiz-button">
        <div
          onClick={handleStartQuiz}
          className={`start ${!selectedCategory && "disblaed-start"}`}
        >
          Start Quiz
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
