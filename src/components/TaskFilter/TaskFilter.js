const TaskFilter = ({ status, desc }) => {
  return (
    <li>
      <button className={status}>{desc}</button>
    </li>
  );
};

export default TaskFilter;
