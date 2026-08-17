export interface UIUXQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const uiuxQuestions: UIUXQuestion[] = [
  {
    "id": "uiux_1",
    "category": "Accessibility",
    "question": "What is the minimum recommended contrast ratio for normal text according to WCAG AA standards?",
    "options": [
      "3:1",
      "4.5:1",
      "7:1",
      "2:1"
    ],
    "correctAnswer": "4.5:1",
    "explanation": "WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text."
  },
  {
    "id": "uiux_2",
    "category": "Interaction Design",
    "question": "According to Fitts's Law, what makes a button easier to click?",
    "options": [
      "Making it smaller and farther away",
      "Making it larger and closer to the user's cursor",
      "Changing its color to red",
      "Adding a drop shadow"
    ],
    "correctAnswer": "Making it larger and closer to the user's cursor",
    "explanation": "Fitts's Law states that the time to acquire a target is a function of the distance to and size of the target."
  },
  {
    "id": "uiux_3",
    "category": "Usability Testing",
    "question": "In A/B testing, what does the 'Control' refer to?",
    "options": [
      "The new variation being tested",
      "The original, unchanged version of the design",
      "The group of users who opted out",
      "The statistical significance metric"
    ],
    "correctAnswer": "The original, unchanged version of the design",
    "explanation": "The control is the existing version, which acts as a baseline to compare against the new variant (Treatment)."
  },
  {
    "id": "uiux_4",
    "category": "Visual Design",
    "question": "Which Gestalt principle explains why we see a group of dots arranged in a circle as a circle, rather than individual dots?",
    "options": [
      "Proximity",
      "Similarity",
      "Closure",
      "Symmetry"
    ],
    "correctAnswer": "Closure",
    "explanation": "Closure is the mind's tendency to fill in missing information to create a complete, recognizable shape."
  },
  {
    "id": "uiux_5",
    "category": "Information Architecture",
    "question": "What is 'Card Sorting' primarily used for?",
    "options": [
      "Designing UI components",
      "Testing typography legibility",
      "Discovering how users categorize information",
      "Generating color palettes"
    ],
    "correctAnswer": "Discovering how users categorize information",
    "explanation": "Card sorting is a UX research technique where users organize topics into categories that make sense to them, helping shape the IA."
  },
  {
    "id": "uiux_6",
    "category": "Wireframing & Prototyping",
    "question": "Which of the following is typically NOT included in a low-fidelity wireframe?",
    "options": [
      "Layout structure",
      "Content hierarchy",
      "Final brand colors and images",
      "Basic navigational elements"
    ],
    "correctAnswer": "Final brand colors and images",
    "explanation": "Low-fidelity wireframes focus on structure and function, deliberately omitting aesthetic details like brand colors to avoid distraction."
  },
  {
    "id": "uiux_7",
    "category": "UX Research",
    "question": "What is the main difference between a User Persona and a User Profile?",
    "options": [
      "A profile is fictional, a persona is real.",
      "A persona is a fictional archetype based on research; a profile is statistical demographic data.",
      "They are exactly the same thing.",
      "A persona is used by developers, a profile by designers."
    ],
    "correctAnswer": "A persona is a fictional archetype based on research; a profile is statistical demographic data.",
    "explanation": "Personas humanize data by giving it a face and narrative, while profiles are usually just quantitative demographic segments."
  },
  {
    "id": "uiux_8",
    "category": "Interaction Design",
    "question": "What is an 'Affordance'?",
    "options": [
      "The budget allocated for a design project",
      "A visual cue indicating how an object can be used",
      "A legal requirement for accessibility",
      "The time it takes a page to load"
    ],
    "correctAnswer": "A visual cue indicating how an object can be used",
    "explanation": "An affordance (like a button looking raised or 3D) tells the user that the element can be clicked or interacted with."
  },
  {
    "id": "uiux_9",
    "category": "Visual Design",
    "question": "In typography, what is 'Kerning'?",
    "options": [
      "The vertical space between lines of text",
      "The overall spacing between all characters in a block of text",
      "The adjustment of space between individual pairs of characters",
      "The thickness of the font weight"
    ],
    "correctAnswer": "The adjustment of space between individual pairs of characters",
    "explanation": "Kerning adjusts the space between specific pairs of letters (like 'A' and 'V') to make them visually pleasing."
  },
  {
    "id": "uiux_10",
    "category": "Usability Testing",
    "question": "What does 'Heuristic Evaluation' involve?",
    "options": [
      "Testing the design with 100+ real users",
      "An expert reviewing the interface against established usability principles",
      "Tracking eye movement with special cameras",
      "Writing automated test scripts in code"
    ],
    "correctAnswer": "An expert reviewing the interface against established usability principles",
    "explanation": "In a heuristic evaluation, UX experts evaluate an interface against a set of accepted usability guidelines (heuristics), like Nielsen's 10 heuristics."
  },
  {
    "id": "uiux_11",
    "category": "Visual Design",
    "question": "Which of the following best describes the core purpose of Color Theory in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Color Theory is a fundamental part of Visual Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_12",
    "category": "Accessibility",
    "question": "Which of the following best describes the core purpose of Screen Readers in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Screen Readers is a fundamental part of Accessibility, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_13",
    "category": "UX Research",
    "question": "Which of the following best describes the core purpose of User Interviews in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "User Interviews is a fundamental part of UX Research, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_14",
    "category": "Wireframing & Prototyping",
    "question": "Which of the following best describes the core purpose of User Testing Prototypes in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "User Testing Prototypes is a fundamental part of Wireframing & Prototyping, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_15",
    "category": "Information Architecture",
    "question": "Which of the following best describes the core purpose of Navigation in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Navigation is a fundamental part of Information Architecture, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_16",
    "category": "Usability Testing",
    "question": "Which of the following best describes the core purpose of Heuristic Evaluation in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Heuristic Evaluation is a fundamental part of Usability Testing, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_17",
    "category": "Interaction Design",
    "question": "Which of the following best describes the core purpose of Feedback Loops in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Feedback Loops is a fundamental part of Interaction Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_18",
    "category": "Visual Design",
    "question": "Which of the following best describes the core purpose of Contrast Ratios in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Contrast Ratios is a fundamental part of Visual Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_19",
    "category": "Accessibility",
    "question": "Which of the following best describes the core purpose of Color Blindness in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Color Blindness is a fundamental part of Accessibility, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_20",
    "category": "UX Research",
    "question": "Which of the following best describes the core purpose of Surveys in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Surveys is a fundamental part of UX Research, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_21",
    "category": "Wireframing & Prototyping",
    "question": "Which of the following best describes the core purpose of Developer Handoff in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Developer Handoff is a fundamental part of Wireframing & Prototyping, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_22",
    "category": "Information Architecture",
    "question": "Which of the following best describes the core purpose of Taxonomy in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Taxonomy is a fundamental part of Information Architecture, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_23",
    "category": "Usability Testing",
    "question": "Which of the following best describes the core purpose of Think Aloud in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Think Aloud is a fundamental part of Usability Testing, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_24",
    "category": "Interaction Design",
    "question": "Which of the following best describes the core purpose of Affordances in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Affordances is a fundamental part of Interaction Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_25",
    "category": "Visual Design",
    "question": "Which of the following best describes the core purpose of Gestalt Principles in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Gestalt Principles is a fundamental part of Visual Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_26",
    "category": "Accessibility",
    "question": "Which of the following best describes the core purpose of Keyboard Navigation in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Keyboard Navigation is a fundamental part of Accessibility, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_27",
    "category": "UX Research",
    "question": "Which of the following best describes the core purpose of Empathy Mapping in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Empathy Mapping is a fundamental part of UX Research, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_28",
    "category": "Wireframing & Prototyping",
    "question": "Which of the following best describes the core purpose of Responsive Layouts in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Responsive Layouts is a fundamental part of Wireframing & Prototyping, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_29",
    "category": "Information Architecture",
    "question": "Which of the following best describes the core purpose of User Flows in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "User Flows is a fundamental part of Information Architecture, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_30",
    "category": "Usability Testing",
    "question": "Which of the following best describes the core purpose of Task Success Rate in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Task Success Rate is a fundamental part of Usability Testing, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_31",
    "category": "Interaction Design",
    "question": "Which of the following best describes the core purpose of State Changes in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "State Changes is a fundamental part of Interaction Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_32",
    "category": "Visual Design",
    "question": "Which of the following best describes the core purpose of Grid Systems in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Grid Systems is a fundamental part of Visual Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_33",
    "category": "Accessibility",
    "question": "Which of the following best describes the core purpose of Alt Text in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Alt Text is a fundamental part of Accessibility, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_34",
    "category": "UX Research",
    "question": "Which of the following best describes the core purpose of Journey Mapping in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Journey Mapping is a fundamental part of UX Research, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_35",
    "category": "Wireframing & Prototyping",
    "question": "Which of the following best describes the core purpose of Component Libraries in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Component Libraries is a fundamental part of Wireframing & Prototyping, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_36",
    "category": "Information Architecture",
    "question": "Which of the following best describes the core purpose of Card Sorting in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Card Sorting is a fundamental part of Information Architecture, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_37",
    "category": "Usability Testing",
    "question": "Which of the following best describes the core purpose of A/B Testing in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "A/B Testing is a fundamental part of Usability Testing, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_38",
    "category": "Interaction Design",
    "question": "Which of the following best describes the core purpose of Micro-interactions in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Micro-interactions is a fundamental part of Interaction Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_39",
    "category": "Visual Design",
    "question": "Which of the following best describes the core purpose of Typography hierarchy in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Typography hierarchy is a fundamental part of Visual Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_40",
    "category": "Accessibility",
    "question": "Which of the following best describes the core purpose of WCAG Guidelines in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "WCAG Guidelines is a fundamental part of Accessibility, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_41",
    "category": "UX Research",
    "question": "Which of the following best describes the core purpose of Personas in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Personas is a fundamental part of UX Research, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_42",
    "category": "Wireframing & Prototyping",
    "question": "Which of the following best describes the core purpose of Low vs High Fidelity in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Low vs High Fidelity is a fundamental part of Wireframing & Prototyping, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_43",
    "category": "Information Architecture",
    "question": "Which of the following best describes the core purpose of Site Mapping in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Site Mapping is a fundamental part of Information Architecture, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_44",
    "category": "Usability Testing",
    "question": "Which of the following best describes the core purpose of Heatmaps in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Heatmaps is a fundamental part of Usability Testing, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_45",
    "category": "Interaction Design",
    "question": "Which of the following best describes the core purpose of Fitts's Law in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Fitts's Law is a fundamental part of Interaction Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_46",
    "category": "Visual Design",
    "question": "Which of the following best describes the core purpose of Color Theory in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Color Theory is a fundamental part of Visual Design, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_47",
    "category": "Accessibility",
    "question": "Which of the following best describes the core purpose of Screen Readers in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Screen Readers is a fundamental part of Accessibility, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_48",
    "category": "UX Research",
    "question": "Which of the following best describes the core purpose of User Interviews in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "User Interviews is a fundamental part of UX Research, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_49",
    "category": "Wireframing & Prototyping",
    "question": "Which of the following best describes the core purpose of User Testing Prototypes in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "User Testing Prototypes is a fundamental part of Wireframing & Prototyping, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  },
  {
    "id": "uiux_50",
    "category": "Information Architecture",
    "question": "Which of the following best describes the core purpose of Navigation in UI/UX design?",
    "options": [
      "It is primarily used to enhance the visual aesthetics of the final product.",
      "It is a methodology used to understand user behavior and structure interfaces intuitively.",
      "It is a back-end programming requirement for database management.",
      "It is only necessary for mobile application development, not web."
    ],
    "correctAnswer": "It is a methodology used to understand user behavior and structure interfaces intuitively.",
    "explanation": "Navigation is a fundamental part of Information Architecture, focusing on ensuring the product is functional, intuitive, and aligned with user needs."
  }
];

export const getUIUXQuestionsForTest = (count: number = 20): UIUXQuestion[] => {
  const shuffled = [...uiuxQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
