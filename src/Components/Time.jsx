import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={`font-semibold md:text-`}>
        <i className="fa-solid fa-calendar-days text-saffron lg:text-xl"></i>
        &nbsp;&nbsp;Date : {new Date().toLocaleDateString()}
      </div>
      <div className={`font-semibold md:text-lg`}>
        <i className="fa-solid fa-hourglass-start fa-spin text-saffron lg:text-xl"></i>
        &nbsp;&nbsp;Time : {time}
      </div>
    </>
  );
};
export default Time;
