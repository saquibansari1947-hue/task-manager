import { useState } from "react";

export const TaskmanagerPractice = () => {
    const [tasktext, setTasktext] = useState("");
    const [tasks, setTask] = useState([]);

    const addTask = () => {
        if(tasktext.trim === "") return
        const newTask = {
            id: Date.now(),
            title: tasktext,
            completed: false
        }
        setTask([...tasks, newTask]);
        setTasktext("");
    }

    return (
        <div>
            <h2>Task Manager Practice Component</h2>
            <input 
            type="text"
            placeholder="enter your name: "
            value={tasktext}
            onChange={(e) => setTasktext(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
            {tasks.map((task) => {
                return <p key={task.id}>{task.title}</p>
            })}
        </div>
    );
}