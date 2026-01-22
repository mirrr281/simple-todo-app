export interface Task {
  id: string;
  text: string;
  done: boolean;
}

export type Action =
  | { type: "add"; payload: Task }
  | { type: "edit"; payload: Task }
  | { type: "delete"; payload: { id: string } };