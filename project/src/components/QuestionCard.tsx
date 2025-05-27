import React, { useState } from 'react';
import { Question } from '../types';
import { Check, X } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedOption: number) => void;
  disabled: boolean;
  selectedOption: number | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  disabled,
  selectedOption,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (optionIndex: number) => {
    if (disabled) return;
    onAnswer(optionIndex);
    setShowExplanation(true);
  };

  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg">
      <div className="p-6">
        <div className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full mb-4">
          {getCategoryLabel(question.category)}
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-6">{question.text}</h2>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={disabled}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                selectedOption === null
                  ? 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  : selectedOption === index
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : index === question.correctAnswer && showExplanation
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 opacity-70'
              }`}
            >
              <div className="flex items-center">
                <span className="flex-grow">{option}</span>
                {selectedOption !== null && index === question.correctAnswer && (
                  <Check className="h-5 w-5 text-green-500" />
                )}
                {selectedOption === index && index !== question.correctAnswer && (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className={`mt-6 p-4 rounded-lg ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          } transition-all duration-300 ease-in`}>
            <p className="text-sm">
              <span className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? 'Correct! ' : 'Incorrect. '}
              </span>
              {question.explanation}
            </p>
          </div>
        )}
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

export default QuestionCard;