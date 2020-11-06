import React, { useEffect, useState } from "react";
import "../Styles/TasksList.css";
import Tasks from "./Tasks";
import TasksForm from "./TasksForm";

function TasksList() {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // GET TASKS - Placeholder API
  // useEffect(() => {
  //   const getAllTasks = async () => {
  //     let tasksData = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos" // using a placeholder API
  //     );

  //     let data = await tasksData.json();

  //     setTasks(data);
  //   };
  //   getAllTasks();
  // }, []);

  // ADD TASK
  const addTask = (task) => {
    if (!task.title || /^\s*$/.test(task.title)) {
      return;
    }
    const newTasks = [task, ...tasks];

    setTasks(newTasks);
    console.log(newTasks);
  };

  // UPDATE TASK
  const updateTask = (taskId, newValue) => {
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }

    setTasks((prev) =>
      prev.map((item) => (item.id === taskId ? newValue : item))
    );
  };

  // REMOVE TASK
  const removeTask = (id) => {
    const removedArr = [...tasks].filter((task) => task.id !== id);

    setTasks(removedArr);
  };

  // COMPLETE TASK
  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="taskslist">
      <h1 className="taskslist__title">Tasks</h1>
      <TasksForm onSubmit={addTask} />
      <Tasks
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default TasksList;
