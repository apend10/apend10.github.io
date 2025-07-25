export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
}

export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Building Modern Web Applications",
      excerpt: "A deep dive into creating scalable and maintainable web applications using React and Node.js...",
      date: "March 15, 2024",
      readTime: "5 min read",
      tags: ["React", "Node.js", "Web Development"],
      author: "Abhiram Pendela",
      content: `
# Building Modern Web Applications

In today's fast-paced development environment, creating scalable and maintainable web applications is crucial for long-term success. This post explores the key principles and technologies that make modern web development effective.

## The Foundation: React and Node.js

React has revolutionized front-end development with its component-based architecture. When paired with Node.js on the backend, we get a full JavaScript stack that enables rapid development and deployment.

### Key Benefits:
- **Component Reusability**: Build once, use everywhere
- **Virtual DOM**: Efficient rendering and performance
- **Rich Ecosystem**: Extensive library support
- **Full-Stack JavaScript**: Unified development experience

## Best Practices for Scalability

1. **Component Architecture**: Design components to be modular and reusable
2. **State Management**: Use tools like Redux or Context API for complex state
3. **Code Splitting**: Implement lazy loading for better performance
4. **Testing**: Write comprehensive unit and integration tests

## Performance Optimization

Performance is critical for user experience and SEO. Here are key strategies:

- Implement code splitting and lazy loading
- Optimize bundle sizes with webpack
- Use CDNs for static assets
- Implement proper caching strategies

## Conclusion

Building modern web applications requires careful consideration of architecture, performance, and maintainability. By following these principles and leveraging the right tools, developers can create applications that scale with their users' needs.
      `
    },
    {
      id: "2",
      title: "The Future of Cloud Computing",
      excerpt: "Exploring emerging trends in cloud technology and how they're shaping the development landscape...",
      date: "March 8, 2024", 
      readTime: "7 min read",
      tags: ["Cloud", "AWS", "Technology"],
      author: "Abhiram Pendela",
      content: `
# The Future of Cloud Computing

Cloud computing has transformed how we build, deploy, and scale applications. As we look toward the future, several emerging trends are reshaping the landscape.

## Serverless Architecture

Serverless computing allows developers to focus on code without managing infrastructure. AWS Lambda, Azure Functions, and Google Cloud Functions are leading this revolution.

### Benefits of Serverless:
- **Cost Efficiency**: Pay only for what you use
- **Auto-scaling**: Automatic resource management
- **Reduced Complexity**: No server management
- **Faster Time to Market**: Focus on business logic

## Edge Computing

With the rise of IoT and real-time applications, edge computing brings processing closer to users, reducing latency and improving performance.

## Container Orchestration

Kubernetes has become the standard for container orchestration, enabling:
- Automated deployment and scaling
- Service discovery and load balancing
- Self-healing capabilities
- Rolling updates and rollbacks

## Multi-Cloud Strategy

Organizations are adopting multi-cloud approaches to avoid vendor lock-in and optimize costs across different providers.

## Conclusion

The future of cloud computing is bright, with innovations in serverless, edge computing, and container orchestration driving the next wave of digital transformation.
      `
    },
    {
      id: "3",
      title: "Learning Python for Beginners",
      excerpt: "A comprehensive guide to getting started with Python programming, from basics to advanced concepts...",
      date: "February 28, 2024",
      readTime: "10 min read",
      tags: ["Python", "Programming", "Tutorial"],
      author: "Abhiram Pendela",
      content: `
# Learning Python for Beginners

Python is one of the most popular programming languages today, known for its simplicity and versatility. This guide will help you get started on your Python journey.

## Why Python?

Python's popularity stems from several key factors:

- **Readable Syntax**: Code that's easy to understand
- **Versatile**: Web development, data science, AI, automation
- **Large Community**: Extensive support and resources
- **Rich Libraries**: Thousands of packages available

## Setting Up Your Environment

Before you start coding, you'll need to set up your development environment:

1. Install Python from python.org
2. Choose an IDE (VS Code, PyCharm, or Jupyter)
3. Learn pip for package management
4. Set up virtual environments

## Basic Concepts

### Variables and Data Types
\`\`\`python
# Numbers
age = 25
height = 5.9

# Strings
name = "Abhiram"
message = "Hello, World!"

# Lists
skills = ["Python", "JavaScript", "React"]

# Dictionaries
person = {
    "name": "Abhiram",
    "age": 25,
    "location": "Texas"
}
\`\`\`

### Control Structures
\`\`\`python
# If statements
if age >= 18:
    print("You are an adult")

# Loops
for skill in skills:
    print(f"I know {skill}")

# Functions
def greet(name):
    return f"Hello, {name}!"
\`\`\`

## Next Steps

Once you've mastered the basics:
1. Learn about classes and objects
2. Explore popular libraries (requests, pandas, numpy)
3. Build projects to practice
4. Join the Python community

## Conclusion

Python is an excellent first programming language. With dedication and practice, you'll be building amazing applications in no time!
      `
    },
    {
      id: "4",
      title: "Database Design Best Practices",
      excerpt: "Key principles and patterns for designing efficient and scalable database schemas...",
      date: "February 20, 2024",
      readTime: "6 min read", 
      tags: ["Database", "SQL", "Design"],
      author: "Abhiram Pendela",
      content: `
# Database Design Best Practices

Good database design is the foundation of any successful application. Poor design can lead to performance issues, data inconsistencies, and maintenance nightmares.

## Fundamental Principles

### 1. Normalization
Organize data to reduce redundancy and improve data integrity:

- **First Normal Form (1NF)**: Eliminate repeating groups
- **Second Normal Form (2NF)**: Remove partial dependencies
- **Third Normal Form (3NF)**: Remove transitive dependencies

### 2. Entity Relationship Design
- Identify entities and their relationships
- Define primary and foreign keys
- Use appropriate relationship types (one-to-one, one-to-many, many-to-many)

## Performance Considerations

### Indexing Strategy
\`\`\`sql
-- Create indexes on frequently queried columns
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_order_date ON orders(order_date);

-- Composite indexes for multi-column queries
CREATE INDEX idx_user_status_date ON users(status, created_date);
\`\`\`

### Query Optimization
- Use EXPLAIN to analyze query performance
- Avoid SELECT * in production queries
- Use appropriate JOIN types
- Consider query caching strategies

## Data Types and Constraints

Choose appropriate data types:
- Use specific types (INT vs BIGINT)
- Set proper string lengths
- Use ENUM for fixed value sets
- Implement check constraints

\`\`\`sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    status ENUM('active', 'inactive', 'pending') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_email CHECK (email LIKE '%@%')
);
\`\`\`

## Security Best Practices

1. **Input Validation**: Always validate and sanitize inputs
2. **Parameterized Queries**: Prevent SQL injection
3. **Least Privilege**: Grant minimal necessary permissions
4. **Encryption**: Encrypt sensitive data at rest and in transit

## Conclusion

Good database design requires careful planning and understanding of your data relationships. Following these best practices will help you build robust, scalable, and maintainable database systems.
      `
    }
  ];