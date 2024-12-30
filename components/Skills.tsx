import React from "react";

const skillsData = [
  "Python",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "DB2",
  "AS400",
  "Cobol",
  "C++", 
  "Java", 
  "C", 
  "C#", 
  "PHP",
  "Laravel",
  "Docker",
  "AWS",
  "GraphQL",
  "CI/CD",
  "Agile",
  "RESTful APIs",
  "JIRA",
];

// function Skills() {
//   return (
//     <div className="flex flex-col gap-4 w-full">
//       <h1 className="text-2xl font-bold">Skills</h1>
//       <div className="flex flex-wrap gap-2">
//         {skillsData.map((skill, index) => (
//           <span
//             key={index}
//             className="flex border border-gray-200 dark:border-gray-800 rounded-md px-2 py-1 text-sm bg-gray-500 text-white"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
// function Skills() {
//   return (
//     <div className="flex flex-col gap-4 w-full">
//       <h1 className="text-2xl font-bold">Skills</h1>
//       <div className="flex flex-wrap gap-4">
//         {skillsData.map((skill, index) => (
//           <div key={index} className="relative p-[2px]">
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md" />
//             <span className="flex items-center justify-center px-4 py-2 bg-gray-900 rounded-md relative text-white text-sm hover:bg-transparent transition duration-200">
//               {skill}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-4">
        {skillsData.map((skill, index) => (
          <div key={index} className="relative inline-flex overflow-hidden rounded-md p-[2px]">
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="relative flex items-center justify-center px-4 py-2 bg-gray-900 rounded-md text-white text-sm backdrop-blur-3xl">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Skills;

