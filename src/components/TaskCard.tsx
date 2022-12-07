import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

export const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <p>{task.date}</p>
      <h2>{task.title}</h2>
      <p>ID: {task.id}</p>
      <p>{task.description}</p>
      <p>{task.priority ? "Urgent" : "Take it easy"}</p>

      <button
        className="btn btn-danger"
        onClick={() => task.id && deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};
