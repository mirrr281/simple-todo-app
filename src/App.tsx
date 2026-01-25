import { TasksProvider } from "./TasksContext";
import Tasks from "./Tasks";
import "./App.css";
import AddTask from "./AddTask";

function App() {
  return (
    <>
      <TasksProvider>
        <AddTask />
        <Tasks />
      </TasksProvider>
    </>
  );
}

export default App;
