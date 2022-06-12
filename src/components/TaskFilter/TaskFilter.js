const TaskFilter = ({ status, desc, onFilter }) => {
  return (
    <li>
      <button className={status} onClick={onFilter}>
        {desc}
      </button>
    </li>
  );
};

export default TaskFilter;
