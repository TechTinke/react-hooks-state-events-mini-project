function Task({ task, onDeleteTask }) {
  return (
    <li className="task">
      <span>
        {task.text} - {task.category}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
