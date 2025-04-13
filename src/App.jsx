import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import QuizSelector from './components/QuizSelector';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import RTLQuiz from './components/RTLQuiz';
import ReactQuiz from './components/ReactQuiz';
import JavaScriptQuiz from './components/JavascriptQuiz';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-selector" element={<QuizSelector />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/quiz/rtl" element={<RTLQuiz />} />
        <Route path="/quiz/react-quiz" element={<ReactQuiz />} />
        <Route path="/quiz/javascript-quiz" element={<JavaScriptQuiz />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
