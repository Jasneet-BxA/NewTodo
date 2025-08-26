import React from "react";
import { useTasks } from "./TaskContext";
import TaskItem from "./TaskItem";

type Props = {
  filter: "all" | "active" | "completed";
};

const TaskList: React.FC<Props> = ({ filter }) => {
  const { tasks } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
