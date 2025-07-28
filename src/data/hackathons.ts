export interface Hackathon {
    id: string;
    name: string;
    tech: string;
    description: string;
    details: string;
    link: string;
}

export const hackathons: Hackathon[] = [
    { 
    id: "1",
    name: "TAMUHack 2025 - Guardian CV", 
    tech: "Computer Vision, Python",
    description: "Computer vision application for safety monitoring.",
    details: "Developed during hackathon to create real-time safety monitoring system using computer vision algorithms for workplace hazard detection.",
    link: "https://devpost.com/software/guardiancv"
    },
    { 
    id: "2",
    name: "HackTX 2024", 
    tech: "Python, Flask",
    description: "Hackathon project focusing on data analysis.",
    details: "Built data visualization and analysis platform during 48-hour hackathon, focusing on real-time data processing and interactive dashboards.",
    link: "https://devpost.com/software/training-wheels-ohk8ri"
    },
    { 
    id: "3",
    name: "TAMUHack 2024", 
    tech: "Next.js, Tailwind CSS",
    description: "Web application developed during university hackathon.",
    details: "Created responsive web application with modern UI/UX design, featuring dynamic content management and user authentication.",
    link: "https://devpost.com/software/nutriscan-qifzab"
    },
    { 
    id: "",
    name: "TAMUHack 2023", 
    tech: "React, OpenWeather API",
    description: "Weather tracking application with real-time data.",
    details: "Interactive weather dashboard integrating OpenWeather API with location-based forecasting and historical weather pattern analysis.",
    link: "https://devpost.com/software/diagnosis-ai"    
    }
]   