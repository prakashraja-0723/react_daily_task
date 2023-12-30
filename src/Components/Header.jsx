import React from "react";
import Time from "./Time.jsx";

const Header = ({ instructor, studentName, course }) => {
  return (
    <>
      <header className={`bg-delft_blue w-screen lg:h-56 shadow p-6`}>
        <div className={`container mx-auto lg:p-0`}>
          <h1
            className={`lg:text-2xl font-bold text-saffron uppercase underline`}
          >
            Student Details
          </h1>
          <ul
            className={`flex flex-wrap items-end justify-between md:items-center md:flex-row sm:justify-around gap-2 text-snow lg:py-8 pt-4 `}
          >
            {/*Student*/}
            <li className={`flex flex-col lg:gap-5 gap-2`}>
              <h1 className={`lg:text-sm xl:text-lg font-semibold`}>
                <i className="fa-solid fa-user-large text-saffron lg:text-xl xl:text-2xl"></i>
                &nbsp;&nbsp;Student :{" "}
                <span className={`lg:text-xl xl:text-[24px] text-saffron`}>
                  &nbsp;{studentName}
                </span>
              </h1>
              <h1 className={`lg:text-sm xl:text-lg  font-semibold`}>
                <i className="fa-solid fa-book text-saffron lg:text-xl xl:text-2xl"></i>
                &nbsp;&nbsp;Course :&nbsp;&nbsp;
                <i
                  className={`fa-brands fa-react text-cyan-300 lg:text-4xl animate-spin-slow`}
                ></i>
                &nbsp;
                <span className={`lg:text-xl xl:text-[24px]`}>{course}</span>
              </h1>
            </li>
            <li className={`hidden md:block`}>
              <div className={`w-[2px] h-16 bg-saffron`}></div>
            </li>
            {/*Instructor*/}
            <li>
              <h1 className={`lg:text-sm xl:text-lg font-semibold`}>
                <i className="fa-solid fa-chalkboard-user text-saffron lg:text-xl xl:text-2xl"></i>
                &nbsp;&nbsp;Instructor :{" "}
                <span className={`lg:text-xl xl:text-[24px] text-saffron`}>
                  &nbsp;{instructor}
                </span>
              </h1>
            </li>
            <li className={`hidden md:block`}>
              <div className={`w-[2px] h-16 bg-saffron`}></div>
            </li>
            {/*Time*/}
            <li className={`md:flex md:flex-col md:gap-4 hidden`}>
              <Time />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
