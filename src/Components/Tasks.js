import React, { useEffect, useState } from 'react';
import '../Styles/Tasks.css';

function Tasks() {

    var [isEdit, setIsEdit] = useState("");
    var [tasks, setTasks] = useState("");
    var [task, setTask] = useState("");

    var [taskName, setTaskName] = useState("");
    var [completed, setCompleted] = useState(false);

    useEffect(() => {
        const getAllTasks = async () => {
            let tasksData = await fetch("http://localhost:3000/tasks/")
            let t = await tasksData.json();

            //console.log(t);

            setTasks(t.data.tasks);
        }

        getAllTasks();
    }, [])

    return (
        <div className='tasks'>
            <h3>Tasks</h3>
            {tasks.map((task, idx) => {
                return(
                    <div key={idx}>
                        {task.tasks.taskname} {task.tasks.completed}
                    </div>
                )
            })}
        </div>
    )
};

export default Tasks;
