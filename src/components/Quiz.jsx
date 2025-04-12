import React, { useState, useEffect, memo, useRef } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { questions } from "../data/questions";
import { reactInterviewQuestions } from "../data/react-questions";
import { rtlQuizzes } from "../data/react-testing-library";

const quizMap = {
  "/": { title: "JavaScript Quiz", data: questions },
  "/react-quizzes": { title: "React Quizzes", data: reactInterviewQuestions },
  "/react-testing-libray-quizzes": { title: "React Testing Library Quizzes", data: rtlQuizzes },
};

const Quiz = () => {
  const location = useLocation();
  const { pathname } = location;

  const quizContent = quizMap[pathname] || quizMap["/"];
  const currentQuestions = quizContent.data;
  const title = quizContent.title;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [rawScore, setRawScore] = useState(parseInt(localStorage.getItem("score")) || 0);
  const [answerSelected, setAnswerSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const certificateRef = useRef(null);

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const isShortQuiz = currentQuestions.length <= 20;
  const isCertificateEligible = isShortQuiz && rawScore === currentQuestions.length;

  // Auto-logout / cleanup after 1hr
  useEffect(() => {
    const lastActivity = parseInt(localStorage.getItem("lastActivity")) || Date.now();
    const now = Date.now();

    if (now - lastActivity > 60 * 60 * 1000) {
      localStorage.removeItem("score");
      localStorage.removeItem("lastActivity");
      setRawScore(0);
    }

    const interval = setInterval(() => {
      localStorage.setItem("lastActivity", Date.now());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("score", rawScore);
  }, [rawScore]);

  useEffect(() => {
    // Reset quiz on path change
    setRawScore(0);
    setCurrentQuestionIndex(0);
    setAnswerSelected(null);
    setShowAnswer(false);
    setIsQuizFinished(false);
    localStorage.removeItem("score");
  }, [pathname]);

  const handleAnswer = (answer) => {
    setAnswerSelected(answer);
    setShowAnswer(true);
    if (answer === currentQuestion.correctAnswer) {
      setRawScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswerSelected(null);
      setShowAnswer(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setRawScore(0);
    setCurrentQuestionIndex(0);
    setIsQuizFinished(false);
    localStorage.removeItem("score");
    localStorage.removeItem("lastActivity");
  };

  const finalScore = isShortQuiz ? (rawScore === currentQuestions.length ? 100 : Math.round((rawScore / currentQuestions.length) * 100)) : (rawScore * 2.5);

  const handleDownloadCertificate = async () => {
    const canvas = await html2canvas(certificateRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 20, pdfWidth, pdfHeight);
    pdf.save(`Certificate-${title.replace(/\s+/g, "_")}.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">{title}</h1>

        {!isQuizFinished ? (
          <>
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
              <div className="mb-6 animate-fadeIn">
                <p className={`text-lg font-semibold ${answerSelected === currentQuestion.correctAnswer ? "text-green-600" : "text-red-600"}`}>
                  {answerSelected === currentQuestion.correctAnswer
                    ? "✅ Correct!"
                    : `❌ Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`}
                </p>
                {currentQuestion.answerDescription && (
                  <div className="mt-4 text-gray-700">
                    <p className="font-semibold">Why this answer is correct:</p>
                    <p>{currentQuestion.answerDescription}</p>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={handleNextQuestion}
              className="mt-4 w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              {currentQuestionIndex < currentQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>

            <p className="mt-4 text-center text-lg font-semibold">Score: <strong>{finalScore}</strong></p>
          </>
        ) : (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold text-blue-600">🎉 Quiz Finished!</h2>
            <p className="text-lg mt-2">Your Final Score: <strong>{finalScore}</strong></p>

            {isCertificateEligible && (
              <>
                <div
                  ref={certificateRef}
                  className="mt-6 border-2 border-yellow-400 p-6 rounded-lg bg-yellow-50 shadow-xl text-center"
                >
                  <h3 className="text-2xl font-bold text-yellow-700 mb-4">🏆 Certificate of Excellence</h3>
                  <p className="text-lg text-gray-800">Awarded to: <span className="font-bold text-xl">Kingsley Ibe</span></p>
                  <p className="text-xl font-bold text-black">You 🎓</p>
                  <p className="text-gray-700 mt-2 italic">
                    For achieving a perfect score in <strong>{title}</strong>
                  </p>
                  <p className="mt-4 text-sm text-gray-500">Issued by Quizlo • {new Date().toLocaleDateString()}</p>
                </div>

                <button
                  onClick={handleDownloadCertificate}
                  className="mt-4 py-2 px-6 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600"
                >
                  Download Certificate
                </button>
              </>
            )}

            <button
              onClick={handleRestart}
              className="mt-6 py-2 px-6 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Quiz);
