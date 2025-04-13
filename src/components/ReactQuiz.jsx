import React, { useState, useEffect } from 'react';
import { reactInterviewQuestions } from '../data/react-questions';


const getRandomQuestions = () => {
  const shuffledQuestions = [...reactInterviewQuestions].sort(() => Math.random() - 0.5);
  return shuffledQuestions.slice(0, 40); 
};

const ReactQuiz = () => {
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(() => parseFloat(localStorage.getItem('score')) || 0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [hasSessionExpired, setHasSessionExpired] = useState(false);
  const [congratulationMessage, setCongratulationMessage] = useState('');
  const [showAnswerDescription, setShowAnswerDescription] = useState(false); 
  const [userAnswer, setUserAnswer] = useState(null); 
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false); 
  const [quizCompleted, setQuizCompleted] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      const timer = parseInt(localStorage.getItem('timer')) || 3600;
      if (timer <= 0) {
        clearInterval(interval);
        setHasSessionExpired(true);
        clearLocalStorage();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAnswerSelect = (selectedOption) => {
    setUserAnswer(selectedOption);
    setIsAnswerSubmitted(true);
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => {
        const newScore = prevScore + 2.5;
        if (newScore === 100) {
          setCongratulationMessage('Congratulations! You scored 100 points!');
        }
        return newScore;
      });
      alert('Correct answer!');
    } else {
      alert('Incorrect answer!');
    }

    setShowAnswerDescription(true); 
  };

  const handleNext = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    setAnsweredQuestions((prevAnswered) => new Set(prevAnswered).add(currentQuestion.id));
    setIsAnswerSubmitted(false);
    setShowAnswerDescription(false); 
    setUserAnswer(null);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

 
  const handleRestart = () => {
    clearLocalStorage();
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnsweredQuestions(new Set());
    setCongratulationMessage('');
    setHasSessionExpired(false);
    setShowAnswerDescription(false);
    setIsAnswerSubmitted(false);
    setUserAnswer(null);
    setQuizCompleted(false); 
    setQuizQuestions(getRandomQuestions());
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('score');
    localStorage.removeItem('answeredQuestions');
  };


  useEffect(() => {
    if (!hasSessionExpired) {
      localStorage.setItem('score', score);
      localStorage.setItem('answeredQuestions', JSON.stringify([...answeredQuestions]));
    }
  }, [score, answeredQuestions, hasSessionExpired]);


  if (hasSessionExpired) {
    return (
      <div className="flex justify-center items-center flex-col h-screen bg-gray-50">
        <h2 className="text-2xl text-blue-600 font-bold">Session Expired</h2>
        <button
          onClick={handleRestart}
          className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Restart
        </button>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="flex justify-center items-center flex-col h-screen bg-gray-50">
        <h2 className="text-3xl text-blue-600 font-bold mb-4">Quiz Completed</h2>
        <p className="text-xl">Your final score is: {score}</p>
        {score === 100 ? (
          <p className="mt-4 text-lg text-green-600">{congratulationMessage}</p>
        ) : (
          <p className="mt-4 text-lg text-red-600">Nice try! Would you like to try again?</p>
        )}
        <button
          onClick={handleRestart}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
      <header className="text-center mb-6">
        <h1 className="text-3xl text-blue-600 font-semibold">React Quiz</h1>
        <p className="mt-2 text-lg">Score: {score}</p>
      </header>

      <div className="mb-6">
        <h2 className="text-2xl mb-4">{currentQuestion.question}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
              disabled={isAnswerSubmitted} 
            >
              {option}
            </button>
          ))}
        </div>
        {isAnswerSubmitted && (
          <div className="mt-4">
            {showAnswerDescription && (
              <p className="text-sm text-gray-600">{currentQuestion.answerDescription}</p>
            )}
            <p className="text-lg mt-2 font-semibold">Your answer: {userAnswer}</p>

            <button
              onClick={handleNext}
              className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <footer className="text-center">
        <button
          onClick={handleRestart}
          className="w-full mt-6 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
        >
          Restart
        </button>
      </footer>
    </div>
  );
};

export default ReactQuiz;
