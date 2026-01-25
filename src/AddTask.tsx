import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";
import Button from "./components/Button";

const AddTask = () => {
  const [text, setText] = useState("");

  const dispatch = useTasksDispatch();
  return (
    <div>
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
          if (text) {
            dispatch({
              type: "add",
              payload: {
                id: crypto.randomUUID(),
                text,
                done: false,
              },
            });
          }
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTask;
