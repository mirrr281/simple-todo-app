import { useState } from "react";
import Button from "./components/Button";
import type { TaskItemProps, TaskListProps } from "./types";

const TaskList = ({ tasks, onEdit, onDelete }: TaskListProps) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Tasks
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default TaskList;

const Tasks = ({ task, onEdit, onDelete }: TaskItemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { id, text, done } = task;
  return (
    <div className="flex gap-3 items-center">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => {
          onEdit({
            ...task,
            done: e.target.checked,
          });
        }}
      />

      {isEdit ? (
        <input
          type="text"
          value={text}
          onChange={(e) => {
            onEdit({
              ...task,
              text: e.target.value,
            });
          }}
        />
      ) : (
        <p className="inline">{text}</p>
      )}

      <Button
        variant="danger"
        onClick={() => {
          onDelete(id);
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
