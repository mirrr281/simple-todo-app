import { useState } from "react";
import Button from "./components/Button";
import type { Task } from "./types";
import { useTasks, useTasksDispatch } from "./TasksContext";

const TaskList = () => {
  const tasks = useTasks();
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </>
  );
};

export default TaskList;

type TaskProps = {
  task: Task;
};

const Task = ({ task }: TaskProps) => {
  const { id, text, done } = task;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const dispatch = useTasksDispatch();
  return (
    <div className="flex gap-3 items-center">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => {
          dispatch({
            type: "edit",
            payload: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />

      {isEdit ? (
        <input
          type="text"
          value={text}
          onChange={(e) => {
            dispatch({
              type: "edit",
              payload: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
      ) : (
        <p className="inline">{text}</p>
      )}

      <Button
        variant="danger"
        onClick={() => {
          dispatch({
            type: "delete",
            payload: {
              id: id,
            },
          });
        }}
      >
        delete
      </Button>

      <Button
        variant="primary"
        onClick={() => {
          setIsEdit((prev) => !prev);
        }}
      >
        {isEdit ? "save" : "edit"}
      </Button>
    </div>
  );
};
