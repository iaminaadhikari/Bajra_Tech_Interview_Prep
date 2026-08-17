export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const aptitudeQuestions: Question[] = [
  {
    "id": "q21",
    "category": "Logical Reasoning",
    "question": "If all cats are dogs and some dogs are birds, what can be concluded?",
    "options": [
      "Some cats are birds",
      "All birds are cats",
      "No conclusion can be drawn",
      "Some birds are dogs"
    ],
    "correctAnswer": "Some birds are dogs",
    "explanation": "Since some dogs are birds, it naturally implies some birds are dogs. We cannot conclude anything about cats and birds."
  },
  {
    "id": "q22",
    "category": "Quantitative Aptitude",
    "question": "If a rectangular garden is 20m long and 15m wide, what is the length of its diagonal?",
    "options": [
      "25m",
      "30m",
      "35m",
      "40m"
    ],
    "correctAnswer": "25m",
    "explanation": "Using Pythagorean theorem: sqrt(20^2 + 15^2) = sqrt(400 + 225) = sqrt(625) = 25."
  },
  {
    "id": "q23",
    "category": "Logical Reasoning",
    "question": "In a certain code, 'COMPUTER' is written as 'RFUVQNPC'. How is 'MEDICINE' written in that code?",
    "options": [
      "EOJDJEFM",
      "EOJDEJFM",
      "MFEJDJOE",
      "MFEDJJOE"
    ],
    "correctAnswer": "EOJDJEFM",
    "explanation": "Reverse the word and shift each letter by +1. MEDICINE -> ENICIDEM -> EOJDJEFM."
  },
  {
    "id": "q24",
    "category": "Quantitative Aptitude",
    "question": "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.",
    "options": [
      "2 hours",
      "3 hours",
      "4 hours",
      "5 hours"
    ],
    "correctAnswer": "4 hours",
    "explanation": "Downstream speed = 13 + 4 = 17 km/hr. Time = Distance / Speed = 68 / 17 = 4 hours."
  },
  {
    "id": "q25",
    "category": "Verbal Ability",
    "question": "Choose the correct synonym for 'MITIGATE'.",
    "options": [
      "Aggravate",
      "Alleviate",
      "Instigate",
      "Obfuscate"
    ],
    "correctAnswer": "Alleviate",
    "explanation": "Mitigate means to make less severe, serious, or painful. Alleviate is the closest synonym."
  },
  {
    "id": "q26",
    "category": "Verbal Ability",
    "question": "Find the correctly spelt word.",
    "options": [
      "Accomodate",
      "Acommodate",
      "Accommodate",
      "Accomodate"
    ],
    "correctAnswer": "Accommodate",
    "explanation": "The correct spelling has double 'c' and double 'm'."
  },
  {
    "id": "q27",
    "category": "Quantitative Aptitude",
    "question": "A man buys a cycle for $1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
    "options": [
      "$1090",
      "$1160",
      "$1190",
      "$1202"
    ],
    "correctAnswer": "$1190",
    "explanation": "Loss = 15% of 1400 = 210. Selling price = 1400 - 210 = $1190."
  },
  {
    "id": "q28",
    "category": "Logical Reasoning",
    "question": "Pointing to a man, a woman said, 'He is the only son of the wife of my husband's father.' How is the man related to the woman?",
    "options": [
      "Brother",
      "Father",
      "Husband",
      "Brother-in-law"
    ],
    "correctAnswer": "Husband",
    "explanation": "The wife of her husband's father is her mother-in-law. The only son of her mother-in-law is her husband."
  },
  {
    "id": "q29",
    "category": "Quantitative Aptitude",
    "question": "If the simple interest on a sum of money for 2 years at 5% per annum is $50, what is the principal?",
    "options": [
      "$500",
      "$400",
      "$600",
      "$450"
    ],
    "correctAnswer": "$500",
    "explanation": "SI = (P * R * T) / 100. 50 = (P * 5 * 2) / 100. P = 500."
  },
  {
    "id": "q30",
    "category": "Logical Reasoning",
    "question": "A travels 5 km East, then takes a right turn and travels 3 km. He then takes a left turn and travels 4 km. Finally, he takes a left turn and travels 3 km. How far is he from the starting point?",
    "options": [
      "7 km",
      "9 km",
      "12 km",
      "15 km"
    ],
    "correctAnswer": "9 km",
    "explanation": "He moved 5km East, went 3km South, then 4km East, then 3km North. He is on the same horizontal line. Total horizontal distance = 5 + 4 = 9km."
  },
  {
    "id": "q31",
    "category": "UI/UX Problem Solving",
    "question": "What is a 'Call to Action' (CTA)?",
    "options": [
      "A legal disclaimer on a website",
      "A prompt telling the user to take a specified action",
      "The main navigation menu",
      "The hero image of a landing page"
    ],
    "correctAnswer": "A prompt telling the user to take a specified action",
    "explanation": "A CTA (e.g., 'Sign Up Now', 'Buy') is an element designed to induce a viewer, reader, or listener to perform a specific act."
  },
  {
    "id": "q32",
    "category": "UI/UX Problem Solving",
    "question": "Which of the following is an example of a 'Dark Pattern'?",
    "options": [
      "Clear pricing tables",
      "A complex multi-step checkout",
      "Pre-checked subscription boxes that are hard to notice",
      "Using high contrast colors for text"
    ],
    "correctAnswer": "Pre-checked subscription boxes that are hard to notice",
    "explanation": "Dark patterns are manipulative design strategies intended to trick users into doing things they might not want to do, like unknowingly subscribing to a service."
  },
  {
    "id": "q33",
    "category": "UI/UX Problem Solving",
    "question": "What is 'White Space' in design?",
    "options": [
      "Only the areas of the screen that are colored white",
      "The empty space between and around elements of a design",
      "The background of a wireframe",
      "The space used for text content"
    ],
    "correctAnswer": "The empty space between and around elements of a design",
    "explanation": "White space (or negative space) is the empty space around elements. It improves readability, focus, and overall aesthetics."
  },
  {
    "id": "q34",
    "category": "UI/UX Problem Solving",
    "question": "What does MVP stand for in product development?",
    "options": [
      "Most Valuable Professional",
      "Minimum Viable Product",
      "Maximum Visual Priority",
      "Multiple Viewport Prototyping"
    ],
    "correctAnswer": "Minimum Viable Product",
    "explanation": "MVP is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development."
  },
  {
    "id": "q35",
    "category": "Quantitative Aptitude",
    "question": "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    "options": [
      "120 meters",
      "180 meters",
      "324 meters",
      "150 meters"
    ],
    "correctAnswer": "150 meters",
    "explanation": "Speed in m/s = 60 * (5/18) = 50/3 m/s. Length = Speed * Time = (50/3) * 9 = 150 meters."
  },
  {
    "id": "q36",
    "category": "Logical Reasoning",
    "question": "Which number comes next? 1, 4, 9, 16, 25, ...",
    "options": [
      "30",
      "32",
      "36",
      "40"
    ],
    "correctAnswer": "36",
    "explanation": "These are squares of consecutive integers: 1^2, 2^2, 3^2, 4^2, 5^2. The next is 6^2 = 36."
  },
  {
    "id": "q37",
    "category": "Quantitative Aptitude",
    "question": "The ratio of two numbers is 3:4 and their HCF is 4. What is their LCM?",
    "options": [
      "12",
      "16",
      "24",
      "48"
    ],
    "correctAnswer": "48",
    "explanation": "Numbers are 3x and 4x. Since HCF is 4, numbers are 12 and 16. LCM of 12 and 16 is 48."
  },
  {
    "id": "q38",
    "category": "Verbal Ability",
    "question": "Choose the word which is most opposite in meaning to the word 'DILIGENT'.",
    "options": [
      "Intelligent",
      "Lazy",
      "Reliable",
      "Careful"
    ],
    "correctAnswer": "Lazy",
    "explanation": "Diligent means having or showing care and conscientiousness in one's work or duties. The opposite is Lazy."
  },
  {
    "id": "q39",
    "category": "Quantitative Aptitude",
    "question": "What is 15% of 60?",
    "options": [
      "6",
      "9",
      "12",
      "15"
    ],
    "correctAnswer": "9",
    "explanation": "15% of 60 is (15/100) * 60 = 0.15 * 60 = 9."
  },
  {
    "id": "q40",
    "category": "Logical Reasoning",
    "question": "If 'A' means '+', 'B' means '-', 'C' means '*' and 'D' means '/', then what is the value of 10 C 4 A 4 C 4 B 6?",
    "options": [
      "40",
      "50",
      "60",
      "70"
    ],
    "correctAnswer": "50",
    "explanation": "Substituting the signs: 10 * 4 + 4 * 4 - 6. Following BODMAS: 40 + 16 - 6 = 56 - 6 = 50."
  },
  {
    "id": "q41",
    "category": "UI/UX Problem Solving",
    "question": "Which of these is a qualitative research method?",
    "options": [
      "A/B Testing",
      "Heatmaps",
      "User Interviews",
      "Analytics Data"
    ],
    "correctAnswer": "User Interviews",
    "explanation": "Qualitative research focuses on understanding 'why' users do things, gathering subjective data like opinions and motivations, typical in interviews."
  },
  {
    "id": "q42",
    "category": "UI/UX Problem Solving",
    "question": "What is an 'Affordance' in UI design?",
    "options": [
      "The cost to develop a feature",
      "A visual clue to the function of an object",
      "The color palette used",
      "The amount of memory an app takes"
    ],
    "correctAnswer": "A visual clue to the function of an object",
    "explanation": "Affordances are properties of objects that show users the actions they can take (e.g., a button looking clickable because of a drop shadow)."
  },
  {
    "id": "q43",
    "category": "Quantitative Aptitude",
    "question": "A works twice as fast as B. If both of them can together finish a piece of work in 12 days, then B alone can do it in:",
    "options": [
      "24 days",
      "27 days",
      "36 days",
      "48 days"
    ],
    "correctAnswer": "36 days",
    "explanation": "Ratio of rates = 2:1. Together they do 3 units/day. In 12 days they do 36 units. B does 1 unit/day, so B takes 36 days."
  },
  {
    "id": "q44",
    "category": "Verbal Ability",
    "question": "Complete the sentence: She has a great _____ for music.",
    "options": [
      "Aptitude",
      "Attitude",
      "Altitude",
      "Gratitude"
    ],
    "correctAnswer": "Aptitude",
    "explanation": "Aptitude means a natural ability to do something."
  },
  {
    "id": "q45",
    "category": "Logical Reasoning",
    "question": "CUP is to COFFEE as BOWL is to:",
    "options": [
      "DISH",
      "SOUP",
      "SPOON",
      "FOOD"
    ],
    "correctAnswer": "SOUP",
    "explanation": "A cup is used to hold coffee (a liquid food). A bowl is typically used to hold soup."
  },
  {
    "id": "q46",
    "category": "Quantitative Aptitude",
    "question": "If 5 machines can make 5 widgets in 5 minutes, how long does it take 100 machines to make 100 widgets?",
    "options": [
      "5 minutes",
      "20 minutes",
      "100 minutes",
      "500 minutes"
    ],
    "correctAnswer": "5 minutes",
    "explanation": "Each machine takes 5 minutes to make 1 widget. So 100 machines working simultaneously will also take 5 minutes to make 100 widgets."
  },
  {
    "id": "q47",
    "category": "UI/UX Problem Solving",
    "question": "What is a 'Persona' in UX design?",
    "options": [
      "The designer's personal portfolio",
      "A fictional character representing a user type",
      "A type of font",
      "The brand identity"
    ],
    "correctAnswer": "A fictional character representing a user type",
    "explanation": "Personas are fictional characters created based on your research in order to represent the different user types that might use your service, product, site, or brand in a similar way."
  },
  {
    "id": "q48",
    "category": "UI/UX Problem Solving",
    "question": "What does 'Responsive Design' primarily address?",
    "options": [
      "Server response times",
      "User emotional response",
      "Adapting layouts to different screen sizes and devices",
      "Customer support response rates"
    ],
    "correctAnswer": "Adapting layouts to different screen sizes and devices",
    "explanation": "Responsive web design is an approach that makes web pages render well on a variety of devices and window or screen sizes."
  },
  {
    "id": "q49",
    "category": "Logical Reasoning",
    "question": "Which comes next in the sequence? AZ, BY, CX, ...",
    "options": [
      "DW",
      "EV",
      "FU",
      "GT"
    ],
    "correctAnswer": "DW",
    "explanation": "The first letter goes forward alphabetically (A, B, C, D). The second letter goes backward (Z, Y, X, W)."
  },
  {
    "id": "q50",
    "category": "Quantitative Aptitude",
    "question": "A clock strikes once at 1 o'clock, twice at 2 o'clock, thrice at 3 o'clock and so on. How many times will it strike in 24 hours?",
    "options": [
      "78",
      "136",
      "156",
      "196"
    ],
    "correctAnswer": "156",
    "explanation": "Strikes in 12 hours = 1+2+3...+12 = (12*13)/2 = 78. In 24 hours = 78 * 2 = 156."
  }
,
  // Logical Reasoning
  {
    id: "q1",
    category: "Logical Reasoning",
    question: "If all Bloops are Razzies and all Razzies are Lazzies, which of the following statements must be true?",
    options: ["All Bloops are Lazzies", "All Lazzies are Bloops", "Some Bloops are not Lazzies", "No Razzies are Bloops"],
    correctAnswer: "All Bloops are Lazzies",
    explanation: "This is a classic syllogism. If A is inside B, and B is inside C, then A must be inside C."
  },
  {
    id: "q2",
    category: "Logical Reasoning",
    question: "Find the next number in the series: 2, 6, 12, 20, 30, ...",
    options: ["40", "42", "44", "48"],
    correctAnswer: "42",
    explanation: "The differences between the numbers are 4, 6, 8, 10. The next difference should be 12. 30 + 12 = 42."
  },
  {
    id: "q3",
    category: "Logical Reasoning",
    question: "Which word does not belong with the others?",
    options: ["Cornea", "Retina", "Vision", "Pupil"],
    correctAnswer: "Vision",
    explanation: "Cornea, Retina, and Pupil are parts of the eye. Vision is a sense or function."
  },
  {
    id: "q4",
    category: "Logical Reasoning",
    question: "A man points to a photograph and says, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
    options: ["His own", "His son's", "His father's", "His nephew's"],
    correctAnswer: "His son's",
    explanation: "'My father's son' is the man himself (since he has no siblings). So, 'that man's father is ME.' Therefore, the photograph is of his son."
  },
  // Quantitative Aptitude
  {
    id: "q5",
    category: "Quantitative Aptitude",
    question: "A store offers a 20% discount on a product, and then another 10% discount on the reduced price. What is the total equivalent discount percentage?",
    options: ["28%", "30%", "25%", "32%"],
    correctAnswer: "28%",
    explanation: "Let original price be 100. First discount: 100 - 20 = 80. Second discount: 10% of 80 is 8. Final price is 72. Total discount is 100 - 72 = 28%."
  },
  {
    id: "q6",
    category: "Quantitative Aptitude",
    question: "If a train 120 meters long crosses a pole in 6 seconds, what is the speed of the train in km/hr?",
    options: ["72", "60", "84", "90"],
    correctAnswer: "72",
    explanation: "Speed in m/s = Distance/Time = 120/6 = 20 m/s. Convert to km/hr = 20 * (18/5) = 72 km/hr."
  },
  {
    id: "q7",
    category: "Quantitative Aptitude",
    question: "Working together, A and B can complete a task in 12 days. A alone can do it in 20 days. How many days will B take to complete it alone?",
    options: ["24 days", "25 days", "30 days", "36 days"],
    correctAnswer: "30 days",
    explanation: "1/A + 1/B = 1/12. Since A = 20, 1/20 + 1/B = 1/12. 1/B = 1/12 - 1/20 = 5/60 - 3/60 = 2/60 = 1/30. So B takes 30 days."
  },
  {
    id: "q8",
    category: "Quantitative Aptitude",
    question: "What is the probability of getting a sum of 9 from two throws of a standard 6-sided dice?",
    options: ["1/6", "1/8", "1/9", "1/12"],
    correctAnswer: "1/9",
    explanation: "Total outcomes = 36. Favorable outcomes (sum=9) are (3,6), (4,5), (5,4), (6,3) which is 4. Probability = 4/36 = 1/9."
  },
  // UI/UX Problem Solving
  {
    id: "q9",
    category: "UI/UX Problem Solving",
    question: "When designing for users with red-green color blindness, which approach is considered best practice?",
    options: ["Use bright contrasting red and green", "Rely entirely on color coding", "Use shapes, text, or patterns in addition to color", "Avoid using colors entirely"],
    correctAnswer: "Use shapes, text, or patterns in addition to color",
    explanation: "Color should never be the only indicator for important information. Using text or icons ensures accessibility for colorblind users."
  },
  {
    id: "q10",
    category: "UI/UX Problem Solving",
    question: "If an e-commerce checkout process has a high drop-off rate on the 'Shipping Details' page, what is the most logical first step to investigate?",
    options: ["Redesign the entire website", "Change the primary brand color", "Implement a guest checkout or analyze form field complexity", "Increase the font size globally"],
    correctAnswer: "Implement a guest checkout or analyze form field complexity",
    explanation: "High drop-off on a specific form page usually indicates friction. Forcing users to create an account or having too many fields are common culprits."
  },
  {
    id: "q11",
    category: "UI/UX Problem Solving",
    question: "What is the primary purpose of a 'Wireframe' in the design process?",
    options: ["To finalize colors and typography", "To establish the structural layout and functionality", "To serve as the final deliverable to developers", "To create high-fidelity animations"],
    correctAnswer: "To establish the structural layout and functionality",
    explanation: "Wireframes are low-fidelity structural blueprints used to define layout and hierarchy before aesthetic details are added."
  },
  {
    id: "q12",
    category: "UI/UX Problem Solving",
    question: "Which of the following describes the 'Gestalt Principle of Proximity'?",
    options: ["Elements that look similar are perceived as related", "Elements that move in the same direction are perceived as a group", "Elements that are close to each other are perceived as a group", "Elements that form a closed shape are perceived as a whole"],
    correctAnswer: "Elements that are close to each other are perceived as a group",
    explanation: "Proximity dictates that humans group things together that are physically close to one another in space."
  },
  // Continuing with Logical Reasoning
  {
    id: "q13",
    category: "Logical Reasoning",
    question: "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
    options: ["20", "22", "23", "26"],
    correctAnswer: "22",
    explanation: "This is an alternating subtraction series, which subtracts 2, then 4, then 2, and so on. 24 - 2 = 22."
  },
  {
    id: "q14",
    category: "Logical Reasoning",
    question: "Odometer is to mileage as compass is to:",
    options: ["Speed", "Hiking", "Needle", "Direction"],
    correctAnswer: "Direction",
    explanation: "An odometer is an instrument used to measure mileage. A compass is an instrument used to determine direction."
  },
  {
    id: "q15",
    category: "Logical Reasoning",
    question: "If a circle is one, how many is an octagon?",
    options: ["Two", "Four", "Six", "Eight"],
    correctAnswer: "Eight",
    explanation: "An octagon has eight sides. A circle is one continuous line."
  },
  // Let's add more quickly... I will generate up to 25 to establish a solid base, then I can generate more later or assume this represents the array.
  {
    id: "q16",
    category: "Verbal Ability",
    question: "Choose the word that is most nearly opposite in meaning to 'OBSTINATE'.",
    options: ["Stubborn", "Flexible", "Angry", "Resolute"],
    correctAnswer: "Flexible",
    explanation: "Obstinate means stubbornly refusing to change one's opinion. The opposite is flexible."
  },
  {
    id: "q17",
    category: "Quantitative Aptitude",
    question: "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average increases by 1 year. What is the teacher's age?",
    options: ["45 years", "46 years", "50 years", "52 years"],
    correctAnswer: "46 years",
    explanation: "Total age of students = 30 * 15 = 450. New average = 16, total people = 31. New total age = 31 * 16 = 496. Teacher's age = 496 - 450 = 46."
  },
  {
    id: "q18",
    category: "Logical Reasoning",
    question: "SCD, TEF, UGH, ____, WKL",
    options: ["CMN", "UJI", "VIJ", "IJT"],
    correctAnswer: "VIJ",
    explanation: "First letter is alphabetical: S, T, U, V, W. Second and third letters are alphabetical pairs: CD, EF, GH, IJ, KL."
  },
  {
    id: "q19",
    category: "UI/UX Problem Solving",
    question: "What is Fitts's Law generally used to determine in UI design?",
    options: ["The color contrast ratio", "The time required to rapidly move to a target area", "The number of items a user can hold in working memory", "The visual hierarchy of typography"],
    correctAnswer: "The time required to rapidly move to a target area",
    explanation: "Fitts's Law predicts that the time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target."
  },
  {
    id: "q20",
    category: "UI/UX Problem Solving",
    question: "Which metric would best help you determine if your navigation menu is too complex?",
    options: ["Conversion Rate", "Task Success Rate & Time on Task", "Net Promoter Score (NPS)", "Bounce Rate"],
    correctAnswer: "Task Success Rate & Time on Task",
    explanation: "If navigation is complex, users will take longer to find things (Time on Task) or fail to find them altogether (Task Success Rate)."
  }
];

// Helper to get exactly 20 questions for a test
export const getQuestionsForTest = (count: number = 20): Question[] => {
  // Simple shuffle and slice
  const shuffled = [...aptitudeQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
