import Dropdown from "./Dropdown";

const TodoListHeader = ({
  onToggleAddTodo,
  onMarkAllComplete,
  onDeleteAllTodos,
  toggleDropdown,
  setToggleDropdown,
}) => {
  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <div className="flex justify-between border-b border-gray-300 pb-3">
      <div className="text-gray-500">To Do List</div>
      <div className="flex items-center">
        <button onClick={onToggleAddTodo}>
          <img src="src/assets/icons/add.svg" alt="add" />
        </button>
        <Dropdown isOpen={toggleDropdown} toggleDropdown={handleToggleDropdown}>
          <div
            className="text-gray-400 p-2 cursor-pointer hover:bg-gray-100 rounded-lg"
            onClick={onDeleteAllTodos}
          >
            Delete Entire List
          </div>
          <div
            className="text-gray-400 p-2 cursor-pointer hover:bg-gray-100 rounded-lg"
            onClick={onMarkAllComplete}
          >
            Mark as all complete
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default TodoListHeader;
