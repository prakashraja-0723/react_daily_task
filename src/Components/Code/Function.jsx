import React from "react";
import FunctionInsideCode_1 from "../../page/Day01/Code_1/FunctionInside-code_1.jsx";

const Function = ({ name,children,props }) => {
  return (
    <span className={`text-violet-300`}>
      const <span className={`text-blue-300`}>{name}</span> = ({props}) => {`{`}
      <pre data-prefix={6}>&nbsp;&nbsp;return (</pre>
      {children}
    </span>
  );
};
export default Function;
