export const QuestionsData = [
    {
      id: 1,
      question: "How would you rate your mood today on a scale from 1 to 10?",
      options: Array.from({ length: 10 }, (_, i) => i + 1),
    },
    {
      id: 2,
      question: "How much sleep did you get last night?",
      options: ["Less than 4 hours", "4-6 hours", "6-8 hours", "More than 8 hours"],
    },
    {
      id: 3,
      question: "Have you experienced any feelings of stress or anxiety today?",
      options: ["Not at all", "Slightly", "Moderately", "Severely"],
    },
    {
      id: 4,
      question: "How often did you engage in physical activity today?",
      options: ["Not at all", "Light activity", "Moderate activity", "Intense activity"],
    },
    {
      id: 5,
      question: "Did you feel motivated to complete your daily tasks?",
      options: ["Not at all", "Slightly", "Moderately", "Highly motivated"],
    },
    {
      id: 6,
      question: "Have you had any negative thoughts or worries in the past 24 hours?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Constantly"],
    },
    {
      id: 7,
      question: "How socially connected do you feel today?",
      options: ["Isolated", "Somewhat connected", "Very connected"],
    },
    {
      id: 8,
      question: "How would you describe your appetite today?",
      options: ["No appetite", "Low", "Normal", "High"],
    },
    {
      id: 9,
      question: "Did you experience any significant mood swings today?",
      options: ["Yes", "No"],
    },
    {
      id: 10,
      question: "How often did you find it difficult to concentrate or focus today?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
    }
  ];
  

export const NavElements = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    name: "Questions",
    path: "/questions",
  },

];

