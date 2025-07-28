export interface Hackathon {
    id: string;
    name: string;
    tech: string[];
    description: string;
    details: string;
    link: string;
}

export const hackathons: Hackathon[] = [
    { 
    id: "1",
    name: "TAMUHack 2025 - Guardian CV", 
    tech: ["AWS", "Python", "OpenCV", "Next.JS", "Flask"],
    description: "A real-time emergency room monitoring system using computer vision.",
    details: "Emergency rooms are stressful environments where nurses need to track incoming patients in a fast-paced environment. This process is called patient triaging. What if there was a tool that could triage patients automatically based on visual characteristics (like level of injury) and electronic health records?",
    link: "https://devpost.com/software/guardiancv"
    },
    { 
    id: "2",
    name: "HackTX 2024", 
    tech: ["Python", "Flask", "Langchain", "TypeScript", "SQL", "nltk", "Topic Modelling", "ChatGPT API", "Retrieval Augmented Generation(RAG)"],
    description: "An modular, AI app that creates smart chatbots by learning directly from your documents to provide accurate, context-aware responses.",
    details: "Training Wheels lets users create custom chatbots by uploading their own documents, which are processed using Retrieval-Augmented Generation (RAG) to deliver accurate, context-aware answers. The chatbot can then be easily embedded into any website using an iframe, just like how a YouTube video is shown on another website. For example, a small business can upload product manuals to provide instant customer support, or a teacher can create an automatic teaching assistant that answers students’ questions based on course materials.",
    link: "https://devpost.com/software/training-wheels-ohk8ri"
    },
    { 
    id: "3",
    name: "TAMUHack 2024 - NutriScan", 
    tech: ["React Native"],
    description: "A mobile app to help people make informed snack choices.",
    details: "Created responsive web application with modern UI/UX design, featuring dynamic content management and user authentication.",
    link: "https://devpost.com/software/nutriscan-qifzab"
    },
    { 
    id: "",
    name: "TAMUHack 2023", 
    tech: ["React", "OpenWeather API"],
    description: "Weather tracking application with real-time data.",
    details: "Interactive weather dashboard integrating OpenWeather API with location-based forecasting and historical weather pattern analysis.",
    link: "https://devpost.com/software/diagnosis-ai"    
    }
]   