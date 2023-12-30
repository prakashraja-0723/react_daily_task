const Task = ({ task }) => {
  return (
    <>
      {/*<div className={`w-6/12 p-3 border rounded-md bg-white shadow`}>*/}
      {/*<img src={`https://blog.logrocket.com/wp-content/uploads/2020/05/guide-video-playback-react.png`} alt={task.covered_topic} className={`mb-2 `}/>*/}
      {/*<h3 className={`font-bold text-delft_blue`}>Task-01</h3>*/}
      {/*<h4 className={`font-semibold text-xs text-black_olive`}>{task.date}th {task.month}, {task.year}</h4>*/}
      {/*</div>*/}
      {/*<div className="card w-96 sm:w-64 sm:p-0 bg-base-100 shadow-xl image-full ">*/}
      {/*  <figure>*/}
      {/*    <img*/}
      {/*      src="https://blog.logrocket.com/wp-content/uploads/2020/05/guide-video-playback-react.png"*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*  </figure>*/}
      {/*  <div className="card-body">*/}
      {/*    <h2 className="card-title bg-snow4">{task.taskNo}</h2>*/}
      {/*    <p><strong>Topic : </strong>{task.covered_topic}</p>*/}
      {/*    <div className="card-actions justify-end">*/}
      {/*      <button className="btn rounded-full bg-saffron border-none text-delft_blue hover:bg-vista_blue transition-all duration-300">*/}
      {/*        <i className="fa-solid fa-square-arrow-up-right "></i>&nbsp;View*/}
      {/*        task*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="card w-80 sm:w-96 md:w-[360px] lg:w-[300px] xl:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{task.day}</h2>
          <p>{task.covered_topic}</p>
          <div className="card-actions justify-end mt-3">
            <button className="btn hover:bg-vista_blue text-snow bg-hover_vista_blue hover:text-delft_blue rounded-full"><i className={`fa-solid fa-square-arrow-up-right`}></i>&nbsp;View Task</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Task;
