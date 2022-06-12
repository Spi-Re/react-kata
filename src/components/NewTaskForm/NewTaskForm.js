const NewTaskForm = ({ onAddItem }) => {
  return (
    <header className={"header"}>
      <h1>todos</h1>
      <input
        className={"new-todo"}
        placeholder="What needs to be done?"
        autofocus
        onKeyDown={(e) => {
          if (e.keyCode == 13) {
            onAddItem(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </header>
  );
};

export default NewTaskForm;
