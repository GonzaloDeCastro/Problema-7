import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { AiOutlinePlus, AiOutlineClear } from "react-icons/ai";
import { Task } from "../interfaces/Task";

interface Props {
  addNewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

const Taskform = ({ addNewTask }: Props) => {
  const [task, setTask] = useState<Task>(initialState);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState);

    inputTitle.current?.focus();
  };

  const changeState = () => {
    if (task.priority === undefined) {
      task.priority = true;
    } else if (task.priority === true) {
      task.priority = false;
    } else {
      task.priority = true;
    }
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
          ref={inputTitle}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <label>
          <input type="checkbox" onClick={() => changeState()} /> High priority
        </label>
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit" className="btn btn-primary">
            Save
            <AiOutlinePlus />
          </button>
        </div>
      </form>
      <br />
      <button className="btn btn-warning" onClick={() => setTask(initialState)}>
        Clean
        <AiOutlineClear />
      </button>
    </div>
  );
};

export default Taskform;
