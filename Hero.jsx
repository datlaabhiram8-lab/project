"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const carRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Intro animation
    gsap.from(headingRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1.2,
    });

    gsap.from(statsRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power3.out",
      duration: 1,
      delay: 0.5,
    });

    // Scroll animation for car
    gsap.to(carRef.current, {
      y: "-40vh",
      scale: 1.4,
      rotate: 6,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
      ease: "power2.out",
    });

  }, []);

  return (
    <section className="hero h-screen w-full relative overflow-hidden">

      {/* Heading */}
      <div className="absolute top-24 w-full text-center">
        <h1 ref={headingRef} className="text-4xl md:text-6xl tracking-widest font-semibold">
          { "WELCOME ITZ FIZZ".split("").map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h1>

        {/* Stats */}
        <div ref={statsRef} className="mt-6 text-lg opacity-90 space-y-2">
          <p>98% — Customer Satisfaction</p>
          <p>4.9⭐ — Service Quality</p>
          <p>10K+ — Happy Clients</p>
        </div>
      </div>

      {/* Car Image */}
      <div className="absolute bottom-0 w-full flex items-center justify-center">
        <Image
          ref={carRef}
          src="/car.png"
          alt="car top view"
          width={900}
          height={900}
          className="drop-shadow-lg select-none pointer-events-none"
        />
      </div>

    </section>
  );
}