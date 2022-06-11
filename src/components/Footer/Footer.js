import TaskFilter from "../TaskFilter";
import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className={"footer"}>
        <span className={"todo-count"}>1 items left</span>
        <ul className={"filters"}>
          <TaskFilter status={"selected"} desc={"All"} />
          <TaskFilter desc={"Active"} />
          <TaskFilter desc={"Completed"} />
        </ul>
        <button className={"clear-completed"}>Clear completed</button>
      </footer>
    );
  }
}
