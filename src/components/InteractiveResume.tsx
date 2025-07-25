import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

//Import interfaces and data from src/data folder
import { experiences } from '@/data/experiences';
import { Experience } from '@/data/experiences';
import { blogPosts } from '@/data/blogs';
import { BlogPost } from '@/data/blogs';
import { education } from '@/data/education';
import { Education } from '@/data/education';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Globe, 
  Terminal,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Calendar,
  User,
  Briefcase,
  GraduationCap,
  BookOpen,
  X,
  Clock,
  Building,
  ChevronDown,
  ChevronUp,
  Sun,
  Moon,
  PartyPopper
} from "lucide-react";

//asset imports
import arsenal_background from "@/assets/arsenal_wide_background.png";
import london_background from "@/assets/london_wide_background.jpg";
import tamu_background from "@/assets/tamu_wide_background.png";

import simpleAvatar from "@/assets/simple-avatar.jpg";
import adsc_logo from "@/assets/adsc_logo.png";
import tamu_cse_logo from "@/assets/tamu_cse_logo.png";
import tamu_ce_logo from "@/assets/tamu_constsci_logo.png";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const InteractiveResume = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<'All' | 'SWE' | 'ML' | 'Data Engineering'>('All');
  const [selectedExperienceCategory, setSelectedExperienceCategory] = useState<'All' | 'Professional' | 'Academia'>('All');
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Handle hydration issue with next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories = {
    SWE: {
      name: "Software Engineering",
      skills: ["C++", "Java", "Javascript", "HTML", "CSS", "Git", "Docker", "R", "Jenkins", "Postman", "Rest APIs", "Flask", "Google OAuth"],
      variant: "swe" as const
    },
    ML: {
      name: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Regression", "Classification", "Pandas", "NumPy", "SMOTE", "Seaborn", "Matplotlib", "LLM Finetuning", "Natural Language Processing (NLP)", "Retrieval Augmented Generation (RAG)"],
      variant: "ml" as const
    },
    "Data Engineering": {
      name: "Data Engineering", 
      skills: ["Apache Spark", "Apache NiFi", "DBT", "Airflow", "BigQuery", "Snowflake", "ETL", "Data Warehousing", "AWS SNS", "AWS SQS", "AWS Glue", "AWS Lambda", "AWS Route 53", "AWS Cloud Formation Templates", "AWS RDS", "AWS Boto3", "GCP Big Query", "GCP Cloud Functions", "GCP Cloud Storage", "Informatica"],
      variant: "data" as const
    },
    All: {
      name: "All",
      skills: ["Python", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Microsoft Azure", "SQL"],
      variant: "all" as const
    }
  };

  const getFilteredSkills = () => {
    if (selectedSkillCategory === 'All') {
      return Object.entries(skillCategories).flatMap(([category, data]) => 
        data.skills.map(skill => ({ skill, category, variant: data.variant }))
      );
    }
    
    const categoryData = skillCategories[selectedSkillCategory];
    const allData = skillCategories['All']
    return [
      ...categoryData.skills.map(skill => ({ 
      skill, 
      category: selectedSkillCategory, 
      variant: categoryData.variant 
    })),
    ...allData.skills.map(skill => ({
      skill, 
      category: 'All',
      variant: allData.variant
    }))
  ];
  };

  const getFilteredExperiences = () => {
    if (selectedExperienceCategory === 'All') {
      return experiences;
    }
    return experiences.filter(exp => exp.category === selectedExperienceCategory);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Background Images */}
      <div 
        className="bg-gradient-soft dark:bg-gradient-soft bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: theme === 'arsenal' ? arsenal_background : 
                          theme === 'dark' ? london_background : 
                          tamu_background
        }}
      >
        {/* Improved text visibility overlay */}
        <div className={`py-16 ${theme === 'arsenal' ? 'bg-black/40' : theme === 'dark' ? 'bg-black/50' : 'bg-black/20'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center space-y-6 animate-fade-in">
              <img
                src={simpleAvatar}
                alt="Abhiram Pendela"
                className="w-32 h-32 rounded-full mx-auto shadow-soft border-4 border-white"
              />
              <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 mx-auto max-w-md">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">Abhiram Pendela</h1>
                <p className="text-lg mt-2 text-white/90 drop-shadow-md">Software Engineer, Data Enthusiast, Soccer Fan</p>
                <div className="flex items-center justify-center gap-1 mt-3 text-sm text-white/80 drop-shadow-md">
                  <MapPin className="h-4 w-4" />
                  <span>Frisco, Texas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Contact */}
        <Card className="p-6 shadow-card border-2 border-accent/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>apendela10@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>248-764-0989</span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              {mounted && (
                <div className="flex gap-1 p-1 bg-muted rounded-lg">
                  <Button
                    variant={theme === "light" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("light")}
                    className="p-2"
                  >
                    <Sun className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={theme === "arsenal" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("arsenal")}
                    className="p-2"
                  >
                    <PartyPopper className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("dark")}
                    className="p-2"
                  >
                    <Moon className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://github.com/apend10", "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://www.linkedin.com/in/apendela/", "_blank")}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </Card>

        {/* Quote */}
        <Card className={`p-8 text-center border-2 border-accent/50 ${theme === 'dark' ? 'bg-card' : theme === 'arsenal' ? 'bg-gradient-soft' : 'bg-gradient-warm'} ${theme === 'dark' ? '' : 'shadow-card'}`}>
          <blockquote className="text-lg italic text-foreground/90">
            "Remember who you are, what you are, and who you represent"
          </blockquote>
          <cite className="text-muted-foreground font-medium mt-2 block">- David Rocastle</cite>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <Card className="p-6 shadow-card border-2 border-accent/50">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Code className="h-5 w-5" />
              Skills
            </h2>
            
            {/* Skill Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(['All', 'SWE', 'ML', 'Data Engineering'] as const).map(category => (
                <Button
                  key={category}
                  variant={selectedSkillCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSkillCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {getFilteredSkills().map(({ skill, variant }) => (
                <Badge 
                  key={skill}
                  variant={variant}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card className="p-6 shadow-card border-2 border-accent/50">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="space-y-1 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors group"
                  onClick={() => setSelectedEducation(edu)}
                >
                  <div className="flex items-center justify-center">
                    <div className="flex-1">
                      <h3 className="font-semibold hover:text-primary transition-colors">{edu.degree}</h3>
                      <p className="text-primary font-medium text-sm">{edu.school}</p>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                      <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div> */}

        {/* Experience */}
        <Card className="p-8 shadow-card border-2 border-accent/50">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Experiences
          </h2>
          
          {/* Experience Category Filter */}
          <div className="mb-6 flex gap-2 justify-center">
            {(['All', 'Professional', 'Academia'] as const).map((category) => (
              <Button
                key={category}
                variant={selectedExperienceCategory === category ? "default" : "outline"}
                onClick={() => setSelectedExperienceCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="space-y-6">
            {getFilteredExperiences().map((exp) => {
              const isExpanded = expandedExperience === exp.id;
              const companyLogos: Record<string, string> = {
                "Capital One": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSau0cpWWQBUME4-_nijhVTZFOPos0nF5_SrQ&s",
                "Texas A&M University - Department of Construction Science":  tamu_ce_logo,
                "Charles Schwab": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMg6GHgKmh3XEpwE_YfZstMo5Il4c7W71haw&s",
                "Fidelity Investments": "https://logos-world.net/wp-content/uploads/2021/02/Fidelity-Logo.png",
                "Aggie Data Science Club": adsc_logo,
                "Texas A&M University - Department of Computer Science": tamu_cse_logo
              };

              const expandedImages: Record<string, string> = {
                "Capital One": "/src/assets/capitaloneoffice.jpg",
                "Texas A&M University - Department of Construction Science": "/src/assets/research.jpeg",
                "Charles Schwab": "/src/assets/charlesschwaboffice.jpeg",
                "Fidelity Investments": "/src/assets/fidelityoffice.jpeg",
                "Aggie Data Science Club": "/src/assets/adsc.jpeg",
                "Texas A&M University- Department of Computer Science": "/src/assets/ta.jpeg"
              };

              return (
                 <Card 
                   key={exp.id} 
                   className="shadow-soft border-2 border-accent/50 hover:border-accent hover:shadow-card transition-all"
                 >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedExperience(isExpanded ? null : exp.id)}
                  >
                    <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-20 h-20 bg-card border-2 border-muted rounded-lg flex items-center justify-center p-2">
                           {companyLogos[exp.company] ? (
                             <img 
                               src={companyLogos[exp.company]} 
                               alt={`${exp.company} logo`}
                               className="w-full h-full object-contain rounded"
                             />
                           ) : (
                             <Building className="h-8 w-8 text-muted-foreground" />
                           )}
                         </div>
                       </div>
                       <div className="flex-1 space-y-3">
                         <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2">
                             <div>
                               <div className="flex items-center gap-2">
                                 {exp.category === 'Professional' ? (
                                   <Briefcase className="h-4 w-4 text-muted-foreground" />
                                 ) : (
                                   <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                 )}
                                 <h3 className="font-semibold text-foreground hover:text-primary transition-colors">{exp.role}</h3>
                               </div>
                               <p className="text-primary font-medium text-sm">{exp.company}</p>
                               <p className="text-xs text-muted-foreground">{exp.period}</p>
                             </div>
                           </div>
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="border-t border-border/50 pt-4">
                      <div className="flex gap-6 px-6 pb-6">
                         {/* Left side - Image */}
                         <div className="flex-shrink-0 w-48">
                           <div className="w-full h-32 bg-card border-2 border-muted rounded-lg flex items-center justify-center p-4">
                             {expandedImages[exp.company] ? (
                               <img 
                                 src={expandedImages[exp.company]} 
                                 alt={`${exp.company} office`}
                                 className="w-full h-full object-cover rounded"
                               />
                             ) : (
                               <Building className="h-12 w-12 text-muted-foreground" />
                             )}
                           </div>
                         </div>
                        
                        {/* Vertical divider */}
                        <div className="w-px bg-border"></div>
                        
                        {/* Right side - Content */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Full Description</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{exp.fullDescription}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map(tech => (
                                <Badge key={tech} variant="outline" className="bg-arsenal-blue/20 border-arsenal-blue/30">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Key Achievements</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </Card>

        {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div> */}

        {/* Blog Section */}
        <Card className="p-8 shadow-card border-2 border-accent/50">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="shadow-soft border-2 border-accent/50 hover:border-accent hover:shadow-card transition-all"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedBlogPost(post)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <ChevronDown className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="text-xs bg-pastel-purple/20 border-pastel-purple/30 text-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div> */}

        {/* Projects */}
        <Card className="p-8 shadow-card border-2 border-accent/50">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                id: "1",
                name: "Depolarize", 
                tech: "Hugging Face, Python, Flask",
                description: "AI-powered application to reduce political polarization through neutral content generation.",
                details: "Built using Hugging Face transformers for natural language processing, creating a web application that analyzes political content and suggests more neutral alternatives."
              },
              { 
                id: "2",
                name: "Stathub - A Premier League Prediction Model", 
                tech: "Python, Scikit-learn",
                description: "Machine learning model predicting Premier League match outcomes.",
                details: "Developed predictive models using historical match data, player statistics, and team performance metrics to forecast match results with 75% accuracy."
              },
              { 
                id: "3",
                name: "Panda Express POS System", 
                tech: "React, Python, Flask",
                description: "Full-stack point-of-sale system for restaurant management.",
                details: "Complete POS solution with inventory management, order processing, and sales analytics. Features real-time updates and responsive design."
              },
            ].map((project) => {
              const isExpanded = expandedProject === project.id;
              return (
                 <Card 
                   key={project.id} 
                   className="shadow-soft border-2 border-accent/50 hover:border-accent hover:shadow-card transition-shadow"
                 >
                  <div 
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.tech}</p>
                    <p className="text-xs text-muted-foreground">{project.description}</p>
                  </div>
                  
                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-border/50 pt-3">
                      <p className="text-sm text-muted-foreground mb-3">{project.details}</p>
                    </div>
                  )}
                  
                  <div className="p-4 pt-0">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://www.arsenal.com/", "_blank");
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>

        {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div> */}

        {/* Hackathons */}
        <Card className="p-8 shadow-card border-2 border-accent/50">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Code className="h-6 w-6" />
            Hackathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                id: "4",
                name: "TAMUHack 2025 - Guardian CV", 
                tech: "Computer Vision, Python",
                description: "Computer vision application for safety monitoring.",
                details: "Developed during hackathon to create real-time safety monitoring system using computer vision algorithms for workplace hazard detection."
              },
              { 
                id: "5",
                name: "HackTX 2024", 
                tech: "Python, Flask",
                description: "Hackathon project focusing on data analysis.",
                details: "Built data visualization and analysis platform during 48-hour hackathon, focusing on real-time data processing and interactive dashboards."
              },
              { 
                id: "6",
                name: "TAMUHack 2024", 
                tech: "Next.js, Tailwind CSS",
                description: "Web application developed during university hackathon.",
                details: "Created responsive web application with modern UI/UX design, featuring dynamic content management and user authentication."
              },
              { 
                id: "7",
                name: "TAMUHack 2023", 
                tech: "React, OpenWeather API",
                description: "Weather tracking application with real-time data.",
                details: "Interactive weather dashboard integrating OpenWeather API with location-based forecasting and historical weather pattern analysis."
              },
            ].map((project) => {
              const isExpanded = expandedProject === project.id;
              return (
                 <Card 
                   key={project.id} 
                   className="shadow-soft border-2 border-accent/50 hover:border-accent hover:shadow-card transition-shadow"
                 >
                  <div 
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.tech}</p>
                    <p className="text-xs text-muted-foreground">{project.description}</p>
                  </div>
                  
                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-border/50 pt-3">
                      <p className="text-sm text-muted-foreground mb-3">{project.details}</p>
                    </div>
                  )}
                  
                  <div className="p-4 pt-0">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open("https://www.arsenal.com/", "_blank");
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Experience Detail Modal */}
      <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  <Briefcase className="h-6 w-6" />
                  {selectedExperience.role}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    <span className="font-medium text-primary">{selectedExperience.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedExperience.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedExperience.location}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-muted-foreground">{selectedExperience.fullDescription}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map(tech => (
                      <Badge key={tech} className="bg-pastel-blue text-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Education Detail Modal */}
      <Dialog open={!!selectedEducation} onOpenChange={() => setSelectedEducation(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEducation && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  {selectedEducation.degree}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    <span className="font-medium text-primary">{selectedEducation.school}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedEducation.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedEducation.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <p className="text-lg">GPA: {selectedEducation.gpa}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEducation.coursework.map(course => (
                      <Badge key={course} variant="outline" className="bg-pastel-blue/20 border-pastel-blue/30">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Activities & Leadership</h3>
                  <ul className="space-y-2">
                    {selectedEducation.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Honors & Awards</h3>
                  <ul className="space-y-2">
                    {selectedEducation.honors.map((honor, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{honor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Blog Post Detail Modal */}
      <Dialog open={!!selectedBlogPost} onOpenChange={() => setSelectedBlogPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedBlogPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  {selectedBlogPost.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground border-b pb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{selectedBlogPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedBlogPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedBlogPost.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedBlogPost.tags.map(tag => (
                    <Badge key={tag} className="bg-pastel-purple text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {selectedBlogPost.content}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveResume;