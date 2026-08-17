export interface InterviewQuestion {
  id: string;
  question: string;
  guidance: string;
}

export const onSiteQuestions: InterviewQuestion[] = [
  {
    id: "os1",
    question: "What is the difference between UI and UX?",
    guidance: "UI (User Interface) focuses on the visual elements (colors, typography, layout), while UX (User Experience) is about the overall feel of the experience and how easy it is for users to accomplish their goals. Analogy: UI is the paint and dashboard of a car; UX is how the car drives."
  },
  {
    id: "os2",
    question: "Walk us through your design process.",
    guidance: "Structure your answer logically: Empathize (User Research), Define (Problem Statement, Personas), Ideate (Wireframes, User Journeys), Prototype (High-fidelity designs), and Test (Usability testing). Highlight how you iterate based on feedback."
  },
  {
    id: "os3",
    question: "What is Information Architecture (IA) and why does it matter?",
    guidance: "IA is the structural design of shared information environments (like navigating a website). It matters because good IA helps users find information and complete tasks efficiently without getting lost."
  },
  {
    id: "os4",
    question: "How do you prepare your designs for developer handoff?",
    guidance: "Mention tools like Figma's Dev Mode. Emphasize creating a design system (or using variables/tokens), naming layers logically, grouping components, and documenting interactive states and micro-animations."
  },
  {
    id: "os5",
    question: "If a developer tells you a design is too difficult to implement, how do you handle it?",
    guidance: "Show collaboration. You should seek to understand their technical constraints, discuss the core user need the design addresses, and brainstorm a compromise that achieves the user goal without overcomplicating development."
  },
  {
    id: "os6",
    question: "How do you incorporate accessibility into your designs?",
    guidance: "Mention WCAG guidelines. Talk about ensuring adequate color contrast, large enough touch targets, providing alt text, and not relying solely on color to convey information."
  },
  {
    id: "os7",
    question: "What are micro-interactions, and why are they important?",
    guidance: "Micro-interactions are subtle animations or visual cues (like a button changing color on hover or a success checkmark animating). They provide immediate feedback to the user, making interfaces feel alive and intuitive."
  },
  {
    id: "os8",
    question: "What is your approach to responsive design?",
    guidance: "Explain 'mobile-first' design vs. 'desktop-first'. Mention using fluid grids, flexible images, and media queries to ensure the design looks good and functions well on all screen sizes."
  },
  {
    id: "os9",
    question: "Tell us about a time you had to justify a design decision to a stakeholder.",
    guidance: "Use the STAR method. Emphasize that you use data (user research, analytics, or established design principles) to back up your decisions rather than personal preference."
  },
  {
    id: "os10",
    question: "How do you balance user needs with business goals?",
    guidance: "Explain that a successful product must do both. You might give an example of reducing friction in a checkout process (user need) which directly increases conversion rates (business goal)."
  }
];

export const hrQuestions: InterviewQuestion[] = [
  {
    id: "hr1",
    question: "Tell me about yourself.",
    guidance: "Keep it professional. Briefly cover your educational background, relevant skills or projects, and why you are specifically interested in UI/UX and this traineeship at Bajra Technologies."
  },
  {
    id: "hr2",
    question: "Why do you want to join the Bajra Technologies Traineeship program?",
    guidance: "Show that you researched the company. Mention their emphasis on mentorship, their stack, or their culture of continuous learning. Express your desire to grow from a trainee into a contributing 'Bajra Being'."
  },
  {
    id: "hr3",
    question: "What are your greatest strengths and weaknesses?",
    guidance: "For strengths, focus on relevant skills (e.g., empathy for users, rapid prototyping). For weaknesses, choose something you are actively working to improve (e.g., 'I sometimes focus too much on details, but I've started time-boxing my tasks')."
  },
  {
    id: "hr4",
    question: "Where do you see yourself in 3 years?",
    guidance: "Align your goals with the company. You might say you see yourself as an intermediate or senior UI/UX Designer, leading projects, and perhaps mentoring future trainees at Bajra."
  },
  {
    id: "hr5",
    question: "Tell me about a time you failed or made a mistake.",
    guidance: "Use the STAR method. The most important part of your answer is the 'Result'—what did you learn from the failure, and how did you change your process to ensure it didn't happen again?"
  },
  {
    id: "hr6",
    question: "How do you handle tight deadlines and high pressure?",
    guidance: "Explain your organizational strategy. Mention breaking large tasks into smaller ones, prioritizing the MVP (Minimum Viable Product), and communicating early if you foresee roadblocks."
  },
  {
    id: "hr7",
    question: "Are you comfortable with the stipend structure and full-time commitment of the traineeship?",
    guidance: "Be completely transparent. The email explicitly states failure to be honest about availability can bar you from future opportunities. Confirm your readiness to commit fully."
  },
  {
    id: "hr8",
    question: "How do you keep your skills updated and stay on top of design trends?",
    guidance: "Mention specific resources: Dribbble, Behance, Medium articles, NNGroup (Nielsen Norman Group), or taking online courses to continuously improve."
  },
  {
    id: "hr9",
    question: "Describe a time you had a conflict with a team member. How did you resolve it?",
    guidance: "Focus on communication and empathy. Explain that you seek to understand their perspective, keep emotions out of it, and focus on what's best for the project/user."
  },
  {
    id: "hr10",
    question: "Do you have any questions for us?",
    guidance: "Always have questions prepared! Ask about the team structure, the specific projects trainees work on, or what success looks like in the first 30 days of the program."
  }
];
