import React from 'react';
import Links from './Links';

const About = () => {
  return (
    <div className="w-full bg-slate-200 mt-10">
      <div className="w-full mx-auto py-10 max-w-2xl">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col grow">
            <h2 className="pb-4 text-grey-700 dark:text-grey-200 text-xl font-bold">About Me</h2>
            <div className="w-full flex flex-col gap-4 text-gray-700 dark:text-grey-200">
              <p className="text-lg">I am a seasoned Staff Engineer with over a decade of experience in solving complex business problems using cutting-edge web technologies to deliver impactful results.</p>
              <p className="text-lg">Currently specializing in Next.js, React.js, Node.js, and GraphQL.</p>
              <p className="text-lg">With a proven track record at top tech companies such as Shopify, Pinterest, and OpenTable, I excel in developing scalable solutions, enhancing user engagement, and leading high-performing teams.</p>
              <p className="text-lg">Along with my commitment to innovation and continuous improvement, I am also an active volunteer with Red Rock Search & Rescue, demonstrating my dedication to community and technical excellence.</p>
            </div>
          </div>
          <div className="shrink-0">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;