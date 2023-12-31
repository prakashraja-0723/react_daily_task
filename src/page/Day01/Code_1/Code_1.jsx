import React from "react";
import Package from "../../../Components/Code/Package.jsx";
import FileImport from "../../../Components/Code/FileImport.jsx";
import Function from "../../../Components/Code/Function.jsx";
import FunctionInsideCode_1 from "./FunctionInside-code_1.jsx";

const Code_1 = () => {
  return (
    <>
      <h1 className='lg:text-2xl font-bold underline w-full lg:mt-10'>
        <i className='fa-solid fa-code'></i>&nbsp;Day01.jsx
      </h1>
      <div className='mockup-code w-80 rounded-lg lg:w-[800px] mt-10 '>
        <pre data-prefix='1'>// Day01.jsx</pre>
        <pre data-prefix='2' className={`text-violet-300`}>
          import <Package>React</Package> from <Package>'react'</Package>
        </pre>
        <pre data-prefix='3' className={`text-violet-300`}>
          import <FileImport>Info</FileImport> from{' '}
          <FileImport>'./Info'</FileImport>
        </pre>
        <pre data-prefix='4'></pre>
        <pre data-prefix='5'>
          <Function name={'Day01'}>
            <FunctionInsideCode_1 />
          </Function>
        </pre>
      </div>
    </>
  );
};
export default Code_1;
