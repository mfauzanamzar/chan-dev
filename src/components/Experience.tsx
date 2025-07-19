'use client'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Logique Digital Indonesia',
    role: 'Frontend Developer',
    period: 'Jan 2023 - Present',
    description: [
      'Built and maintained highly responsive, fast-loading web interfaces using React.js and Next.js as primary frameworks.',
      'Collaborated closely with QA, backend, product, and design teams to deliver features from concept to deployment.',
      'Ensured clean code practices and continuously optimized for performance and user experience.',
      'Contributed to projects using a variety of frontend stacks.',
      'Adapted across different frontend architectures, with strong attention to detail and maintainability.'
    ],
  },
  {
    company: 'Logique Digital Indonesia',
    role: 'Intern Frontend Developer',
    period: 'Jul 2022 - Jan 2023',
    description: [
      'Assisted in the development of responsive web applications for products and projects.',
      'Collaborated in team meetings to brainstorm and refine project ideas.',
      'Learned to apply best practices in coding and design.'
    ],
  },
  {
    company: 'BMKA Salman ITB',
    role: 'Volunteer Frontend Developer',
    period: 'Aug 2021 - Jan 2022',
    description: [
      'Implemented frontend features using React.js, ensuring seamless integration with Zustand for state management.',
      'Developed and utilized reusable components and utility helpers to maintain code consistency and scalability.',
      'Applied global CSS variables and followed best practices to match the UI layout precisely and ensure high responsiveness across devices.'
    ],
  }
];

export default function Experience() {
  return (
    <section className="pt-10 lg:pt-24" id="experience">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-4">EXPERIENCE</h2>
          <p className="text-secondary max-w-xl mx-auto">
            I've worked with a variety of companies and projects, from startups to large enterprises.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-8 lg:mt-12">
          {experiences.map((exp, index) => (
            <div
              className="experience-card bg-white rounded-lg border-2 shadow-[4px_4px_0_rgba(0,0,0,1)] shad border-primary p-6 mb-8"
              key={index}
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