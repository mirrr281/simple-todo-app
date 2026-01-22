import type { Task } from "./types";

export const initialState: Task[] = [
  {
    id: crypto.randomUUID(),
    text: "eat",
    done: false,
  },
];
