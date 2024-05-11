const TodoListHeader = ({ onToggleAddTodo }) => {
  return (
    <div className="flex justify-between border-b border-gray-300 pb-3">
      <div className="text-gray-500">To Do List</div>
      <div className="flex items-center">
        <button onClick={onToggleAddTodo}>
          <img src="src/assets/icons/add.svg" alt="add" />
        </button>
        <button className="ml-2">
          <img src="src/assets/icons/more.svg" alt="more" />
        </button>
      </div>
    </div>
  );
};

export default TodoListHeader;
