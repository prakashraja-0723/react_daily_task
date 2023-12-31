import React from "react";

const ExportFunc = ({ children }) => {
  return (
    <span className={`text-violet-300`}>
      export default <span className={`text-blue-300`}>{children}</span>;
    </span>
  );
};
export default ExportFunc;