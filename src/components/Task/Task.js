import { formatDistanceToNow } from "date-fns";
import { formatRFC3339WithOptions } from "date-fns/fp";
import { Component } from "react";

export default class Task extends Component {
  // я бы поднял это свойство в верхний state, но не получается.
  // Пытался с верхнего index.js передать параметр time во время создания task,
  // но timestamp передаёся с ошибками, которые хз как решать.
  // Время не валидное, чтобы не делал.
  timeId = Date.now();

  state = {
    time: formatDistanceToNow(new Date(this.timeId), {
      includeSeconds: true,
    }),
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: formatDistanceToNow(new Date(this.timeId), {
        includeSeconds: true,
      }),
    });
  }

  render() {
    const {
      editing = false,
      desc = "Пусто",
      onDelete,
      onToggleCompleted,
      completed,
      time,
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
            <span className={"created"}>created {this.state.time} ago</span>
          </label>
          <button className={"icon icon-edit"}></button>
          <button className={"icon icon-destroy"} onClick={onDelete}></button>
        </div>

        {editing ? <input type="text" className={"edit"} /> : null}
      </li>
    );
  }
}
