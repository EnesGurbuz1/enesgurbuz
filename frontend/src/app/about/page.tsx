'use client';

import { motion } from 'framer-motion';
import { User, Code, Briefcase, GraduationCap, Heart } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="pt-20 px-8 md:px-12 lg:px-16 max-w-6xl mx-auto">
        {/* Decorative elements */}
        <motion.div 
          className="fixed top-24 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="fixed bottom-10 -right-20 w-72 h-72 bg-violet-500 rounded-full opacity-10 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <User className="w-16 h-16 text-white" />
            {/* You can replace the User icon with an actual image:
            <Image src="/profile.jpg" alt="Enes Gürbüz" width={128} height={128} className="object-cover" />
            */}
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Enes Gürbüz</h1>
          <p className="text-xl text-gray-400">Software Developer & Designer</p>
        </motion.div>
        
        {/* About Me */}
        <motion.section 
          className="mb-16 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-800 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <User className="w-6 h-6 text-indigo-400 mr-3" />
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a passionate software developer and designer with expertise in creating 
            modern web applications. With a keen eye for detail and a love for clean, 
            efficient code, I strive to build intuitive and engaging user experiences.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My journey in software development began at university where I studied Computer Science,
            and since then I've been continually expanding my skills and embracing new technologies.
            I believe in the power of technology to solve real-world problems and enhance people's lives.
          </p>
        </motion.section>
        
        {/* Skills */}
        <motion.section 
          className="mb-16 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Code className="w-6 h-6 text-indigo-400 mr-3" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCategory title="Frontend Development" skills={["React", "Next.js", "HTML/CSS", "Tailwind CSS", "JavaScript", "TypeScript"]} />
            <SkillCategory title="Backend Development" skills={["Node.js", "Express", "MongoDB", "SQL", "RESTful APIs", "GraphQL"]} />
            <SkillCategory title="Tools & Technologies" skills={["Git", "Docker", "AWS", "Figma", "VS Code", "Agile/Scrum"]} />
            <SkillCategory title="Soft Skills" skills={["Problem Solving", "Communication", "Team Collaboration", "Time Management", "Adaptability"]} />
          </div>
        </motion.section>
        
        {/* Experience */}
        <motion.section 
          className="mb-16 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Briefcase className="w-6 h-6 text-indigo-400 mr-3" />
            Experience
          </h2>
          <div className="space-y-8">
            <TimelineItem 
              year="2022 - Present"
              title="Senior Frontend Developer"
              company="Tech Innovations Inc."
              description="Leading frontend development for various client projects, implementing modern React applications with Next.js and TypeScript."
            />
            <TimelineItem 
              year="2020 - 2022"
              title="Web Developer"
              company="Digital Solutions Agency"
              description="Developed responsive websites and web applications using React, Node.js, and various backend technologies."
            />
            <TimelineItem 
              year="2018 - 2020"
              title="Junior Developer"
              company="StartUp Technologies"
              description="Started as a junior developer, working primarily on frontend tasks and gradually expanding to full-stack development."
            />
          </div>
        </motion.section>
        
        {/* Education */}
        <motion.section 
          className="mb-16 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 text-indigo-400 mr-3" />
            Education
          </h2>
          <div className="space-y-8">
            <TimelineItem 
              year="2014 - 2018"
              title="Bachelor of Science in Computer Science"
              company="University of Technology"
              description="Graduated with honors. Specialized in web development and software engineering."
            />
            <TimelineItem 
              year="2020 - 2021"
              title="Full-Stack Web Development Certification"
              company="Tech Academy"
              description="Intensive program covering modern web development technologies and best practices."
            />
          </div>
        </motion.section>
        
        {/* Personal Interests */}
        <motion.section 
          className="mb-16 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Heart className="w-6 h-6 text-indigo-400 mr-3" />
            Personal Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
              <p className="text-gray-300">When I'm not coding, I enjoy hiking and exploring nature. I find that disconnecting from technology occasionally helps me come back with fresh ideas and perspectives.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
              <p className="text-gray-300">I'm also passionate about photography and capturing moments. This hobby has taught me to pay attention to details, which translates well into my development work.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
              <p className="text-gray-300">Reading tech blogs and books keeps me updated with the latest trends and technologies in the industry. I'm always eager to learn something new.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
              <p className="text-gray-300">Contributing to open-source projects is something I enjoy doing in my free time. It's a great way to give back to the community and improve my skills.</p>
            </div>
          </div>
        </motion.section>
      </div>

    </div>
  );
}

// Helper Components
function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
      <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index}
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ year, title, company, description }: { year: string; title: string; company: string; description: string }) {
  return (
    <motion.div 
      className="relative pl-8 border-l-2 border-indigo-500 pb-2"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
      <p className="text-indigo-400 font-medium">{year}</p>
      <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
      <p className="text-gray-400">{company}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
}