import Task from "../Task";
import { Component } from "react";

export default class TaskList extends Component {
  render() {
    return (
      <ul className={"todo-list"}>
        {this.props.todoData.map((item) => {
          return (
            <Task
              key={item.id}
              {...item}
              onDelete={() => this.props.onDelete(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
