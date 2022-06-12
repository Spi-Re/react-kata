import TaskFilter from "../TaskFilter";
import { Component } from "react";

export default class Footer extends Component {
  render() {
    const { onAll, onActive, onComplete, todoCount, todoClear } = this.props;
    const classNames = "";
    return (
      <footer className={"footer"}>
        <span className={"todo-count"}>{todoCount()} items left</span>
        <ul className={"filters"}>
          <TaskFilter status={"selected"} desc={"All"} onFilter={onAll} />
          <TaskFilter desc={"Active"} onFilter={onActive} />
          <TaskFilter desc={"Completed"} onFilter={onComplete} />
        </ul>
        <button className={"clear-completed"} onClick={todoClear}>
          Clear completed
        </button>
      </footer>
    );
  }
}
