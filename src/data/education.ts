export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string[];
  activities: string[];
  honors: string[];
}

export const education: Education[] = [
    {
      id: "1",
      degree: "B.S. Computer Science & B.S. Statistics",
      school: "Texas A&M University",
      location: "College Station, Texas",
      period: "2022 - 2026",
      gpa: "3.87/4.0",
      coursework: [
        "Data Structures & Algorithms", 
        "Computer Systems", 
        "Design & Analysis of Algorithms", 
        "Programming Languages", 
        "Machine Learning", 
        "Natural Language Processing", 
        "Mathematical Statistics I & II", 
        "Linear Algebra"
      ],
      activities: [
        "Aggie Data Science Club - External Vice President",
        "ML Researcher for the Department of Construction Science",
        "Teaching Assistant for CSCE 120 (Intro to C++)",
        "Aggie Coding Club - Member",
        "Aggie Blockchain - Member"
      ],
      honors: [
        "Dean's List - Fall 2022, Spring 2023",
        "Scholarship Recipient - Academic Excellence"
      ]
    }
  ];