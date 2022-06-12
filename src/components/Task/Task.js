import { formatDistanceToNow } from "date-fns";
import { formatRFC3339WithOptions } from "date-fns/fp";
import { Component } from "react";

export default class Task extends Component {
  render() {
    const {
      editing = false,
      desc = "Пусто",
      onDelete,
      onToggleCompleted,
      completed,
    } = this.props;

    let classNames = "";
    if (completed) classNames += "completed";
    if (editing) classNames += "editing";

    return (
      <li className={classNames}>
        <div className={"view"}>
          <input
            className={"toggle"}
            type="checkbox"
            defaultChecked={completed}
            onClick={onToggleCompleted}
          />
          <label>
            <span className={"description"}>{desc}</span>
            <span className={"created"}>
              created {formatDistanceToNow(new Date())} ago
            </span>
          </label>
          <button className={"icon icon-edit"}></button>
          <button className={"icon icon-destroy"} onClick={onDelete}></button>
        </div>

        {editing ? (
          <input type="text" className={"edit"} value="Editing task" />
        ) : null}
      </li>
    );
  }
}
