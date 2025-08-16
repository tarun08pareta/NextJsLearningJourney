'use client';
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const musicalWebniorData =[
  {
    "title": "Rhythms of the World",
    "description": "A live musical webinar exploring traditional rhythms and instruments from around the globe.",
    "link": "https://musicwebnior.com/rhythms"
  },
  {
    "title": "Jazz Improvisation Masterclass",
    "description": "Learn the art of jazz improvisation from professional musicians in an interactive online session.",
    "link": "https://musicwebnior.com/jazz-masterclass"
  },
  {
    "title": "The Future of Electronic Music",
    "description": "A webinar on how technology is shaping the sound of tomorrow in the electronic music scene.",
    "link": "https://musicwebnior.com/electronic-future"
  },
  {
    "title": "Bollywood Beats Night",
    "description": "An entertaining musical webinar featuring Bollywood classics, fusion, and live performances.",
    "link": "https://musicwebnior.com/bollywood-beats"
  },
  {
    "title": "Classical Strings Experience",
    "description": "Dive into the beauty of classical music with a focus on violin, cello, and orchestral arrangements.",
    "link": "https://musicwebnior.com/classical-strings"
  },
  {
    "title": "Rock Legends Reimagined",
    "description": "A high-energy online event paying tribute to legendary rock bands with fresh interpretations.",
    "link": "https://musicwebnior.com/rock-legends"
  },
  {
    "title": "Soulful Evenings",
    "description": "Relax with soulful live performances and stories behind the songs in this intimate webinar series.",
    "link": "https://musicwebnior.com/soulful-evenings"
  },
  {
    "title": "Hip-Hop & Culture",
    "description": "An interactive session exploring the roots of hip-hop, rap battles, and its cultural influence.",
    "link": "https://musicwebnior.com/hiphop-culture"
  }
]

function UpcommingWebnior() {
  return (
    <div className="p-12 bg:gray-200 ">
      <div className="mx-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINAR
          </h1>
          <p className="mt-2 text-3xl leading-8  font-extrabold tracking-tight text-white  sm:text-4xl">
            Enhance Your Musical journey
          </p>
        </div>
        <div className=" mt-10">
            
             <HoverEffect items={musicalWebniorData.map((wibnior:any)=>{
                return {
                    title: wibnior.title,
                    description: wibnior.description,
                    link: wibnior.link,
                };
             })} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Webinar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcommingWebnior;
