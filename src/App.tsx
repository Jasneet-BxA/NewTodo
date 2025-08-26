import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { TaskProvider } from "./components/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <TaskProvider>
      <BrowserRouter>
        <div className="todo-container">
          <h1>Todo App</h1>

          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>All</NavLink>
            <NavLink to="/active">Active</NavLink>
            <NavLink to="/completed">Completed</NavLink>
          </nav>

          <TaskForm />

          <Routes>
            <Route path="/" element={<TaskList filter="all" />} />
            <Route path="/active" element={<TaskList filter="active" />} />
            <Route
              path="/completed"
              element={<TaskList filter="completed" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </TaskProvider>
  );
};

export default App;
