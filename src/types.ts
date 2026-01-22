export interface Task {
  id: string;
  text: string;
  done: boolean;
}

export type Action =
  | { type: "add"; payload: Task }
  | { type: "edit"; payload: Task }
  | { type: "delete"; payload: { id: string } };

type TaskCallbacks = {
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};

export interface TaskListProps extends TaskCallbacks {
  tasks: Task[];
}

export interface TaskItemProps extends TaskCallbacks {
  task: Task;
}
