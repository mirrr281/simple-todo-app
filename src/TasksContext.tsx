import type { Draft } from "immer";
import type { Action, Task } from "./types";
import { createContext, useContext, type ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import { initialState } from "./initalState";

export const TasksContext = createContext<Task[] | null>(null);
export const TasksDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);

type Props = {
  children: ReactNode;
};

export function TasksProvider({ children }: Props) {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within TasksProvider");
  }
  return context;
}

export function useTasksDispatch() {
  const context = useContext(TasksDispatchContext);
  if (!context) {
    throw new Error("useTasksDispatch must be used within TasksProvider");
  }
  return context;
}

export const tasksReducer = (draft: Draft<Task[]>, action: Action) => {
  switch (action.type) {
    case "add": {
      draft.push({
        ...action.payload,
      });
      break;
    }
    case "edit": {
      const index = draft.findIndex((t) => t.id === action.payload.id);
      draft[index] = action.payload;
      break;
    }
    case "delete": {
      return draft.filter((t) => t.id !== action.payload.id);
    }
    default: {
      throw Error("Unknown action");
    }
  }
};
