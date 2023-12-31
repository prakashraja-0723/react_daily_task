import React from 'react';

const BrowserPrev = () => {
  return (
    <>
      <h1 className='lg:text-2xl font-bold underline w-full text-center lg:mt-10'>
        <i className='fa-brands fa-firefox text-orange-600'></i>&nbsp;Output
      </h1>
      <div className='mockup-browser border bg-orange-300 lg:w-[800px] my-14 min-h-96 flex flex-col mx-auto'>
        <div className='mockup-browser-toolbar '>
          <div className='input'>https://dailytask.com/day01</div>
        </div>
        <div className='flex justify-start py-2 px-2 flex-1 flex-col bg-orange-50'>
          <p>Name: Prakash Raja</p>
          <p>symbolName: {`¶®@|<@$|-| ®@j@`}</p>
          <p>age: 22</p>
        </div>
      </div>
    </>
  );
};
export default BrowserPrev;
