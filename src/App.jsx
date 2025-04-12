import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import ReactTestingLibraryQuizzes from "./components/ReactTestingLibraryQuizzes";
import ReactQuizzes from "./components/ReactQuizzes";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";  

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/react-testing-libray-quizzes" element={<ReactTestingLibraryQuizzes />} />
            <Route path="/react-quizzes" element={<ReactQuizzes />} />
          </Routes>
        </main>
        
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
