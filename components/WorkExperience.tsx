import React from "react";

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "May 2024",
    endDate: "Present",
    companyName: "University of Texas at Arlington",
    jobTitle: "Graduate Research Assistant",
    description: [
      "Engineered a seamless migration from Bootstrap to RadixUI, driving a 30% reduction in load times by strategicallly leveraging TypeScript and React. Optimized system performance with a 75% increase in efficiency by implementing Redis caching and Redis Hashes, resulting in accelerated user data retrieval and a 22% reduction in storage footprint.",
      "Spearheaded migration of client-side code to React Server Components (RSC), with Next.js Incremental StaticRegeneration (ISR), to achieve a response time of 800ms from 8 seconds (90% improvement).",
    ],
  },
  {
    startDate: "December 2023",
    endDate: "August 2024",
    companyName: "University of Texas at Arlington",
    jobTitle: "Graduate Teaching Assistant",
    description: [
      "Developed and integrated algorithmic and system design concepts into the curriculum, resulting in a 20% increase in student comprehension and demonstrating proficiency in both theoretical knowledge and practical skills.",
      "Introduced flipped classrooms, gamified learning, and algorithm visualization tools, resulting in a 30% increase instudent engagement in classwork.",
    ],
  },
  {
    startDate: "June 2023",
    endDate: "December 2023",
    companyName: "DXC Technology",
    jobTitle: "Senior Software Engineer",
    description: [
      "Led migration of legacy Bootstrap components to RadixUI using TypeScript and React, reducing load times by 30%.",
      "Improved front-end performance and accessibility with CSS-in-JS libraries (Styled Components, TailwindCSS) to create responsive, maintainable interfaces.",
      "Achieved a 90% time reduction in report generation by implementing an efficient Javascript automation solution.",
      "Built a full-stack web app with React (frontend) and Rust (backend) to automate data processing, saving 15 hours per week for insurance agents.",
      "Rewrote legacy Cobol/RPGLE code in Python, reducing claims processing time by 80% through in-memory caching.",
      "Optimized in-house Node.js APIs, reducing bandwidth usage by 50% per release cycle.",
      "Enhanced cloud infrastructure on AWS (EC2, S3, Lambda), improving reliability by 40% and reducing costs by 25%.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Work Experience</h1>

      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {workExperienceData.map((item, index) => (
            <li
              key={index}
              className={`mb-10 ms-4 ${
                index === workExperienceData.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate || "Present"}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.jobTitle} at {item.companyName}
              </h3>
              <div className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">
                <ol>
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ol>
              </div>
              {item.companyLink && (
                <a
                  href={item.companyLink}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more{" "}
                  <svg
                    className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
