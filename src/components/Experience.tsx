'use client'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Logique Digital Indonesia',
    role: 'Frontend Developer',
    period: 'Jan 2023 - Juli 2025',
    description: [
      'Built and maintained highly responsive, fast-loading web interfaces using React.js and Next.js as primary frameworks.',
      'Collaborated closely with QA, backend, product, and design teams to deliver features from concept to deployment.',
      'Ensured clean code practices and continuously optimized for performance and user experience.',
      'Contributed to projects using a variety of frontend stacks.',
      'Adapted across different frontend architectures, with strong attention to detail and maintainability.'
    ],
  },
  {
    company: 'Digital Innovations',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and implemented modern UI/UX practices.',
  },
  {
    company: 'WebCraft Studio',
    role: 'Junior Developer',
    period: '2019 - 2020',
    description: 'Built and maintained client websites using HTML, CSS, and JavaScript.',
  }
];

export default function Experience() {
  return (
    <section className="pt-24" id="experience">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-4">EXPERIENCE</h2>
          <p className="text-secondary max-w-xl mx-auto">
            I've worked with a variety of companies and projects, from startups to large enterprises.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          {experiences.map((exp) => (
            <div
              className="experience-card bg-white rounded-lg border border-2 border-primary p-6 mb-8"
              key={exp.company}
              style={{
                transformOrigin: '50% 0%',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
                <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                <span className="text-secondary font-medium">{exp.period}</span>
              </div>
              <h4 className="text-lg font-medium mb-2 text-primary">{exp.role}</h4>
              {Array.isArray(exp.description) ? (
                <ul className="text-secondary list-disc list-outside pl-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-secondary">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}