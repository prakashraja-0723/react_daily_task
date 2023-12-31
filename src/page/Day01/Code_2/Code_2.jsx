import React from "react";
import Package from "../../../Components/Code/Package.jsx";
import Function from "../../../Components/Code/Function.jsx";
import FunctionInsideCode_2 from "./FunctionInside-code_2.jsx";

const Code_2 = () => {
  return (
    <>
      <div className="mockup-code w-80 rounded-lg lg:w-[800px] mt-10 ">
        <pre data-prefix="1">// Info.jsx</pre>
        <pre data-prefix="2" className={`text-violet-300`}>
          import <Package>React</Package> from <Package>'react'</Package>
        </pre>
        <pre data-prefix='3'></pre>
        <pre data-prefix='4'><Function name={'Info'} props={'props'}>{<FunctionInsideCode_2/>}</Function></pre>
      </div>
    </>
  );
};
export default Code_2;
