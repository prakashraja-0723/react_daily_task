import TASK_DATA from "../taskData.js";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import React from "react";
const App = () => {

  const INITIAL_DATA = [
    {
      studentName: "Prakash Raja",
      instructor: "Mr. Raghul",
      course_name: "React JS"
    },
  ];

  return (
    <>
      <Header studentName={INITIAL_DATA[0].studentName} course={INITIAL_DATA[0].course_name} instructor={INITIAL_DATA[0].instructor}/>
      <Main taskData={TASK_DATA}/>
      <Footer/>
    </>
  );
};
export default App;
