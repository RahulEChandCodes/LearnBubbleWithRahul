export const courseData = {
  title: "Master Bubble.io Development",
  subtitle: "Build Powerful No-Code Applications Without Writing a Single Line of Code",
  description: "Transform your ideas into fully functional web applications. Learn from industry experts and join 5,000+ successful graduates.",
  enrollmentDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
  price: "$497",
  originalPrice: "$997",
  duration: "8 weeks",
  level: "Beginner to Advanced",
  students: "5,247",
  rating: "4.9",
  reviews: "1,834"
};

export const syllabus = [
  {
    id: 1,
    module: "Module 1",
    title: "Introduction to Bubble.io",
    duration: "Week 1",
    lessons: [
      "Understanding the Bubble.io interface and editor",
      "Setting up your first Bubble application",
      "Basic elements and responsive design principles",
      "Hands-on project: Build your first landing page"
    ]
  },
  {
    id: 2,
    module: "Module 2",
    title: "Data Structures & Databases",
    duration: "Week 2-3",
    lessons: [
      "Creating and managing database schemas",
      "Understanding data types and relationships",
      "Privacy rules and data security",
      "Project: Build a user registration system"
    ]
  },
  {
    id: 3,
    module: "Module 3",
    title: "Workflows & Logic",
    duration: "Week 4-5",
    lessons: [
      "Creating complex workflows and automations",
      "Conditional logic and custom states",
      "API integrations and external services",
      "Project: Build an e-commerce checkout flow"
    ]
  },
  {
    id: 4,
    module: "Module 4",
    title: "Advanced Features",
    duration: "Week 6-7",
    lessons: [
      "Custom plugins and reusable elements",
      "Performance optimization techniques",
      "SEO and analytics integration",
      "Payment processing with Stripe"
    ]
  },
  {
    id: 5,
    module: "Module 5",
    title: "Launch & Deploy",
    duration: "Week 8",
    lessons: [
      "Testing and debugging best practices",
      "Deploying to production",
      "Custom domains and SSL certificates",
      "Final project: Launch your own SaaS application"
    ]
  }
];

export const faqs = [
  {
    id: 1,
    question: "Do I need coding experience to take this course?",
    answer: "No coding experience is required! Bubble.io is a visual programming platform that allows you to build applications without writing code. This course is designed for complete beginners and will guide you through every step."
  },
  {
    id: 2,
    question: "How long do I have access to the course?",
    answer: "You get lifetime access to all course materials, including future updates. Learn at your own pace and revisit lessons whenever you need a refresher."
  },
  {
    id: 3,
    question: "What kind of applications can I build with Bubble.io?",
    answer: "You can build virtually any web application including marketplaces, social networks, SaaS products, booking systems, e-commerce stores, internal tools, and much more. The possibilities are endless!"
  },
  {
    id: 4,
    question: "Is there a refund policy?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason within the first 30 days, we'll provide a full refund, no questions asked."
  },
  {
    id: 5,
    question: "Will I receive a certificate upon completion?",
    answer: "Yes, you'll receive a verified certificate of completion that you can share on LinkedIn and add to your portfolio. This demonstrates your proficiency in Bubble.io development."
  },
  {
    id: 6,
    question: "Do you offer support if I get stuck?",
    answer: "Absolutely! You'll have access to our private community forum where instructors and fellow students can help. We also offer weekly live Q&A sessions where you can get your questions answered in real-time."
  }
];

export const chatbotResponses = {
  greeting: "Hello! I'm here to help you learn about our Bubble.io course. How can I assist you today?",
  default: "I'm here to help! You can ask me about course content, pricing, enrollment, or anything else related to our Bubble.io course.",
  keywords: [
    {
      triggers: ["price", "cost", "how much", "pricing"],
      response: "The course is currently available for $497 (regular price $997). This is a limited-time offer that includes lifetime access to all materials and future updates!"
    },
    {
      triggers: ["duration", "how long", "length", "time"],
      response: "The course is 8 weeks long, but you can learn at your own pace. You'll have lifetime access, so take as much time as you need!"
    },
    {
      triggers: ["prerequisite", "experience", "beginner", "coding"],
      response: "No prior coding or technical experience is required! This course is designed for complete beginners. If you can use a web browser, you can take this course."
    },
    {
      triggers: ["certificate", "certification"],
      response: "Yes! You'll receive a verified certificate of completion that you can share on LinkedIn and add to your professional portfolio."
    },
    {
      triggers: ["refund", "money back", "guarantee"],
      response: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll provide a full refund, no questions asked."
    },
    {
      triggers: ["support", "help", "stuck", "question"],
      response: "You'll get access to our private community forum and weekly live Q&A sessions with instructors. Plus, I'm always here to help with quick questions!"
    },
    {
      triggers: ["enroll", "sign up", "register", "join"],
      response: "Great! To enroll, simply click the 'Enroll Now' button at the top of the page. The special pricing ends soon, so don't miss out!"
    },
    {
      triggers: ["syllabus", "modules", "curriculum", "content"],
      response: "The course covers 5 comprehensive modules: Introduction to Bubble, Data Structures, Workflows & Logic, Advanced Features, and Launch & Deploy. Check out the full syllabus on the page above!"
    }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "SaaS Founder",
    image: "https://i.pravatar.cc/150?img=1",
    text: "This course helped me launch my SaaS product in just 6 weeks. I went from zero coding knowledge to building a fully functional application!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Freelance Developer",
    image: "https://i.pravatar.cc/150?img=3",
    text: "The best investment I've made in my career. I now charge clients $5,000+ for Bubble.io projects and the ROI has been incredible.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Startup COO",
    image: "https://i.pravatar.cc/150?img=5",
    text: "We saved over $50,000 in development costs by learning Bubble.io. The course is comprehensive and the instructors are amazing!",
    rating: 5
  }
];