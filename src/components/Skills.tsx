'use client'

import { ScrollVelocity } from "./common/ScrollVelocity";



export default function Skills() {

  return (
    <section className="py-2 bg-background ">
      <ScrollVelocity
        className="gap-8"
        texts={['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Tailwind CSS', 'Git', 'Redux', 'GraphQL', 'MongoDB']}
        velocity={100}
      />
    </section>
  );
}