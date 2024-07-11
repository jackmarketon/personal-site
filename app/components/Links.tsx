import React from 'react';

const Links = () => {
  return (
    <div className="flex flex-col gap-2 text-gray-700 dark:text-grey-200">
      <h2 className="pb-4 text-xl font-bold">My links</h2>
      <a className="text-md text-blue-600 visited:text-purple-600" href="https://www.linkedin.com/in/jacksonmarketon/" target="_blank">LinkedIn</a>
      <a className="text-md text-blue-600 visited:text-purple-600" href="https://github.com/jackmarketon" target="_blank">GitHub</a>
    </div>
  )
};

export default Links;