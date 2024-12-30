import Link from "next/link";
import React from "react";
import { RainbowButton } from "./magicui/rainbow-button";
import {MagicCard} from "./ui/magic-card";



const projectsData = [
  {
    title: "jobseekr.io",
    description:
      "JobSeeker is a personalized job platform designed to help users efficiently track and apply for the most relevant job opportunities",
    link: "https://www.jobseekr.io/",
    previewVideo: "/Videos/jobseekrv2.gif",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "PostgreSQL",
    ],
  },
  {
    title: "Programming Language Popularity",
    description:
      "This project provides insights into the most popular and widely adopted programming languages, driven by current industry trends, to guide developers.",
    link: "https://plang-pop.vercel.app/",
    previewVideo: "/Videos/plang-pop.gif",
    technologies: ["Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "ShadCN",
      "PostgreSQL"],
  },
  {
    title: "ReHome",
    description:
      "ReHome is a platform designed to facilitate the buying, selling, and exchanging of used goods among foreign university students, fostering sustainability and minimizing waste.",
    link: "https://github.com/SanmeshSankhe/ReHome-University-Marketplace",
    // code: "https://github.com/yatharth1706/Cloud-Space",
    previewVideo: "/Videos/Rehome.gif",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Express",
      "Node.js",
      "TypeScript"
    ],
  },
  {
    title: "Music Genre Classification",
    description:
      "This project uses transfer learning to adapt the VGG-16 model for accurately classifying music genres, improving music recognition.",
    link: "https://github.com/SanmeshSankhe/Music-Genre-Classification",
    
    previewVideo: "/Videos/MusicGenre.gif",
    technologies: [
      "Python",
      "Librosa",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "TensorFlow",
    ],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <MagicCard
            key={index}
            className="flex flex-col border border-gray-100  dark:border-gray-800 rounded-md"
          >
            {/* <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            /> */}
            <div className="rounded-t-md overflow-hidden p-5">
              <img
                src={project.previewVideo}
                alt={`${project.title} preview`}
                // className="w-full h-auto object-cover"
                className="rounded-t-md overflow-hidden"
              />
            </div>
            {/* <img 
              src={project.previewVideo}
              alt={`${project.title} preview`}
              className="rounded-t-md overflow-hidden"
            /> */}
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <RainbowButton>View</RainbowButton>
                </Link>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}

export default Projects;
