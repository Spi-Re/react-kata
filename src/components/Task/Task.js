import { formatDistanceToNow } from "date-fns";
import { formatRFC3339WithOptions } from "date-fns/fp";
import { Component } from "react";

export default class Task extends Component {
  state = {
    completed: this.props.completed,
  };

  onCheckClick = () => {
    this.setState({
      completed: !this.state.completed,
    });
  };

  render() {
    const { editing = false, desc = "Пусто", id, onDelete } = this.props;

    const { completed } = this.state;
    let classNames = "";
    if (completed) classNames += "completed";
    if (editing) classNames += "editing";

    return (
      <li className={classNames}>
        <div className={"view"}>
          <input
            className={"toggle"}
            type="checkbox"
            defaultChecked={this.state.completed}
            onClick={this.onCheckClick}
          />
          <label>
            <span className={"description"}>{desc}</span>
            <span className={"created"}>
              created {formatDistanceToNow(new Date())} ago
            </span>
          </label>
          <button className={"icon icon-edit"}></button>
          <button
            className={"icon icon-destroy"}
            onClick={this.props.onDelete}
          ></button>
        </div>

        {editing ? (
          <input type="text" className={"edit"} value="Editing task" />
        ) : null}
      </li>
    );
  }
}
