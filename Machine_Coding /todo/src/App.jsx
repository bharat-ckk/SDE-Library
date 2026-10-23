import { useState } from "react";
import "./App.css";

function App() {
  const [taskInfo, setTaskInfo] = useState({
    id: "",
    title: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const [taskList, setTaskList] = useState([
    { id: "1", title: "Login", description: "Build login page." },
    { id: "2", title: "Signup", description: "Create signup form." },
    { id: "3", title: "Dashboard", description: "Build dashboard UI." },
    { id: "4", title: "API", description: "Integrate REST API." },
    { id: "5", title: "Search", description: "Add search feature." },
    { id: "6", title: "Filter", description: "Filter task list." },
    { id: "7", title: "Pagination", description: "Add page navigation." },
    { id: "8", title: "Testing", description: "Test UI components." },
    { id: "9", title: "Optimize", description: "Improve performance." },
    { id: "10", title: "Deploy", description: "Deploy the app." },
  ]);

  const onChangeTaskInfo = (val, type) => {
    setTaskInfo((prev) => {
      return { ...prev, [type]: val };
    });
  };
  const onCreate = () => {
    if (!taskInfo.description || !taskInfo.title) {
      setError(true);
      return;
    }
    if(taskInfo.id) {
      setTaskList((prev) => 
        prev.map((task) => 
         taskInfo.id === task.id ? { ...task, ...taskInfo } : task
        )
      );
      console.log(taskList)
    } else {
      setTaskList((prev) => [...prev, { ...taskInfo, id: Date.now() }]);
    }
    onCancel();
  };
  const onCancel = () => {
    setError(false);
    setTaskInfo({
      id: "",
      title: "",
      description: "",
    });
  };
  const onRemove = (taskId) => {
    let updatedList = taskList.filter((task) => taskId !== task.id);
    setTaskList(updatedList);
  };
  const onEdit = (taskId) => {
    let editableTask = taskList.filter((task) => task.id === taskId);
    console.log(...editableTask);
    setTaskInfo(...editableTask);
  };
  return (
    <>
      <h1 className="app-title">Todo App</h1>
      <div className="add-task">
        <h3>Add Task</h3>
        <div>
          <label>title</label>
          <input
            value={taskInfo.title}
            onChange={(e) => onChangeTaskInfo(e.target.value, "title")}
            placeholder="Enter task title"
          />
        </div>
        <div>
          <label>Description</label>
          <input
            value={taskInfo.description}
            onChange={(e) => onChangeTaskInfo(e.target.value, "description")}
            placeholder="Enter task title"
          />
        </div>
        {error && (
          <div className="error"> Please enter title and description</div>
        )}
        <div>
          <button onClick={() => onCreate()}>create</button>
          <button onClick={() => onCancel()}>cancel</button>
        </div>
      </div>
      <div className="task-list">
        <h3>Task List</h3>
        {taskList.length > 0 &&
          taskList.map((task, idx) => (
            <div>
              <span>{idx + 1}.</span>
              <span>Tilte :{task?.title}</span> ||
              <span>Description: {task?.description}</span> ||
              <button onClick={() => onRemove(task.id)}>remove</button>
              <button onClick={() => onEdit(task.id)}>edit</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
