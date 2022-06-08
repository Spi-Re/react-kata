import { formatDistanceToNow } from "date-fns";

const Task = ({ status, desc = "Пустота:(", time }) => {
  return (
    <li className={status}>
      <div className={"view"}>
        <input className={"toggle"} type="checkbox" />
        <label>
          <span className={"description"}>{desc}</span>
          <span className={"created"}>
            created {formatDistanceToNow(new Date())} ago
          </span>
        </label>
        <button className={"icon icon-edit"}></button>
        <button className={"icon icon-destroy"}></button>
      </div>

      {status === "editing" ? (
        <input type="text" className={"edit"} value="Editing task" />
      ) : null}
    </li>
  );
};

export default Task;
