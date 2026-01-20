import { useState, useEffect } from "react";
import Sample from "./Practice/sample.jsx";
import PracticeUseEffect from "./Practice/useEffect.jsx";

function App() {
  // -----------------------------
  // STATE
  // -----------------------------

  // Task list state
  // const [tasks, setTasks] = useState(() => {
  //   const savedTasks = localStorage.getItem("tasks");
  //   return savedTasks ? JSON.parse(savedTasks) : [];
  // });

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Input text state
  const [taskText, setTaskText] = useState("");

  // -----------------------------
  // EFFECT (LocalStorage)
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // -----------------------------
  // ADD TASK
  // -----------------------------
  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  // -----------------------------
  // TOGGLE COMPLETE
  // -----------------------------
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  // -----------------------------
  // DELETE TASK
  // -----------------------------
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // -----------------------------
  // JSX
  // -----------------------------
  return (
    <div style={styles.container}>
      <h2>📝 Task Manager</h2>

      <div style={styles.inputBox}>
        <input
          type="text"
          value={taskText}
          placeholder="Enter task..."
          onChange={(e) => setTaskText(e.target.value)}
          style={styles.input}
        />

        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.listItem}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
                color: task.completed ? "gray" : "black",
              }}
            >
              {task.completed ? "✅ " : "⬜ "}
              {task.title}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              style={styles.deleteBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <div>
        <Sample />
        <PracticeUseEffect />
      </div>
    </div>
  );
}

// -----------------------------
// STYLES
// -----------------------------
const styles = {
  container: {
    maxWidth: "450px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  addBtn: {
    padding: "8px 15px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
  },
  deleteBtn: {
    cursor: "pointer",
  },
};

export default App;
