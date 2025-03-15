import React from "react";
import { Link } from "react-router-dom";
import TaskProgressBar from "./TaskProgressBar";

const TaskCard = ({ task }) => {
  const onDragStart = (e) => {
    console.log("onDragStart");
    e.dataTransfer.setData("taskId", task.id);

    // Clone the TaskCard
    const dragImage = e.currentTarget.cloneNode(true);
    document.body.appendChild(dragImage);

    // Get computed styles of the original element
    const computedStyle = window.getComputedStyle(e.currentTarget);

    // Apply width, height, padding, and margin to the clone
    dragImage.style.width = computedStyle.width;
    dragImage.style.height = computedStyle.height;
    dragImage.style.padding = computedStyle.padding;
    dragImage.style.margin = computedStyle.margin;

    // Keep it hidden from the actual DOM layout
    dragImage.style.position = "absolute";
    dragImage.style.top = "-999px";
    dragImage.style.left = "-999px";

    // Set the cloned element as the drag image
    e.dataTransfer.setDragImage(dragImage, 0, 0);

    // Remove the cloned element after the drag starts
    setTimeout(() => document.body.removeChild(dragImage), 0);
  };

  // Define progress percentage based on task status

  return (
    <article
      className="task"
      draggable
      onDragStart={(e) => onDragStart(e)}
      style={{ borderLeft: `10px solid ${task.color}` }}>
      <h3>
        <Link to={`task/${task.id}`}>{task.title}</Link>
      </h3>
      <TaskProgressBar task={task} />
    </article>
  );
};

export default TaskCard;
