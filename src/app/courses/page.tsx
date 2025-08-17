"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import courseData from "@/data/music_cources.json";
import { Button } from "@/components/ui/moving-border";
import { Meteors } from "@/components/ui/meteors";
function page() {
  return (
    <div className=" min-h-screen bg-black py-12 pt-36">
      <h1 className=" text-center mt-24 md:mt-0 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        All Cources ({courseData.courses.length}){" "}
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {courseData.courses.map((course) => (
          <>
            <CardContainer key={course.id || course.title} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {course.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {course.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={course.title}
                  />
                </CardItem>
                <div className="flex justify-evenly items-center mt-20">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Sign Up
                  </Button>
                </div>
              </CardBody>
            <Meteors number={20} />
            </CardContainer>
            <Meteors number={20} />
          </>
        ))}
      </div>
    </div>
  );
}

export default page;
