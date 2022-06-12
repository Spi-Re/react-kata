import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      {
        desc: "Completed task",
        completed: true,
        id: 1,
      },
      { desc: "Editing task", completed: false, editing: false, id: 2 },
      { desc: "Active task", completed: false, id: 3 },
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

  onAddItem = (desc) => {
    this.setState(({ todoData }) => {
      const newItem = {
        desc,
        completed: false,
        editing: false,
        id: this.maxId++,
      };
      const newArr = [...todoData, newItem];
      this.myArr = newArr;
      return {
        todoData: newArr,
      };
    });
  };

  //   ===============================
  myArr = [...this.state.todoData];
  onAllItem = () => {
    this.setState({
      todoData: this.myArr,
    });
  };

  onActive = () => {
    this.setState(() => {
      return {
        todoData: this.myArr.filter((el) => !el.completed),
      };
    });
  };

  onComplete = () => {
    this.setState(() => {
      return {
        todoData: this.myArr.filter((el) => el.completed),
      };
    });
  };
  // ===========================================

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, completed: !oldItem.completed };

      const newArr = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];
      this.myArr = newArr;
      return {
        todoData: newArr,
      };
    });
  };

  todoCount = () => {
    const length = this.myArr.filter((el) => !el.completed).length;
    return length;
  };

  todoClear = () => {
    this.setState(() => {
      this.myArr = [];
      return {
        todoData: [],
      };
    });
  };

  render() {
    return (
      <section className={"todoapp"}>
        <NewTaskForm onAddItem={this.onAddItem} />
        <section className={"main"}>
          <TaskList
            todoData={this.state.todoData}
            onDelete={this.onDelete}
            onToggleCompleted={this.onToggleCompleted}
          />
          <Footer
            todoClear={this.todoClear}
            todoCount={this.todoCount}
            onAll={this.onAllItem}
            onActive={this.onActive}
            onComplete={this.onComplete}
          />
        </section>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
