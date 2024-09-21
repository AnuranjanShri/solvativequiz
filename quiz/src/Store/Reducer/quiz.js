// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  jsBasicQuestions,
  nodeBasicQuestions,
  reactBasicQuestions,
  angularBasicQuestions,
} from "../../Utils/questionList";

const initialState = {
  category: "",
  questionList: [],
  analysis: {
    score: 0,
    correct: 0,
    wrong: 0,
    skipped: 0,
  },
};

const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    updateCorrectAns: (state) => {
      state.analysis.score += 1;
      state.analysis.correct += 1;
    },
    updateWrongAns: (state) => {
      state.analysis.wrong += 1;
    },
    updateSkippedQues: (state) => {
      state.analysis.skipped += 1;
    },
    updateSelectedCategory: (state, action) => {
      let cat = action.payload;
      state.category = cat;
      if (cat === "jsBasicQuestions") {
        state.questionList = jsBasicQuestions;
      } else if (cat === "reactBasics") {
        state.questionList = reactBasicQuestions;
      } else if (cat === "nodeBasics") {
        state.questionList = nodeBasicQuestions;
      } else {
        state.questionList = angularBasicQuestions;
      }
    },
    resetState: (state) => {
      state.category = "";
      state.questionList = [];
      state.analysis.score = 0;
      state.analysis.correct = 0;
      state.analysis.wrong = 0;
      state.analysis.skipped = 0;
    },
  },
});

export const {
  updateCorrectAns,
  updateWrongAns,
  updateSkippedQues,
  updateSelectedCategory,
  resetState,
} = quiz.actions;

export default quiz.reducer;
