import type { Draft } from "immer";
import type { Action, Task } from "./types";

export const taskReducer = (draft: Draft<Task[]>, action: Action) => {
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
