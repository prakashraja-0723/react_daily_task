import React from 'react'
import Code from "./Code.jsx";
import BrowserPrev from "./BrowserPrev.jsx";
import INITIAL_DATA from '../../initialData.js';

const Day01 = () => {
	return (
    <>
      <header className={`bg-delft_blue w-screen lg:h-56 shadow p-6`}>
        <div className={`container mx-auto lg:p-0`}>
          <h1
            className={`lg:text-2xl font-bold text-saffron uppercase underline`}
          >
            Day - 01
          </h1>
          <ul
            className={`flex flex-wrap items-end justify-between md:items-center md:flex-row sm:justify-start gap-2 lg:gap-20 text-snow lg:py-8 pt-4 `}
          >
            <li className={`flex flex-col lg:gap-5 gap-2`}>
              <h1 className={`lg:text-sm xl:text-lg font-semibold`}>
                <i className='fa-solid fa-user-large text-saffron lg:text-xl xl:text-2xl'></i>
                &nbsp;&nbsp;Student :{' '}
                <span className={`lg:text-xl xl:text-[24px] text-saffron`}>
                  &nbsp;{INITIAL_DATA[0].studentName}
                </span>
              </h1>
              <h1 className={`lg:text-sm xl:text-lg  font-semibold`}>
                <i className='fa-solid fa-book text-saffron lg:text-xl xl:text-2xl'></i>
                &nbsp;&nbsp;Course :&nbsp;&nbsp;
                <i
                  className={`fa-brands fa-react text-cyan-300 lg:text-4xl animate-spin-slow`}
                ></i>
                &nbsp;
                <span className={`lg:text-xl xl:text-[24px]`}>
                  {INITIAL_DATA[0].course_name}
                </span>			
              </h1>
            </li>
            <li className={`flex flex-col lg:gap-5 gap-2`}>
              <h1 className={`lg:text-sm xl:text-lg font-semibold`}>
                <i className='fa-solid fa-circle-check text-saffron lg:text-xl xl:text-2xl'></i>
                &nbsp;&nbsp;Covered Topic :
                <span className={`lg:text-xl xl:text-[24px] text-saffron`}>
                  &nbsp;{'React Syntax & react-props'}
                </span>
              </h1>
            </li>
          </ul>
        </div>
      </header>				
      <Code />
				 <div className='container '>
      <BrowserPrev />
				 </div>
					
    </>
  );
}
export default Day01
