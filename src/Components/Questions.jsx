import { useState } from "react";
import { QuestionsData } from '../Constants/index.js';

function Questions() {
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (id, value) => {
        setAnswers({
            ...answers,
            [id]: value,
        });
    };

    return (
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg p-8 rounded-lg mt-10">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900">Mental Health Quiz</h2>

            {/* Name Input */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2 text-gray-800" htmlFor="name">What is your name?</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => handleAnswerChange('name', e.target.value)}
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                />
            </div>

            {/* Gender Selection */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2 text-gray-800">What is your gender?</label>
                <div className="mt-2">
                    {['Male', 'Female', 'Other'].map((option) => (
                        <div key={option} className="flex items-center mb-3">
                            <input
                                type="radio"
                                name="gender"
                                value={option}
                                onChange={() => handleAnswerChange('gender', option)}
                                className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 transition duration-200"
                            />
                            <label className="text-gray-700 ml-3">{option}</label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Age Input */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2 text-gray-800" htmlFor="age">What is your age?</label>
                <input
                    type="number"
                    placeholder="Enter your age"
                    onChange={(e) => handleAnswerChange('age', e.target.value)}
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                />
            </div>

            {/* Existing Questions */}
            {QuestionsData.map((question) => (
                <div key={question.id} className="mb-6">
                    <label className="block text-lg font-semibold mb-2 text-gray-800">{question.question}</label>
                    <div className="mt-2">
                        {question.options.map((option) => (
                            <div key={option} className="flex items-center mb-3">
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option}
                                    onChange={() => handleAnswerChange(question.id, option)}
                                    className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 transition duration-200"
                                />
                                <label className="text-gray-700 ml-3">{option}</label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Submit Button */}
            <button
                onClick={() => console.log(answers)}
                className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
            >
                Submit Answers
            </button>
        </div>
    );
}

export default Questions;
