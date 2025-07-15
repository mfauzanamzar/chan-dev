import { useEffect, useRef, useState } from "react";
import { animate, svg, stagger } from 'animejs';

export default function FauzanAnimated() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (svgRef.current) {
      setVisible(true); // Show SVG right before animation
      animate(svg.createDrawable('.line'), {
        draw: ['0 0', '0 1'], // Only draw from start to finish
        ease: 'inOutQuad',
        duration: 2000,
        delay: stagger(100),
        loop: false, // Do not loop
      });
    }
  }, []);

  return (
    <svg
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s' }}
      viewBox="-50 0 500 100"
    >
      <g fill="none" fillRule="evenodd" ref={svgRef} stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path className="line" d="M362.302 0.899994L362.398 1.27792L381.637 77.5055V0.899994H393.005V91.4996H373.811L373.717 91.1217L354.605 14.9225V91.4996H343.237V0.899994H362.302Z" />
        <path className="line" d="M307.007 0.899994L307.099 1.28476L328.347 90.8844L328.492 91.4996H316.064L315.979 91.1051L311.2 68.8443H287.045L282.14 91.108L282.054 91.4996H269.625L269.774 90.8824L291.406 1.28281L291.498 0.899994H307.007Z"/>
        <path className="line" d="M253.603 0.899994V12.7838L253.549 12.8902L218.974 81.0279H252.323V91.4996H206.011V79.6158L206.066 79.5094L240.767 11.3717H208.955V0.899994H253.603Z"/>
        <path className="line" d="M147.742 0.899994V71.6725C147.742 74.177 148.665 76.3086 150.532 78.0943C152.386 79.8682 154.815 80.772 157.866 80.7721H163.625C166.677 80.7721 169.106 79.8683 170.96 78.0943C172.827 76.3086 173.749 74.177 173.75 71.6725V0.899994H185.886V69.2398C185.886 76.5843 183.853 82.2 179.708 85.9928C175.659 89.6892 169.845 91.4996 162.346 91.4996H159.146C151.646 91.4996 145.793 89.6892 141.661 85.9967L141.653 85.9898V85.9889C137.595 82.1953 135.606 76.5812 135.606 69.2398V0.899994H147.742Z"/>
        <path className="line" d="M99.6321 0.899994L99.7239 1.28476L120.972 90.8844L121.117 91.4996H108.689L108.604 91.1051L103.825 68.8443H79.6702L74.7649 91.108L74.679 91.4996H62.2502L62.3987 90.8824L84.0305 1.28281L84.1233 0.899994H99.6321Z" />
        <path className="line" d="M44.8198 0.899994V11.2437H13.2036V40.8355H41.6196V51.1803H13.2036V91.4996H1.06787V0.899994H44.8198Z" />
        <path className="line" d="M102.669 58.639L102.799 59.2445H80.6997L80.8276 58.64L91.1958 9.74448L92.1733 9.7435L102.669 58.639Z" />
        <path className="line" d="M310.044 58.639L310.174 59.2445H288.075L288.203 58.64L298.571 9.74448L299.548 9.7435L310.044 58.639Z" />
      </g>
    </svg>
  );
}
