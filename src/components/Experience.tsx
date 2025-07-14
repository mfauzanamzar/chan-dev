'use client'

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.experience-card');
    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section || !title) return;

    // Title pin animation
    const titlePin = ScrollTrigger.create({
      trigger: title,
      start: 'top top+=20',
      endTrigger: section,
      end: 'bottom center',
      pin: true,
      pinSpacing: false
    });

    // Clean up function to store all ScrollTriggers
    const cleanupTriggers: ScrollTrigger[] = [titlePin];

    cards.forEach((card, index) => {
      // Scale animation
      const scaleTween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => 'top bottom-=100',
          end: () => 'top top-=100',
          scrub: true,
          invalidateOnRefresh: true
        },
        ease: 'none',
        scale: () => 1 - (cards.length - index) * 0.025
      });

      // Pin animation with spacing
      const pinTrigger = ScrollTrigger.create({
        trigger: card,
        start: `top top+=${120 + (60 * index)}`,
        endTrigger: section,
        end: 'bottom top-=100', // Extend pin duration
        pin: true,
        pinSpacing: false,
        id: `pin-${index}`,
        invalidateOnRefresh: true,
        markers: true,
      });

      // Add spacing animation
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top+=${120}`,
          end: 'bottom top-=100', // Match pin end point
          scrub: true,
          invalidateOnRefresh: true
        },
        y: 60 * index,
        ease: 'none'
      });

      cleanupTriggers.push(scaleTween.scrollTrigger!, pinTrigger);
    });

    return () => {
      cleanupTriggers.forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-24" id="experience" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center" ref={titleRef}>
          <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-4">Experience</h2>
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
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                <span className="text-secondary font-medium">{exp.period}</span>
              </div>
              <h4 className="text-lg font-medium mb-2 text-primary">{exp.role}</h4>
              <p className="text-secondary">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}