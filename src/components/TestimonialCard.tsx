import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import test from "node:test";
import { cn } from "@/lib/utils";

const TestimonialData = [
  {
    quote:
      "This product completely transformed the way I work. Highly recommended!",
    name: "Sarah Johnson",
    title: "Product Manager, TechCorp",
  },
  {
    quote: "Excellent service and fantastic results. I couldn’t be happier!",
    name: "Michael Lee",
    title: "CEO, BrightFuture Inc.",
  },
  {
    quote:
      "The attention to detail and customer support exceeded my expectations.",
    name: "Emma Davis",
    title: "Marketing Director, GreenLeaf",
  },
  {
    quote: "Truly a game-changer in the industry. Worth every penny.",
    name: "James Smith",
    title: "Entrepreneur",
  },
  {
    quote: "Professional, reliable, and innovative. I trust them completely.",
    name: "Olivia Brown",
    title: "CTO, Visionary Labs",
  },
  {
    quote:
      "Their expertise helped us achieve milestones faster than we imagined.",
    name: "Daniel Martinez",
    title: "Founder, StartUpX",
  },
  {
    quote: "A seamless experience from start to finish. Simply outstanding.",
    name: "Sophia Wilson",
    title: "Operations Head, CloudWorks",
  },
  {
    quote:
      "I have never experienced such dedication and professionalism before.",
    name: "Ethan Clark",
    title: "Business Analyst, DataBridge",
  },
  {
    quote:
      "They truly care about their customers’ success. Highly trustworthy.",
    name: "Isabella Taylor",
    title: "HR Manager, PeopleFirst",
  },
  {
    quote: "Fantastic team to work with. Always innovative and proactive.",
    name: "William Harris",
    title: "Lead Developer, CodeCraft",
  },
];

function TestimonialCard() {
  return (
    <div
      className=" relative h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2]
     flex flex-col justify-center items-center overflow-hidden 
     "
     
    >
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <h2 className="text-5xl font-bold text-center mb-7 z-10">
        Hear Our Harmonny : Voice Of Success
      </h2>
      <div className="flex justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl ">
          <InfiniteMovingCards
            items={TestimonialData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
