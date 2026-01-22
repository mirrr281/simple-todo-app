import React, { useState } from "react";
import Button from "./components/Button";
import type { Task } from "./types";

interface TasksProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const Tasks: React.FC<TasksProps> = ({ tasks, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <>
      {tasks.map((task) => {
        const { id, text, done }: Task = task;
        return (
          <>
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
          </>
        );
      })}
    </>
  );
};

export default Tasks;
