import { useState } from "react";
import "./TaskList.css";
import "./AddTask.css";
import TaskCard from "./TaskCard";

export const TaskList = ({tasks, setTasks}) => {
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="tasklist">
      <ul>
        <div className="header">
          <h1>Task List</h1>
          <button className="trigger" onClick={() => setShow(!show)}>
            {show ? "Hide Tasks" : "Show Tasks"}
          </button>
        </div>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </section>
  );
};
export default TaskList;
