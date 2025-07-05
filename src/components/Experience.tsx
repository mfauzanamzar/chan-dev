'use client'

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Frontend Developer',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise applications using React and TypeScript.',
    color: '#171717'
  },
  {
    company: 'Digital Innovations',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and implemented modern UI/UX practices.',
    color: '#737373'
  },
  {
    company: 'WebCraft Studio',
    role: 'Junior Developer',
    period: '2019 - 2020',
    description: 'Built and maintained client websites using HTML, CSS, and JavaScript.',
    color: '#171717'
  }
];

export default function Experience() {
  return (
    <section className="section bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Work Experience</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve worked with
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-secondary opacity-20" />
              )}
              
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-2 w-8 h-8 rounded-full border-4 border-background shadow-md"
                style={{ backgroundColor: exp.color }}
              />

              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <span className="text-secondary font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg font-medium mb-2 text-primary">{exp.role}</h4>
                <p className="text-secondary">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 