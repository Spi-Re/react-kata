import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    todoData: [
      { desc: "Completed task", completed: true, id: 1 },
      { desc: "Editing task", editing: false, id: 2 },
      { desc: "Active task", id: 3 },
    ],
  };

  onDelete = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };
  render() {
    return (
      <section className={"todoapp"}>
        <NewTaskForm />
        <section className={"main"}>
          <TaskList todoData={this.state.todoData} onDelete={this.onDelete} />
          <Footer />
        </section>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
