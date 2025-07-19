'use client'

import Image from 'next/image';

const projects = [
  {
    title: 'Wedera',
    description: 'A polished digital wedding invitation platform featuring customizable themes for diverse Indonesian cultures, full RSVP and gallery support, countdown timers, music, map integration.',
    image: '/assets/thumbnail-wedera.png',
    tags: ['Next.js', 'React', 'Wordpress', 'TailwindCSS'],
    link: 'https://www.wedera.id/',
    year: '2025'
  },
  {
    title: 'Gatorz XRPL',
    description: 'GATORZXRPL.com is the official platform for the GATORZ NFT collection on the XRP Ledger. The site features a custom NFT explorer, project story, artist showcase, and an interactive avatar builder called GATOOLZ — all designed to highlight local creativity and blockchain technology.',
    image: '/assets/thumbnail-gatorz.png',
    tags: ['NextJS', 'React', 'TailwindCSS'],
    link: 'https://www.gatorzxrpl.com/',
    year: '2025'
  },
];

export default function Projects() {

  return (
    <section className="section py-10 lg:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Explore my latest work showcasing innovative solutions, modern technologies, and creative problem-solving approaches
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              className="group relative"
              key={project.title}
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-[4px_4px_0_rgba(0,0,0,1)] transition-all border-2 border-primary h-full flex flex-col p-2 lg:p-4">

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl border-2 border-primary aspect-video">
                  <Image
                    alt={project.title}
                    className=" w-full transition-transform duration-700 "
                    fill
                    src={project.image}
                  />
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 bg-white flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-primary">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary/80 text-base lg:text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-colors duration-200"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <button
                      className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                      type="button"
                    >
                      View Project
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Project Index */}
                    <span className="text-4xl font-bold text-secondary/20 group-hover:text-secondary/30 transition-colors duration-300">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}