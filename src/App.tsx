import { useState } from "react";
import Taskform from "./components/Taskform";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";
import logo from "./logo.png";

interface AppProps {
  title?: string;
}

export function App({ title }: AppProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getCurrentTimestamp = (): number => new Date().getTime();
  const dateComplete = new Date().toString();
  const abbreviatedDate = dateComplete.substring(0, 21);

  const addNewTask = (task: Task) => {
    setTasks([
      ...tasks,
      {
        ...task,
        id: getCurrentTimestamp(),
        date: abbreviatedDate,
        completed: false,
      },
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-dark text-white" style={{ height: "130vh" }}>
      <nav
        className="navbar navbar-dark "
        style={{ backgroundColor: "#aaf803" }}
      >
        <div className="container" style={{ display: "flex" }}>
          <h1>Task Form</h1>
          <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
        </div>
      </nav>
      <main className="container p-4">
        <div className="column">
          <div className="col-md-4">
            <Taskform addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
