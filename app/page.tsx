import Head from 'next/head'; 
import Intro from "../components/Intro";
import Meteors from "@/components/magicui/meteors";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { CustomDock } from "@/components/ui/CustomDock";
import IconCloud from "@/components/ui/icon-cloud";


export default function Home() {
  return (
    
    
    <div className="relative lg:w-8/12 md:w-7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <Head>
        <title>SS_Portfolio</title>
        <meta name="description" content="Welcome to my portfolio. Explore my work experience, projects, skills, and more!" />
      </Head>
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full overflow-hidden">
      
      <CustomDock/>

  
      <Intro/>
      <WorkExperience/>
      <Education />
      <div>
      <Skills /> 
      <IconCloud iconSlugs = {[
          "python", 
          'androidstudio',
          'vercel',
          'visualstudiocode',
          "react",  
          "tailwindcss",  
          "typescript",  
          "javascript",  
          "html5",  
          "css3",  
          "git",  
          "npm",
          "github",    
          "express",  
          "mongodb",  
          "postgresql",  
          "mysql",  
          "java",    
          "csharp",  
          "php",  
          "laravel",  
          "docker",  
          "amazonwebservices",  
          "graphql",  
          "jira",
          "figma",
          "ibm", 
        ]}/>
      </div>
      <Projects /> 
      <ContactMe/>
      <Meteors number={21}/>
    
  
      </main>
      
    </div>

  );
}
