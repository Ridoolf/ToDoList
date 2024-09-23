import "./TaskCard.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";

export const TaskCard = ({ taskName, deleteTaskByIndex }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheck = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={`taskCard_container ${isCompleted ? "completed" : ""}`}>
      <h2>{taskName}</h2>
      <button onClick={handleCheck} className="btn_task">
        <CheckCircleOutlineIcon className="checkIcon" />
      </button>
      <button onClick={deleteTaskByIndex} className="btn_task">
        <DeleteOutlineIcon className="deleteIcon" />
      </button>
    </div>
  );
};
