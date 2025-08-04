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
    description: "A real time emergency room monitoring system using computer vision to queue patients and identify severe conditions.",
    details: "Emergency rooms are stressful environments where nurses need to track incoming patients in a fast-paced environment. This process is called patient triaging. What if there was a tool that could triage patients automatically based on visual characteristics (like level of injury) and electronic health records?",
    link: "https://devpost.com/software/guardiancv"
    },
    { 
    id: "2",
    name: "HackTX 2024", 
    tech: ["Python", "Flask", "Langchain", "TypeScript", "SQL", "nltk", "Topic Modelling", "ChatGPT API", "Retrieval Augmented Generation(RAG)"],
    description: "A modular AI app that creates custom chatbots by learning from your documents to provide accurate responses.",
    details: "Training Wheels lets users create custom chatbots by uploading their own documents, which are processed using Retrieval-Augmented Generation (RAG) to deliver accurate, context-aware answers. The chatbot can then be easily embedded into any website using an iframe, just like how a YouTube video is shown on another website. For example, a small business can upload product manuals to provide instant customer support, or a teacher can create an automatic teaching assistant that answers students’ questions based on course materials.",
    link: "https://devpost.com/software/training-wheels-ohk8ri"
    },
    { 
    id: "3",
    name: "TAMUHack 2024 - NutriScan", 
    tech: ["React Native"],
    description: "A unique mobile app to help people make informed snack choices by providing insights when they scan food label barcodes.",
    details: "Created responsive web application with modern UI/UX design, featuring dynamic content management and user authentication.",
    link: "https://devpost.com/software/nutriscan-qifzab"
    },
    { 
    id: "",
    name: "TAMUHack 2023 - Diagnosis.AI", 
    tech: ["Azure", "Tailwind CSS", "HTML", "Flask", "Python", "Logistic Regression"],
    description: "A basic web application that predicts the likelihood of a person diabetic using Machine Learning.",
    details: "A basic HTML/CSS website that uses logistic regression to predict whether a person has diabetes based on their health data. This was my first hackathon project ever and we were really proud to come up with a working end product!",
    link: "https://devpost.com/software/diagnosis-ai"    
    }
]   