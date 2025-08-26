import React from "react";
import { useTasks } from "./TaskContext";
import type { Task } from "./TaskContext";

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}
      </span>
      <button className="delete.btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
