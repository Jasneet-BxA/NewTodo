import React, { useState } from "react";
import { useTasks } from "./TaskContext";
import { useNavigate } from "react-router";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
    navigate('/'); 
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
