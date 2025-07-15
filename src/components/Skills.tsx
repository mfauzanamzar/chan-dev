'use client'

import { ScrollVelocity } from "./ui/ScrollVelocity";



export default function Skills() {

  return (
    <section className="py-2 bg-primary ">
      <ScrollVelocity
        className=" text-white"
        texts={['FRONTEND DEVELOPER', '*', 'REACT DEVELOPER', '*', 'NEXTJS DEVELOPER', '*','FRONTEND DEVELOPER', '*', 'REACT DEVELOPER', '*', 'NEXTJS DEVELOPER', '*',]}
        velocity={150}
      />
    </section>
  );
}