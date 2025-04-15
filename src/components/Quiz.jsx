import React, { useState, useEffect, memo } from 'react';
 import * as data from '../data/all-data';
 import { useParams } from 'react-router-dom';



const questionSources = {
  javascript: data?.coreJavaScriptConcepts,
  'functions-and-scope': data?.functionsAndScope,
  'asynchronous-javascript': data?.asynchronousJavaScript,
  'objects-and-arrays': data?.objectsAndArrays,
  'es6-plus-features': data?.es6PlusFeatures,
  dom: data?.domManipulation,
  algorithms: data?.algorithmsAndDataStructures,
  memory: data?.memoryManagementAndOptimization,
  react: data?.reactClassInheritanceQuestions,
  'react-mid-level': data?.reactMidLevelInterviewQuestions,
  'react-promises-async-await': data?.reactPromisesAsyncAwaitQuestions,
  'react-event-loop-thread': data?.reactEventLoopThreadQuestions,
  'react-middleware-optimization-hooks': data?.reactMiddlewareOptimizationHooksQuestions,
  'react-session-auth-socket': data?.reactSessionAuthSocketQuestions,
  'react-optimization': data?.reactOptimizationQuestions,
  'react-redux-testing': data?.reactReduxTesting,
  'react-design-patterns': data?.javascriptDesignPatterns,
  'react-functional-programming': data?.functionalProgramming,
  'testing-philosophy-rtl': data?.testingPhilosophyWithRTL,
  'writing-tests-state-handling': data?.writingTestsAndStateHandling,
  'component-integration-testing': data?.componentAndIntegrationTesting,
  'mocking-spying': data?.mockingAndSpying,
  'code-coverage-performance': data?.codeCoverageAndPerformance,
  'error-handling-edge-cases': data?.errorHandlingAndEdgeCases,
  webapis: data?.webAPIs,
};


const getRandomQuestions = (type = 'javascript') => {
  const questions = [...questionSources[type]].sort(() => Math.random() - 0.5);
  return questions.slice(0, 40);
};

const QuizComponent = () => {
  const { category } = useParams();
  const quizTypeFromRoute = category || 'javascript';
  const [quizType, setQuizType] = useState(quizTypeFromRoute);
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions(quizTypeFromRoute));
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
    setQuizQuestions(getRandomQuestions(quizTypeFromRoute));
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
    <option value="functions-and-scope">Functions and Scope</option>
    <option value="asynchronous-javascript">Asynchronous JavaScript</option>
    <option value="objects-and-arrays">Objects and Arrays</option>
    <option value="es6-plus-features">ES6+ Features</option>
    <option value="dom">DOM Manipulation</option>
    <option value="algorithms">Algorithms & Data Structures</option>
    <option value="memory">Memory Management</option>

    <option value="react">React - Class Inheritance</option>
    <option value="react-mid-level">React - Mid Level</option>
    <option value="react-promises-async-await">React - Promises & Async/Await</option>
    <option value="react-event-loop-thread">React - Event Loop & Thread</option>
    <option value="react-middleware-optimization-hooks">React - Middleware, Optimization, Hooks</option>
    <option value="react-session-auth-socket">React - Session, Auth, Socket</option>
    <option value="react-optimization">React Optimization</option>
    <option value="react-redux-testing">React Redux & Testing</option>
    <option value="react-design-patterns">Design Patterns</option>
    <option value="react-functional-programming">Functional Programming</option>

    <option value="testing-philosophy-rtl">Testing Philosophy with RTL</option>
    <option value="writing-tests-state-handling">Writing Tests & State Handling</option>
    <option value="component-integration-testing">Component & Integration Testing</option>
    <option value="mocking-spying">Mocking & Spying</option>
    <option value="code-coverage-performance">Code Coverage & Performance</option>
    <option value="error-handling-edge-cases">Error Handling & Edge Cases</option>

    <option value="webapis">Web APIs</option>
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

