import { useState } from "react";
import "./TaskList.css";

export const AddTask = ({tasks, setTasks}) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };
  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress),
    };
    if(task.name !== "") {
      setTasks([...tasks, task]);
    }

    handleReset();
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task"></label>
        <input
          type="text"
          name="task"
          id="task"
          value={taskValue}
          placeholder="Add Task"
          autoComplete="off"
          onChange={handleChange}
        />
        <select onChange={(event) => setProgress(event.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <span onClick={handleReset} className="reset buttons">
          Reset
        </span>
        <button type="submit" className="addtaskBtn buttons">
          Add Task
        </button>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};

export default AddTask;
