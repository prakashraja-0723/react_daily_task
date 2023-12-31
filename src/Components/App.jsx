import React from "react";
import TASK_DATA from "../taskData.js";
import INITIAL_DATA from '../initialData.js'
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <>
      <Header studentName={INITIAL_DATA[0].studentName} course={INITIAL_DATA[0].course_name} instructor={INITIAL_DATA[0].instructor}/>
      <Main taskData={TASK_DATA}/>
      <Footer/>
    </>
  );
};
export default App;
