import { useEffect, useState } from "react";
import { TaskCard } from "../common/taskCard/TaskCard";
import "./ToDoList.css";
import { BtnClear } from "../common/btnClear/BtnClear";

export const ToDoList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("taskList");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTaskList((prev) => [...prev, task]);
      setTask("");
    }
  };

  const handleData = (e) => {
    setTask(e.target.value);
  };

  const deleteTaskByIndex = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList);
  };

  const deleteAll = () => {
    setTaskList([]);
  };

  return (
    <div>
      <div id="inputTask_container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Que tenes pensado hacer?"
            id="inputTask"
            onChange={handleData}
            value={task}
          />
          <button className="addTask_btn">AÑADIR</button>
        </form>
      </div>

      <div
        id="btnClear_container"
        className={taskList.length <= 1 ? "hidden" : ""}
      >
        <BtnClear deleteAll={deleteAll} />
      </div>

      {taskList.map((e, i) => {
        return (
          <TaskCard
            key={i}
            taskName={e}
            deleteTaskByIndex={() => deleteTaskByIndex(i)}
          />
        );
      })}
    </div>
  );
};
