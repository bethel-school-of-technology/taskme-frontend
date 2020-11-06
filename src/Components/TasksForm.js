import React, { useState, useEffect, useRef } from "react";
import uuid from "uuid";
import { useAuth } from "../Libs/Auth";

function TasksForm(props) {
  const [title, setTitle] = useState(props.edit ? props.edit.value : "");
  const { isAuth } = useAuth();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuid(),
      title: title,
      userId: isAuth.user.UserId,
    });
    setTitle("");
  };

  return (
    <form className="tasksform">
      <>
        <input
          type="title"
          placeholder={props.edit ? "Update Task" : "Add a Task"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={props.edit ? "tasksform__input edit" : "tasksform__input"}
          ref={inputRef}
        />
        <button
          className={
            props.edit ? "tasksform__button edit" : "tasksform__button"
          }
          type="submit"
          onClick={handleSubmit}
        >
          {props.edit ? "UPDATE" : "ADD"}
        </button>
      </>
    </form>
  );
}

export default TasksForm;
