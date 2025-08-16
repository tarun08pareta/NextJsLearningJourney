"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Master the Art of Music",
    description:
      "Unlock your musical potential with expert-led courses in guitar, piano, vocals, and more. Learn step by step, from beginner to advanced levels.",
  },
  {
    title: "Your Journey to Music Excellence",
    description:
      "Join our music school to explore instruments, enhance your skills, and express your creativity. Tailored lessons for every age and skill level.",
  },
  {
    title: "Learn, Play, Perform",
    description:
      "From fundamentals to stage performance, our structured courses help you build confidence and achieve your musical dreams.",
  },
  {
    title: "Where Passion Meets Practice",
    description:
      "Discover world-class training in instruments, music theory, and performance. Designed for students who want to turn passion into mastery.",
  },
  {
    title: "Music for Everyone",
    description:
      "Whether you’re a beginner or a pro, our diverse courses in guitar, piano, and vocals are crafted to help you grow as a musician.",
  },
];

function WhyChooseUs() {
  return <div >
    <StickyScroll content={content}/>
  </div>;
}

export default WhyChooseUs;
