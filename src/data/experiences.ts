export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  achievements: string[];
  location: string;
  category: 'Professional' | 'Academia';
}

export const experiences: Experience[] = [
    {
      id: "1",
      role: "Software Engineer Intern",
      company: "Capital One",
      period: "June 2025 - August 2025",
      location: "Plano, Texas",
      description: "Working in the Dealer Risk team within Capital One Auto Finance (COAF)",
      fullDescription: "Working with the dealer risk team within Capital One Auto Finance to re-design and implement 2 mission critical data flows.",
      technologies: ["Python", "Pyspark", "SQL", "AWS Glue", "AWS SNS", "AWS SQS", "Jenkins", "Git"],
      achievements: [
        "Engineered an event-driven, microservices-based backend for 2 critical Auto Finance Risk workflows, leveraging AWS services including SNS, SQS, Lambda, Glue, and Route 53",
        "Translated complex business logic into optimized PySpark and SQL components, leveraging an in-house Python library",
        "Integrated with Snowflake and enterprise Data Lakes for seamless data ingestion and loading daily for 47 million records",
        "Deployed scalable, fault-tolerant, secure, and cost-efficient pipelines aligned with enterprise reliability standards"
      ],
      category: "Professional"
    },
    {
      id: "2",
      role: "External Vice President",
      company: "Aggie Data Science Club",
      period: "August 2022 - May 2026",
      location: "College Station, Texas",
      description: "Leading external partnerships and industry engagement initiatives",
      fullDescription: "As External Vice President of the Aggie Data Science Club, I spearhead strategic partnerships with industry professionals and coordinate comprehensive external engagement initiatives. My role involves organizing cutting-edge workshops, securing high-profile guest speakers, and facilitating networking opportunities that directly connect our 200+ club members with data science professionals and career advancement opportunities. I work closely with tech companies, startups, and established corporations to create meaningful learning experiences and internship pathways for students pursuing careers in data science, machine learning, and analytics.",
      technologies: ["Python", "R", "Tableau", "Power BI", "SQL", "Git", "Jupyter", "Pandas", "Scikit-learn"],
      achievements: [
        "Established partnerships with 8+ major tech companies including Google, Microsoft, and Meta for exclusive student opportunities",
        "Organized 15+ industry workshops and guest speaker events with 500+ total attendees across academic year",
        "Coordinated comprehensive mentorship program pairing 30+ students with industry data science professionals",
        "Increased club membership by 40% through strategic outreach initiatives and enhanced programming quality"
      ],
      category: "Academia"
    },
    {
      id: "3",
      role: "Undergraduate Machine Learning Researcher", 
      company: "Texas A&M University - Department of Construction Science",
      period: "Jan 2024 - May 2025",
      location: "College Station, Texas",
      description: "Revolutionized construction project planning.",
      fullDescription: "Our goal was to help the Texas Department of Transportation identify delays and possible roadblocks in various construction tasks ahead of time through the use of Natural Language Processsing and Predictive Modelling. We created an autoencoder model to detect inaccuracies after an initial K-Nearest Neighbors model which was improved upon. Lastly, we abstracted the model into an intuitive user interface to serve as an aide for engineers.",
      technologies: ["Python", "SMOTE", "Pytorch", "Scikit-learn", "Pandas", "Numpy", "Seaborn"],
      achievements: [
        "Designed machine learning models to detect inaccuracies in engineers’ construction cost estimates for infrastructure projects",
        "Developed KNN+SMOTE and autoencoder models, improving MAE from 74% to 80%, and abstracted into a web app to serve as an aid for field engineers in collaboration with the Texas Department of Transportation (TxDOT)",
        "Collaborated with TxDOT for end-user testing with the potential of saving 1.47 million dollars with full adoption"
      ],
      category: "Academia"
    },
    {
      id: "4",
      role: "Data Engineer Intern", 
      company: "Charles Schwab",
      period: "Jun 2024 - Aug 2024",
      location: "Southlake, Texas",
      description: "Worked in the Cloud Data Warehouse (CDW) team within Schwab Technology Services (STS)",
      fullDescription: "",
      technologies: ["Python", "SQL", "Google Cloud Platform", "BigQuery", "Informatica", "Tableau"],
      achievements: [
        "Automated internal dashboards monitored by leadership to monitor 34 real-time KPIs in Schwab Technology Services (STS)",
        "Utilized Google Cloud (BigQuery, Cloud Functions) and Informatica to build robust data pipelines for daily operations and designed SQL transformations and created standardized tables for downstream analytics and reporting teams",
        "Won Schwab’s intern-wide product & business hackathon developing a mobile app concept to revolutionize personal finance"
      ],
      category: "Professional"
    },
    {
      id: "5",
      role: "Data Engineer Intern", 
      company: "Fidelity Investments",
      period: "Jun 2023 - Aug 2023",
      location: "Westlake, Texas",
      description: "Worked in the Cyber Data and Analytics (CDA) Team within Enterprise Technology ",
      fullDescription: "",
      technologies: ["Python", "Boto3", "Apache NiFi", "DBT", "AWS S3", "Jenkins", "AWS CloudFormation", "AWS RDS"],
      achievements: [
        "Modernized ingestion pipelines for the Cyber Data and Analytics team by implementing a cloud-native data pipeline",
        "Utilized AWS, Boto3, and Jenkins to provision S3 buckets and enforce security policies via CloudFormation templates",
        "Integrated Apache NiFi to automate source-to-S3 data transfer, reducing manual overhead and increasing throughput",
        "Built DBT models and Python scripts to transform staged data in RDS to be compatible for 7 downstream teams"
      ],
      category: "Professional"
    },
    {
      id: "6",
      role: "Teaching Assistant",
      company: "Texas A&M University - Department of Computer Science",
      period: "January 2024 - May 2024",
      location: "College Station, Texas",
      description: "Supported undergraduate learning in programming fundamentals and basic data structures in C++",
      fullDescription: "As a Teaching Assistant in the Department of Computer Science at Texas A&M University, I provided support for CSCE 120 focusing on programming fundamentals and basic data structures. This experience taught me the importance of understaning the basics and helped me to become a better teacher and communicator, important skills that I applied in my future endeavors. One experience that really stuck with me was when I explained pointers to a student who was having trouble understanding passing a value by reference versus its value. Drawing a picture showing the representation of a value and running small experiments on the code editor helped the student understand.",
      technologies: ["C++"],
      achievements: [
        "Held weekly lab sessions for 30+ students, enhancing understanding of C++ programming concepts",
        "Graded lab assignments, quizzes, and exams working in a team of around 10 TAs to support around 400 students",
        "Conducted office hours to provide additional support and clarification on course material",
      ],
      category: "Academia"
    }
  ];