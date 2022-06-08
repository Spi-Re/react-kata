import Task from "../Task";

const TaskList = () => {
  return (
    <ul className={"todo-list"}>
      <Task status={"completed"} desc={"Completed task"} time={"17 seconds"} />
      <Task status={"editing"} desc={"Editing task"} time={"5 minutes"} />
      <Task desc={"Active task"} time={"5 minutes"} />
    </ul>
  );
};

export default TaskList;
