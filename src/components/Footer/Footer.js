import TaskFilter from "../TaskFilter";
import { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static defaultProps = {
    todoCount: () => {},
    todoClear: () => {},
  };

  static propTypes = {
    todoCount: PropTypes.func,
    todoClear: PropTypes.func,
    onAll: PropTypes.func.isRequired,
    onActive: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
  };

  render() {
    const { onAll, onActive, onComplete, todoCount, todoClear } = this.props;

    return (
      <footer className={"footer"}>
        <span className={"todo-count"}>{todoCount()} items left</span>
        <ul className={"filters"}>
          <TaskFilter status={"selected"} desc={"All"} onFilter={onAll} />
          <TaskFilter status={""} desc={"Active"} onFilter={onActive} />
          <TaskFilter status={""} desc={"Completed"} onFilter={onComplete} />
        </ul>
        <button className={"clear-completed"} onClick={todoClear}>
          Clear completed
        </button>
      </footer>
    );
  }
}
