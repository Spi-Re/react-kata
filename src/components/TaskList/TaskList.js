import Task from "../Task";
import { Component } from "react";

export default class TaskList extends Component {
  render() {
    const { onToggleCompleted, onDelete, todoData } = this.props;
    return (
      <ul className={"todo-list"}>
        {todoData.map((item) => {
          return (
            <Task
              key={item.id}
              {...item}
              onDelete={() => onDelete(item.id)}
              onToggleCompleted={() => onToggleCompleted(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
