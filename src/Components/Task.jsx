import {Link} from "react-router-dom";

const Task = ({ task,i }) => {
  return (
    <>
      <div className="card w-80 sm:w-96 md:w-[360px] lg:w-[300px] xl:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{task.day}</h2>
          <p>{task.covered_topic}</p>
          <div className="card-actions justify-end mt-3">
            <Link className="btn hover:bg-vista_blue text-snow bg-hover_vista_blue hover:text-delft_blue rounded-full" to={`/day0${i}`}><i className={`fa-solid fa-square-arrow-up-right`}></i>&nbsp;View Task</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Task;
