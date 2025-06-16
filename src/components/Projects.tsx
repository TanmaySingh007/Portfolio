import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, Database, Bot, Home, FileText } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-commerce Sales Chatbot",
      description: "Built a working e-commerce chatbot using Python with Flask for the backend and JavaScript, HTML, and CSS for the frontend. Created a sample product database where users can look up products, filter results, and place orders.",
      tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "SQLite", "Jinja2"],
      github: "https://github.com/TanmaySingh007/ECommerce-Sales-Chatbot",
      live: "https://e-commerce-sales-chatbot-i0yd4isx9.vercel.app/",
      icon: Bot,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Housing Insights for Ukrainian Refugees",
      description: "Planned a data analysis project for Ukrainian refugees in Poland using scraped data from 2+ real estate websites via Bright Data, loading it into Snowflake for cleaning and analysis.",
      tech: ["SQL", "Python", "Snowflake", "AI-driven insights"],
      github: "https://github.com/TanmaySingh007/Housing-insights-for-ukraine-refugees",
      live: "",
      icon: Home,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Resilient Email Service",
      description: "Created a dependable email delivery service using TypeScript that works with different providers like SendGrid and Mailgun. Added backup processes and retry options for reliability.",
      tech: ["TypeScript", "JavaScript", "Node.js", "Express.js", "Nodemailer", "Mailgun"],
      github: "https://github.com/TanmaySingh007/-resilient-email-service",
      live: "https://resilient-email-service-one.vercel.app/",
      icon: Zap,
      gradient: "from-green-400 to-cyan-500"
    },
    {
      title: "Neo-Compliance Pro",
      description: "Created a web app for managing ads compliance that works well on different devices. Used React 18, TypeScript, Vite, and TailwindCSS with state management using React Query.",
      tech: ["React18", "TypeScript", "Vite", "TailwindCSS", "ShadCN UI"],
      github: "https://github.com/TanmaySingh007/NeoCompliance-Pro",
      live: "https://neocompliance-pro.netlify.app/",
      icon: Database,
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "OCR-JSON Parser",
      description: "Made a web app with Next.js and TypeScript that can grab text from images and convert it into structured JSON. Used Tesseract.js for optical character recognition.",
      tech: ["Next.js", "TypeScript", "Tesseract.js", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/TanmaySingh007/OCR-JSON-PARSER",
      live: "https://ocr-json-parser007.netlify.app/",
      icon: FileText,
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of my technical expertise through real-world applications, 
            from AI-powered chatbots to data analytics platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} mr-4`}>
                  <project.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-white/80 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  <span className="text-white/80">Code</span>
                </motion.a>
                
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;