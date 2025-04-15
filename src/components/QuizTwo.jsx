import React, { useState, useEffect, memo } from 'react';
import { reactInterviewQuestions } from '../data/react-questions';
import { rtlQuizzes } from '../data/react-testing-library'; 
import {javaScriptQuestions} from '../data/javascript-questions';

const questionSources = {
  javascript: javaScriptQuestions,
  react: reactInterviewQuestions,
  rtl: rtlQuizzes
};


const getRandomQuestions = (type = 'javascript') => {
  const questions = [...questionSources[type]].sort(() => Math.random() - 0.5);
  return questions.slice(0, 40);
};

const QuizComponent = () => {
  const [quizType, setQuizType] = useState('javascript');
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions('javascript'));
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
      } else {
        localStorage.setItem('timer', timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleQuizTypeChange = (e) => {
    const newType = e.target.value;
    setQuizType(newType);
    clearLocalStorage();
    setQuizQuestions(getRandomQuestions(newType));
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnsweredQuestions(new Set());
    setCongratulationMessage('');
    setHasSessionExpired(false);
    setShowAnswerDescription(false);
    setUserAnswer(null);
    setIsAnswerSubmitted(false);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (selectedOption) => {
    setUserAnswer(selectedOption);
    setIsAnswerSubmitted(true);
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => {
        const newScore = prevScore + 2.5;
        if (newScore === 100) {
          setCongratulationMessage('🎉 Congratulations! You scored 100 points!');
        }
        return newScore;
      });
      alert('✅ Correct answer!');
    } else {
      alert('❌ Incorrect answer!');
    }

    setShowAnswerDescription(true);
  };

  const handleNext = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestion.id));
    setUserAnswer(null);
    setIsAnswerSubmitted(false);
    setShowAnswerDescription(false);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
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
    setQuizQuestions(getRandomQuestions(quizType));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('score');
    localStorage.removeItem('answeredQuestions');
    localStorage.removeItem('timer');
  };

  useEffect(() => {
    if (!hasSessionExpired) {
      localStorage.setItem('score', score);
      localStorage.setItem('answeredQuestions', JSON.stringify([...answeredQuestions]));
    }
  }, [score, answeredQuestions, hasSessionExpired]);

  const currentQuestion = quizQuestions[currentQuestionIndex];

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

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
      <header className="text-center mb-6">
        <h1 className="text-3xl text-blue-600 font-semibold capitalize">{quizType} Quiz</h1>
        <p className="mt-2 text-lg">Score: {score}</p>
        <div className="mt-4">
          <select
            className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={quizType}
            onChange={handleQuizTypeChange}
          >
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="rtl">React Testing Library</option>
          </select>
        </div>
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
              <p className="text-sm mt-2 p-3 rounded-md border-l-4 border-blue-600 bg-blue-50 text-blue-800 shadow-sm">
                {currentQuestion.answerDescription}
              </p>
            )}
            <p className="text-lg mt-2 font-semibold text-black">
              Your answer: {userAnswer}
            </p>
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
          className="w-full mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none"
        >
          Restart
        </button>
      </footer>
    </div>
  );
};

export default memo(QuizComponent);
