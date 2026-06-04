export const SITE = {
  name: "Learn with Tez",
  tagline: "Physics Made Clear. Grades Made Better.",
  email: "tezlinejoseph@gmail.com",
  phone: "+91 9447386526",
  regions: ["Canada", "Australia", "Ireland"],
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: "12+", label: "Years Teaching Physics" },
  { value: "90%+", label: "Student Retention Rate" },
  { value: "50+", label: "Custom Lesson Decks" },
  { value: "200+", label: "Students Mentored Annually" },
];

export const CREDENTIALS = [
  { icon: "GraduationCap", label: "M.Sc. Physics — WES Certified" },
  { icon: "GraduationCap", label: "B.Sc. Physics — WES Certified" },
  { icon: "GraduationCap", label: "B.Ed. Education — WES Certified" },
  { icon: "Globe", label: "12+ Years Experience" },
  { icon: "MapPin", label: "Available: Canada | Australia | Ireland" },
];

export const CURRICULA = [
  { flag: "🇨🇦", title: "Canadian Curriculum", detail: "Grades 10–12 Provincial" },
  { flag: "🇦🇺", title: "Australian Curriculum", detail: "Stages 4–6" },
  { flag: "🇮🇪", title: "Irish Leaving Certificate", detail: "Ordinary & Higher Level" },
  { flag: "📘", title: "IGCSE Physics", detail: "Cambridge International" },
  { flag: "📗", title: "IB Physics", detail: "SL & HL" },
  { flag: "📙", title: "CBSE & International Equivalents", detail: "Grades 9–12" },
];

export const TOPICS = [
  "Mechanics", "Electromagnetism", "Optics", "Thermodynamics",
  "Modern Physics", "Waves", "Nuclear Physics",
  "Numerical Problem Solving", "Exam Preparation",
];

export const STEPS = [
  {
    n: "01",
    title: "Book a Free Trial",
    body: "Choose a time that works for your timezone. No payment needed upfront.",
  },
  {
    n: "02",
    title: "Diagnose & Plan",
    body: "In your first session, Tez assesses your current level and builds a custom learning plan targeting your exact syllabus and weak points.",
  },
  {
    n: "03",
    title: "Learn, Improve, Score",
    body: "Regular live sessions, structured revision, mock tests, and personal feedback — until your grade reflects your real potential.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "My son went from a C to an A in Physics in just one term. Tez has a gift for making the hard stuff click.",
    name: "Parent",
    location: "Ontario",
    flag: "🇨🇦",
    grade: "Grade 11",
  },
  {
    quote: "I used to dread Physics. Now it's my strongest subject going into the Leaving Cert.",
    name: "Student",
    location: "Dublin",
    flag: "🇮🇪",
    grade: "Grade 12",
  },
  {
    quote: "Clear explanations, structured practice papers, and always available when I had questions.",
    name: "Student",
    location: "Melbourne",
    flag: "🇦🇺",
    grade: "Year 12",
  },
];

export const PRICING = [
  {
    name: "Starter",
    sessions: "4 sessions/month",
    price: "Contact for pricing",
    best: "Occasional support",
    features: [
      "1-hour live 1:1 sessions",
      "Zoom / Google Meet",
      "Custom lesson materials",
      "Email support between sessions",
    ],
    popular: false,
  },
  {
    name: "Consistent",
    sessions: "8 sessions/month",
    price: "Contact for pricing",
    best: "Steady improvement",
    features: [
      "Everything in Starter",
      "Structured revision plans",
      "Weekly progress check-ins",
      "Mock test review",
    ],
    popular: true,
  },
  {
    name: "Intensive",
    sessions: "12 sessions/month",
    price: "Contact for pricing",
    best: "Exam prep sprint",
    features: [
      "Everything in Consistent",
      "Full mock exam papers",
      "Priority scheduling",
      "Detailed feedback reports",
    ],
    popular: false,
  },
];

export const FAQS = [
  {
    q: "What platform do sessions happen on?",
    a: "Live video via Zoom or Google Meet, with shared screen and digital whiteboard.",
  },
  {
    q: "What time zones do you cover?",
    a: "Sessions are available across IST, AEST, GMT/IST (Ireland), and EST/PST (Canada). Flexible scheduling available.",
  },
  {
    q: "Is the first session really free?",
    a: "Yes. The first session is a no-obligation diagnostic and planning call.",
  },
  {
    q: "What if my child's curriculum isn't listed?",
    a: "Book a free call and Tez will assess the syllabus fit within 24 hours.",
  },
  {
    q: "How quickly can students expect to see improvement?",
    a: "Most students see measurable grade improvement within one academic term (8–12 weeks) of consistent sessions.",
  },
  {
    q: "Are materials provided?",
    a: "Yes. Tez has a library of 50+ custom lesson decks, worked examples, and problem sets built specifically for international syllabi.",
  },
];

export const ABOUT_BIO = [
  "I'm a Physics educator with over 12 years of teaching experience — from undergraduate lecture halls to live virtual classrooms for students across the globe. I've taught Grades 7 through 12 across CBSE, IGCSE, and IB syllabi, and I know exactly where students get stuck and how to get them unstuck.",
  "My three degrees — M.Sc. Physics, B.Sc. Physics, and B.Ed. — are all WES-certified for Canadian equivalency, and I've spent the last 3 years delivering live online tutoring to international students like yours. My students regularly move up one to two letter grades within a single term.",
];