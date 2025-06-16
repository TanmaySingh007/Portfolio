import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Backend Developer",
      company: "Pearl Thoughts",
      duration: "2024",
      location: "Remote",
      description: [
        "Built and tested APIs using TypeScript, NestJS, and PostgreSQL",
        "Set up JWT for user authentication and used Twilio for messaging services",
        "Wrote comprehensive unit and integration tests with Jest and Supertest",
        "Deployed applications on Vercel and AWS Elastic Beanstalk with CI/CD"
      ],
      verification: "https://drive.google.com/file/d/1CVDLsOe4yE7PFTxzLoCbnKSfBj2KECjQ/view",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Front-end Developer",
      company: "Sukham Resort",
      duration: "June 2023 – August 2023",
      location: "Remote",
      description: [
        "Fixed bugs, added new pages, and created reusable components for sukhamresort.in",
        "Redesigned homepage and internal pages improving user engagement by 25%",
        "Increased page load speed by 60% through optimized coding practices",
        "Developed responsive design components for better mobile experience"
      ],
      verification: "https://drive.google.com/file/d/1KkuBk-yb1hUmoZrx4YY3S7uc2zjfHrHy/view",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Freelancer",
      company: "Outlier.ai",
      duration: "November 2024 - Present",
      location: "Remote",
      description: [
        "Language Translator & Reviewer: Translated and reviewed content across diverse languages",
        "LLM Model Trainer & Prompt Evaluator: Trained large language models",
        "Evaluated prompts to optimize AI model performance",
        "Contributed to improving AI model accuracy and reliability"
      ],
      verification: "",
      gradient: "from-green-400 to-cyan-500"
    },
    {
      title: "Data Analyst Training",
      company: "Self-Learning",
      duration: "October 2024 - November 2024",
      location: "Remote",
      description: [
        "Designed and developed Twitter analytics dashboard using Power BI",
        "Visualized key metrics and insights for social media performance",
        "Learned advanced data visualization techniques",
        "Gained expertise in business intelligence tools"
      ],
      verification: "https://drive.google.com/file/d/1SQE7A1FBFT9CM5PgWB7wBv6LnqghQ-DU/view",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            My journey through various roles, contributing to innovative projects and 
            gaining valuable experience in full-stack development and data analytics.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black hidden md:block" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} mr-4`}>
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-cyan-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-white/60">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-white/70 text-sm flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {exp.verification && (
                      <motion.a
                        href={exp.verification}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Verification Link</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;