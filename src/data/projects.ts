export interface Project {
    id: string;
    name: string;
    tech: string;
    description: string;
    details: string;
    link: string;
}

export const projects: Project[] = [
    { 
    id: "1",
    name: "Depolarize", 
    tech: "Hugging Face, Python, Flask",
    description: "AI-powered application to reduce political polarization through neutral content generation.",
    details: "Built using Hugging Face transformers for natural language processing, creating a web application that analyzes political content and suggests more neutral alternatives.",
    link: "https://github.com/depolarize/depolarize"
    },
    { 
    id: "2",
    name: "Stathub - A Premier League Prediction Model", 
    tech: "Python, Scikit-learn",
    description: "Machine learning model predicting Premier League match outcomes.",
    details: "Developed predictive models using historical match data, player statistics, and team performance metrics to forecast match results with 75% accuracy.",
    link: "https://github.com/apend10/epl_prediction/tree/master"
    },
    { 
    id: "3",
    name: "Panda Express POS System", 
    tech: "React, Python, Flask",
    description: "Full-stack point-of-sale system for restaurant management.",
    details: "Complete POS solution with inventory management, order processing, and sales analytics. Features real-time updates and responsive design.",
    link: "https://github.com/CSCE331-Fall2024/project-3-team-3c"
    }
]