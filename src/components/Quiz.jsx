import React, { useState, useEffect, memo } from 'react'; 
import { useParams } from 'react-router-dom';
import * as data from '../data/all-data';

const Quiz = () => {
  const { category } = useParams();


  // Mapping the category names to the keys in the data object
  const categoryMapping = {
    javascript: 'coreJavaScriptConcepts',
    'functions-and-scope': 'functionsAndScope',
    'asynchronous-javascript': 'asynchronousJavaScript',
    'objects-and-arrays': 'objectsAndArrays',
    'es6-plus-features': 'es6PlusFeatures',
    dom: 'domManipulation',
    algorithms: 'algorithmsAndDataStructures',
    memory: 'memoryManagementAndOptimization',
    react: 'reactClassInheritanceQuestions',
    'react-mid-level': 'reactMidLevelInterviewQuestions',
    'react-promises-async-await': 'reactPromisesAsyncAwaitQuestions',
    'react-event-loop-thread': 'reactEventLoopThreadQuestions',
    'react-middleware-optimization-hooks': 'reactMiddlewareOptimizationHooksQuestions',
    'react-session-auth-socket': 'reactSessionAuthSocketQuestions',
    'react-optimization': 'reactOptimizationQuestions',
    'react-redux-testing': 'reactReduxTesting',
    'react-design-patterns': 'javascriptDesignPatterns',
    'react-functional-programming': 'functionalProgramming',
    'testing-philosophy-rtl': 'testingPhilosophyWithRTL',
    'writing-tests-state-handling': 'writingTestsAndStateHandling',
    'component-integration-testing': 'componentAndIntegrationTesting',
    'mocking-spying': 'mockingAndSpying',
    'code-coverage-performance': 'codeCoverageAndPerformance',
    'error-handling-edge-cases': 'errorHandlingAndEdgeCases',
    webapis: 'webAPIs',
  };

  // Format category string to match the key in data
  const formatCategoryKey = (category) => {
    return categoryMapping[category] || category;
  };

  const formattedCategory = formatCategoryKey(category);
  const quizData = data[formattedCategory];

  if (!quizData) return <p>Quiz not found!</p>;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(() => {
    return JSON.parse(localStorage.getItem(formattedCategory)) || 0; // Store score for each category
  });
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [sessionExpired, setSessionExpired] = useState(false);
  const [answerDescription, setAnswerDescription] = useState('');

  useEffect(() => {
    // Checking for session expiration every 10 minutes
    const checkSession = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteractionTime;
      if (timeSinceLastInteraction > 3600000) { // 1 hour in milliseconds
        setSessionExpired(true);
        localStorage.removeItem(formattedCategory); // Reset score for this category on session expiration
        setScore(0); // Reset score
      }
    }, 600000); // Check every 10 minutes

    return () => clearInterval(checkSession);
  }, [lastInteractionTime]);

  useEffect(() => {
    // Resetting the score and question index when the category changes
    setScore(0);
    setCurrentQuestionIndex(0);
    setSessionExpired(false);
    localStorage.removeItem(formattedCategory); // Reset score when game starts or restarts
  }, [category]);

  const handleAnswerSelection = (answer) => {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Check if the answer is correct and update score
    if (answer === currentQuestion.correctAnswer) {
      const newScore = score + 5;
      setScore(newScore);
      localStorage.setItem(formattedCategory, JSON.stringify(newScore)); // Store updated score for this category
      alert('Correct! 5 points added');
    }

    // Store the answer description (explanation) for the current question
    setAnswerDescription(currentQuestion.answerDescription);

    // Go to next question or end quiz if finished
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setLastInteractionTime(Date.now()); // Update last interaction time
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerDescription(''); // Clear explanation for next question
      setLastInteractionTime(Date.now()); // Update last interaction time
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    localStorage.removeItem(formattedCategory);
    setLastInteractionTime(Date.now());
    setAnswerDescription(''); // Clear answer description on restart
  };

  // Logic for displaying the winner message and certificate
  const displayWinner = score >= 100;

  return (
    <div className="quiz-container min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex flex-col items-center justify-center py-10 px-5">
      <div className="quiz-card max-w-lg w-full bg-white shadow-lg rounded-xl p-6 space-y-6">
        {sessionExpired ? (
          <div className="text-center">
            <p className="text-xl font-bold text-red-600">Session Expired</p>
            <p className="text-gray-700">Your session has expired due to inactivity.</p>
          </div>
        ) : displayWinner ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
            <p className="text-xl text-gray-700 mb-4">You have won the Quiz!</p>
            <div className="certificate p-6 border rounded-lg bg-blue-100">
              <p className="text-xl font-semibold">From Quizlo: Award of Excellence</p>
              <p className="text-lg mt-4">Category: {category.replace(/-/g, ' ').toUpperCase()}</p>
              <button onClick={() => window.print()} className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all">
                Print Certificate
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-blue-600 text-center">{category.replace(/-/g, ' ').toUpperCase()}</h1>
            <div className="question-container">
              <h3 className="text-xl font-semibold text-gray-800">{quizData[currentQuestionIndex].question}</h3>
            </div>
            <div className="options-container grid grid-cols-1 gap-4">
              {quizData[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelection(option)}
                  className="option-button w-full py-3 px-5 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none"
                >
                  {option}
                </button>
              ))}
            </div>
            {/* Show answer description after submitting an answer */}
            {answerDescription && (
              <div className="answer-description mt-6 p-4 border-t border-gray-300">
                <h4 className="text-lg font-semibold text-gray-800">Explanation:</h4>
                <p className="text-gray-700">{answerDescription}</p>
              </div>
            )}
             <p className="text-lg text-center font-semibold text-gray-700 mt-6">Score: {score}</p>
            <div className="score-container text-center mt-4">
             
              <button
                onClick={handleRestart}
                className="mt-4 bg-red-600 text-white px-6 py-3 mr-4 rounded-lg shadow-lg hover:bg-red-700 transition-all"
              >
                Restart Quiz
              </button>
             
              {currentQuestionIndex + 1 < quizData.length && (
                <button
                  onClick={handleNextQuestion}
                  className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-all"
                >
                  Next Question
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Quiz);
