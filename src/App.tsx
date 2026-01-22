import { useState } from "react";
import { useImmerReducer } from "use-immer";

import "./App.css";
import Tasks from "./Tasks";
import Button from "./components/Button";
import type { Task } from "./types";
import { taskReducer } from "./reducer";
import { initialState} from "./initalState";

function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialState);
  const [text, setText] = useState("");

  const handleAddTask = (text: string) => {
    dispatch({
      type: "add",
      payload: {
        id: crypto.randomUUID(),
        text: text,
        done: false,
      },
    });
  };

  const handleEditTask = (task: Task) => {
    dispatch({
      type: "edit",
      payload: task,
    });
  };

  const handleDeleteTask = (id: string) => {
    dispatch({
      type: "delete",
      payload: {
        id: id,
      },
    });
  };

  return (
    <>
      <h1>Simple Todo List</h1>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        className="border border-black mr-2"
      />
      <Button
        onClick={() => {
          setText("");
          handleAddTask(text);
        }}
      >
        Add
      </Button>
      <Tasks
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </>
  );
}

export default App;
