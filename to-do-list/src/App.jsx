import React from "react";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (!task) {
      alert("enter a task");
      return;
    }

    if (taskList.includes(task)) {
      alert("task already exists");
      return;
    }

    const newTask = {
      id: Date.now(),
      newTask: task,
      Iscomplete: false,
    };
    // Add the new task to the taskList state while keeping existing tasks
    setTaskList((prev) => [newTask, ...prev]);
    toast.success("Task Added");
    setTask("");
  };

  const handleCompleteTask = (id) => {
    // Toggle the Iscomplete property of the task with the given id
    // Keep other tasks unchanged

    setTaskList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, Iscomplete: !t.Iscomplete } : t)),
    );
  };

  const handleDelete = (id) => {
    // Remove the task with the given id from taskList
    setTaskList((prev) => prev.filter((t) => t.id !== id));
    toast.success("Task Deleted");
  };
  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen flex justify-center items-center bg-linear-to-r from-purple-400 to-purple-300  ">
        <div className="flex flex-col justify-center items-center gap-3 bg-white  w-full max-w-120 p-5 rounded-2xl shadow-2xl">
          <div>
            <h1 className="text-2xl">To Do List</h1>
          </div>
          <div className=" w-full flex flex-col gap-5">
            {/* task input */}
            <div className="w-full flex gap-2">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="add task here....."
                className="w-full outline-0 border-0 ring-1 ring-gray-500 p-2 rounded-md text-lg transition-all duration-300 focus:ring-purple-500 animate-pulse "
              />
              <button
                onClick={handleAddTodo}
                className="bg-purple-400 p-4 shadow rounded-md transition-all duration-300 text-white
              opacity-80
            hover:cursor-pointer hover:opacity-100
            "
              >
                <FaPlus />
              </button>
            </div>
            {/* task list */}
            <ul className="flex flex-col gap-4">
              {taskList.map((t) => (
                <li
                  key={t.id}
                  className={`flex justify-between items-center bg-gray-50 p-2 rounded-md  ${t.Iscomplete ? "line-through" : ""} `}
                >
                  <input
                    type="checkbox"
                    checked={t.Iscomplete}
                    onChange={() => handleCompleteTask(t.id)}
                  />
                  <span className="mr-auto ml-2">{t.newTask}</span>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="bg-red-400 p-4 shadow rounded-md transition-all duration-300 text-white
              opacity-80
            hover:cursor-pointer hover:opacity-100"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}

              <li className="flex justify-between items-center bg-gray-50 p-2 rounded-md ">
                <input type="checkbox" />
                <span className="mr-auto ml-2">Go to Gym</span>
                <button
                  className="bg-red-400 p-4 shadow rounded-md transition-all duration-300 text-white
              opacity-80
            hover:cursor-pointer hover:opacity-100"
                >
                  <FaTrash />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
