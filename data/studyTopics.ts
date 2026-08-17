export interface StudyTopic {
  id: string;
  title: string;
  category: 'Aptitude' | 'UI/UX';
  content: string;
}

export const studyTopics: StudyTopic[] = [
  {
    id: "t1",
    title: "Syllogisms (Logical Deduction)",
    category: "Aptitude",
    content: "Syllogisms involve drawing a conclusion from two or more given premises. In questions using nonsense words (like 'Bloops are Razzies'), you must ignore reality and only follow the logical structure. A helpful tip is to draw Venn diagrams. If 'All Bloops are Razzies' (Bloop circle is inside Razzie circle) and 'All Razzies are Lazzies' (Razzie circle is inside Lazzie circle), then the Bloop circle is completely inside the Lazzie circle."
  },
  {
    id: "t2",
    title: "Number Series and Patterns",
    category: "Aptitude",
    content: "Number series test your ability to recognize mathematical patterns. Always check the differences between consecutive numbers first. If the differences form a pattern (like 4, 6, 8, 10...), you have found the rule. Also watch out for prime numbers, squares, cubes, and alternating sequences (where every other number forms its own sequence)."
  },
  {
    id: "t3",
    title: "Time, Speed, and Distance",
    category: "Aptitude",
    content: "The core formula is Speed = Distance / Time. When dealing with trains crossing poles or standing objects, the 'distance' is the length of the train itself. Remember to convert units carefully: multiply km/hr by (5/18) to get m/s, and multiply m/s by (18/5) to get km/hr."
  },
  {
    id: "t4",
    title: "Work and Time",
    category: "Aptitude",
    content: "Work problems are solved easily by taking the reciprocal of the time taken. If Person A takes 20 days to finish a task, their 'work rate' is 1/20 of the task per day. If A and B work together, their combined rate is (1/A + 1/B). Set this equal to 1/(Total Time) to solve for missing variables."
  },
  {
    id: "t5",
    title: "Gestalt Principles of Design",
    category: "UI/UX",
    content: "Gestalt principles describe how human eyes perceive visual elements as a unified whole. \n- **Proximity**: Elements close together are perceived as related.\n- **Similarity**: Elements looking similar (color, shape) are perceived as related.\n- **Continuity**: Eyes follow a continuous line or curve.\n- **Closure**: Brains fill in missing parts of a design to create a whole shape."
  },
  {
    id: "t6",
    title: "Wireframing vs. Prototyping",
    category: "UI/UX",
    content: "**Wireframes** are low-fidelity, basic structural layouts (often grayscale) that map out the skeletal framework of a page. They focus on functionality, behavior, and priority of content. \n**Prototypes** are high-fidelity, interactive representations of the final product, used for usability testing and developer handoff. They include colors, typography, and interactive states."
  },
  {
    id: "t7",
    title: "Fitts's Law",
    category: "UI/UX",
    content: "Fitts's Law states that the time to acquire a target is a function of the distance to and size of the target. In UI design, this means making important buttons (like 'Submit' or 'Add to Cart') larger and placing them closer to the user's typical cursor/finger position to reduce interaction time."
  },
  {
    id: "t8",
    title: "Accessibility (a11y) & Color Blindness",
    category: "UI/UX",
    content: "Designing for accessibility ensures all users, including those with disabilities, can use your interface. When designing for color blindness (like red-green), you must never rely *only* on color to convey meaning. Always use secondary indicators like text labels, patterns, outlines, or distinct shapes (e.g., a green checkmark icon AND the word 'Success')."
  },
  {
    id: "t9",
    title: "Information Architecture (IA)",
    category: "UI/UX",
    content: "IA is the science of organizing and structuring content in a logical, user-friendly way. Good IA helps users find information intuitively. It involves creating site maps, defining navigation menus, and categorizing content hierarchically."
  }
];
