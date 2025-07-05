'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: '/projects/taskmanager.jpg',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing creative work and projects.',
    image: '/projects/portfolio.jpg',
    tags: ['React', 'Framer Motion', 'GSAP'],
    link: '#'
  }
];

export default function Projects() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-background text-primary border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-block text-primary font-medium hover:text-secondary transition-colors"
                >
                  View Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 