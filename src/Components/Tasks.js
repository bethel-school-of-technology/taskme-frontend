import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import TasksForm from "./TasksForm";
import { MdModeEdit } from "react-icons/md";

function Tasks({ tasks, completeTask, removeTask, updateTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TasksForm edit={edit} onSubmit={submitUpdate} />;
  }

  
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <div
            className={task.isComplete ? "tasks__item complete" : "tasks__item"}
            key={index}
          >
            <div key={task.id} onClick={() => completeTask(task.id)}>
              {task.title}
            </div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removeTask(task.id)}
                className="tasks__deleteIcon"
              />
              <MdModeEdit
                onClick={() => setEdit({ id: task.id, value: task.title })}
                className="tasks__editIcon"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
