import Task from "./Task.jsx";

const Main = ({ taskData }) => {
  console.log(taskData);
  return (
    <>
      <main className={` flex-1`}>
        <h1 className={`text-3xl font-bold my-6 text-delft_blue underline`}>React Js Daily Tasks</h1>
        {taskData.map((task,i) => {
          return (
            <div
              key={task.id}
              className={`p-6 grid place-items-center grid-cols-1 auto-rows-min md:grid-cols-2 lg:grid-cols-3  gap-4`}
            >
              <Task task={task} i={i+1}/>
              <Task task={task} i={i+1}/>
              <Task task={task} i={i+1}/>
              <Task task={task} i={i+1}/>
              <Task task={task} i={i+1}/>
              <Task task={task} i={i+1}/>
              <Task task={task} i={i+1}/>
            </div>
          );
        })}
      </main>
    </>
  );
};
export default Main;
