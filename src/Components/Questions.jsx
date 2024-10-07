import { useState } from "react";
import {QuestionsData} from '../Constants/index.js';

function Questions() {
    const [answers, setAnswers] = useState({});
  
    const handleAnswerChange = (id, value) => {
      setAnswers({
        ...answers,
        [id]: value,
      });
    };
  
    return (
      <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Mental Health Quiz</h2>
        {QuestionsData.map((question) => (
          <div key={question.id} className="mb-6">
            <p className="text-lg font-semibold">{question.question}</p>
            <div className="mt-2">
              {question.options.map((option) => (
                <div key={option} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    onChange={() => handleAnswerChange(question.id, option)}
                    className="mr-2"
                  />
                  <label className="text-gray-700">{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={() => console.log(answers)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full"
        >
          Submit Answers
        </button>
      </div>
    );
  }
  

export default Questions;
