import { useState, useEffect } from "react";

const AddTask = () => {
    // Add Task
    const [taskText, setTaskText] = useState("");
    console.log(taskText);

    const getItems = () => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    }
    return (
        <div>
            <h1>Add Task Component</h1>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="enter your task"
            />
            <button onClick={() => {
                if (taskText.trim() === "") return;
                const newTask = {
                    id: Date.now(),
                    title: taskText,
                    completed: false,
                };
                const currentTasks = getItems();
                localStorage.setItem("tasks", JSON.stringify([...currentTasks, newTask]));
                setTaskText("");
            }}>
                Add
            </button>
            <p>Current Task: {taskText}</p>
        </div>
    );
}

export default AddTask;