import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Questions from "./Components/Quiz/Questions";
import ResultPage from "./Components/ResultPage/ResultPage";
import CategorySelector from "./Components/CategorySelector/CategorySelector";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CategorySelector />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
