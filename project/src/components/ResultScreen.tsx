import React from 'react';
import { Question } from '../types';
import { Trophy, RotateCcw, CheckCircle, XCircle, Info } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  answers: (number | null)[];
  questions: Question[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  answers,
  questions,
  onRestart,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 90) return "Excellent! Vous êtes un expert du numérique!";
    if (percentage >= 70) return "Très bien! Vous avez de solides connaissances!";
    if (percentage >= 50) return "Pas mal! Continuez à apprendre!";
    return "Continuez à explorer le monde numérique!";
  };

  const getResultColor = () => {
    if (percentage >= 90) return "text-purple-600";
    if (percentage >= 70) return "text-blue-600";
    if (percentage >= 50) return "text-green-600";
    return "text-yellow-600";
  };

  // Calculate statistics
  const categoryStats: Record<string, { total: number; correct: number }> = {};
  
  questions.forEach((question, index) => {
    const category = question.category;
    if (!categoryStats[category]) {
      categoryStats[category] = { total: 0, correct: 0 };
    }
    
    categoryStats[category].total += 1;
    if (answers[index] === question.correctAnswer) {
      categoryStats[category].correct += 1;
    }
  });

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 animate-fadeIn">
      <div className="p-8">
        <div className="flex flex-col items-center mb-8">
          <Trophy className="h-16 w-16 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Terminé!</h2>
          <p className={`text-xl font-semibold ${getResultColor()}`}>
            {getResultMessage()}
          </p>
          
          <div className="w-full bg-gray-100 rounded-full h-4 mt-6">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          <p className="mt-4 text-lg">
            Votre score: <span className="font-bold">{score}/{totalQuestions}</span> ({percentage}%)
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance par catégorie:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(categoryStats).map(([category, stats]) => (
              <div key={category} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-2">{getCategoryLabel(category)}</h4>
                <div className="flex justify-between items-center">
                  <span>{stats.correct}/{stats.total} correctes</span>
                  <span className="text-sm font-medium">
                    {Math.round((stats.correct / stats.total) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          Recommencer le quiz
        </button>
      </div>
    </div>
  );
};

function getCategoryLabel(category: string): string {
  switch (category) {
    case 'online-safety':
      return 'Sécurité en ligne';
    case 'digital-tools':
      return 'Outils numériques';
    case 'programming':
      return 'Programmation';
    case 'internet':
      return 'Internet';
    case 'hardware':
      return 'Matériel informatique';
    default:
      return category;
  }
}

export default ResultScreen;