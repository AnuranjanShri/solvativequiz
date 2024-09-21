// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import quiz from './Reducer/quiz';

const store = configureStore({
  reducer: {
    quiz: quiz,
  },
});

export default store;