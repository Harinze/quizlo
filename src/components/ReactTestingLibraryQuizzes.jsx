import React, { useState, useEffect, memo } from "react";
import { questions } from "../data/questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(parseInt(localStorage.getItem("score")) || 0);
  const [answerSelected, setAnswerSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const handleAnswer = (answer) => {
    setAnswerSelected(answer);
    setShowAnswer(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerSelected(null);
      setShowAnswer(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  if (isQuizFinished) {
    localStorage.removeItem("score");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">JavaScript Quiz</h1>
        
        <div className="mb-6">
          <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`block w-full p-3 rounded-lg border transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  answerSelected === option
                    ? answerSelected === currentQuestion.correctAnswer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {showAnswer && (
          <div className="mb-6 animate__animated animate__fadeIn animate__delay-1s">
            <p className={`text-lg font-semibold ${answerSelected === currentQuestion.correctAnswer ? "text-green-600" : "text-red-600"}`}>
              {answerSelected === currentQuestion.correctAnswer
                ? "✅ Correct!"
                : `❌ Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`}
            </p>
            <div className="mt-4 text-gray-700">
              <p className="font-semibold">Why this answer is correct:</p>
              <p>{currentQuestion.answerDescription}</p>
            </div>
          </div>
        )}

        <button
          onClick={handleNextQuestion}
          className="mt-4 w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
        </button>

        {isQuizFinished && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold text-blue-600">Quiz Finished!</h2>
            <p className="text-lg mt-2">Your Final Score: <strong>{score}</strong></p>
            <button
              onClick={() => {
                setScore(0);
                setCurrentQuestionIndex(0);
                setIsQuizFinished(false);
              }}
              className="mt-4 py-2 px-6 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600"
            >
              Restart Quiz
            </button>
          </div>
        )}

        {!isQuizFinished && (
          <p className="mt-4 text-center text-lg font-semibold">
            Score: <strong>{score}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(Quiz);
