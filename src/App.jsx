import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/react-quizzes" element={<Quiz />} />
        <Route path="/react-testing-libray-quizzes" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
