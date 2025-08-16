import Link from "next/link";
import CourseData from "../data/music_cources.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";
export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeatureCources() {
  const featuredCources = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 ">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8  font-extrabold tracking-tight text-white  sm:text-4xl">
          {" "}
          Learn from the best in the industry.
        </p>
      </div>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCources.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <img
                    src={course.image}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                 <div className="flex items-center justify-between w-full pt-1 pb-1">
                     <p className="text-sm  text-red-500 font-bold  flex-grow">
                    {course.instructor}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">${course.price}</p>
                 </div>
                  <Link href={`/courses/${course.slug}`}>
                    <Button
                      borderRadius="1.75rem"
                      className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeatureCources;
