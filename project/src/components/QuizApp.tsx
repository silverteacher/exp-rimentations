import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { QuizState } from '../types';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import ResultScreen from './ResultScreen';
import { Lightbulb, Brain } from 'lucide-react';

const QuizApp: React.FC = () => {
  const initialState: QuizState = {
    currentQuestionIndex: 0,
    score: 0,
    answers: Array(questions.length).fill(null),
    quizCompleted: false,
  };

  const [quizState, setQuizState] = useState<QuizState>(initialState);
  const [showNextButton, setShowNextButton] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const currentQuestion = questions[quizState.currentQuestionIndex];

  const handleAnswer = (selectedOption: number) => {
    // Update answers array
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = selectedOption;

    // Update score if answer is correct
    const newScore = selectedOption === currentQuestion.correctAnswer 
      ? quizState.score + 1 
      : quizState.score;

    setQuizState({
      ...quizState,
      score: newScore,
      answers: newAnswers,
    });

    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    const nextIndex = quizState.currentQuestionIndex + 1;

    setFadeOut(true);
    
    setTimeout(() => {
      if (nextIndex < questions.length) {
        setQuizState({
          ...quizState,
          currentQuestionIndex: nextIndex,
        });
        setShowNextButton(false);
      } else {
        setQuizState({
          ...quizState,
          quizCompleted: true,
        });
      }
      setFadeOut(false);
    }, 300);
  };

  const handleRestart = () => {
    setQuizState(initialState);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <Brain className="h-8 w-8 text-purple-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Les Incollables Numériques</h1>
          </div>
          <p className="text-gray-600">Testez vos connaissances sur le numérique éducatif</p>
        </header>

        {!quizState.quizCompleted ? (
          <div className="flex flex-col items-center">
            <ProgressBar
              current={quizState.currentQuestionIndex}
              total={questions.length}
            />
            
            <div className={`transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
              <QuestionCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                disabled={quizState.answers[quizState.currentQuestionIndex] !== null}
                selectedOption={quizState.answers[quizState.currentQuestionIndex]}
              />
            </div>

            {showNextButton && (
              <button
                onClick={handleNextQuestion}
                className="mt-6 py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition duration-200 transform hover:translate-y-[-2px] flex items-center"
              >
                {quizState.currentQuestionIndex === questions.length - 1 ? (
                  <>Voir les résultats</>
                ) : (
                  <>Question suivante</>
                )}
              </button>
            )}

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-lg">
              <div className="flex">
                <Lightbulb className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-700">
                  <span className="font-medium">Astuce:</span> L'éducation numérique comprend la sécurité en ligne, les compétences techniques, et la pensée critique face aux médias numériques.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <ResultScreen
            score={quizState.score}
            totalQuestions={questions.length}
            answers={quizState.answers}
            questions={questions}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default QuizApp;