import React from 'react';
import Github from '~icons/mdi/github.jsx';
import Linkedin from '~icons/mdi/linkedin.jsx';

const Links = () => {
  return (
    <div className="flex flex-col gap-2 items-center text-gray-700 dark:text-grey-200">
      <h2 className="pb-0 md:pb-4 text-xl font-bold">My links</h2>
      <div className="flex flex-row md:flex-col gap-2 items-center">
        <a className="text-md text-blue-600 visited:text-purple-600" href="https://www.linkedin.com/in/jacksonmarketon/" target="_blank"><Linkedin width={50} height={50}/></a>
        <a className="text-md text-blue-600 visited:text-purple-600" href="https://github.com/jackmarketon" target="_blank"><Github width={50} height={50}/></a>
      </div>
    </div>
  )
};

export default Links;