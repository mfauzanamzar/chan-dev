'use client'

import Image from 'next/image';

const projects = [
  {
    title: 'Wedera',
    description: 'A polished digital wedding invitation platform featuring customizable themes for diverse Indonesian cultures, full RSVP and gallery support, countdown timers, music, map integration, and secure payments.',
    image: '/projects/wedera.jpg',
    tags: ['Next.js', 'React', 'Wordpress', 'TailwindCSS'],
    link: 'https://www.wedera.id/'
  },
  {
    title: 'Gatorz XRPL',
    description: 'A decentralized NFT marketplace on the XRP Ledger offering unique digital collectibles and a fast, gasless experience.',
    image: '/projects/gatorz.jpg', // Replace with actual project image
    tags: ['NextJS', 'React', 'TailwindCSS'],
    link: 'https://www.gatorzxrpl.com/'
  },
];

export default function Projects() {
  return (
    <section className="section ">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              className="group hover:scale-[1.03] transition-transform duration-300"
              key={project.title}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="card shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                    src={project.image}
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      className="px-3 py-1 text-sm rounded-full bg-background text-primary border border-secondary/20"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-secondary hover:text-primary transition-colors duration-200"
                  onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  type="button"
                >
                  View Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}