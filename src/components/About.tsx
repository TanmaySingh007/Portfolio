import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelor of Technology - Computer Science & Engineering",
      grade: "8.54/10 CGPA",
      year: "June 2025",
      location: "Vellore, Tamil Nadu"
    },
    {
      institution: "Dr. Virendra Swarup Education Centre",
      degree: "Class XII - ISC Board",
      grade: "84.6%",
      year: "May 2020",
      location: "Kanpur, Uttar Pradesh"
    },
    {
      institution: "Dr. Virendra Swarup Education Centre",
      degree: "Class X - ICSE Board",
      grade: "90.7%",
      year: "May 2018",
      location: "Kanpur, Uttar Pradesh"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A passionate Computer Science student with a strong foundation in full-stack development, 
            data analytics, and problem-solving. I love creating innovative solutions that make a real impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-yellow-300" size={20} />
                  <span className="text-white/90">Kanpur, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-pink-300" size={20} />
                  <span className="text-white/90">LeetCode Rank: 8,45,386 | GeeksforGeeks: 837 (College Level)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-green-300" size={20} />
                  <span className="text-white/90">HackerRank 5⭐ in C++</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Hindi', 'German'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full text-sm text-white/90 border border-white/20">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="text-lg font-semibold text-white mb-3">Interests</h4>
                <p className="text-white/80 text-sm">
                  Football, Cricket (Regional Level), Badminton, Taekwondo, Gaming, 
                  Traveling, Trekking, Gym, Reading (Mythology & Sci-Fi)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">{edu.institution}</h4>
                  <span className="text-yellow-300 text-sm font-medium">{edu.year}</span>
                </div>
                <p className="text-white/90 mb-2">{edu.degree}</p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-300 font-semibold">{edu.grade}</span>
                  <span className="text-white/70 text-sm">{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-500/10 via-pink-500/10 to-yellow-500/10 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">8.54</div>
                <div className="text-white/80">CGPA at VIT</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300 mb-2">5⭐</div>
                <div className="text-white/80">HackerRank C++</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">2023</div>
                <div className="text-white/80">Hacktoberfest</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;