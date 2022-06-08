import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className={"todoapp"}>
      <NewTaskForm />
      <section className={"main"}>
        <TaskList />
        <Footer />
      </section>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
