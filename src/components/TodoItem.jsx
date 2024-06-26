import Dropdown from "./Dropdown";

const TodoItem = ({
  todo,
  isEditing,
  updateTodo,
  handleInputChange,
  handleUpdateTodo,
  toggleCloseEditing,
  onCompleteTodo,
  openDropdownId,
  handleToggleDropdown,
  toggleIsEditing,
  onDeleteTodo,
  completed,
}) => {
  return (
    <li key={todo._id} className="flex my-7">
      <div className="flex justify-between w-full">
        {isEditing === todo._id ? (
          <div className="relative w-full">
            <div className="flex">
              <img
                className="flex"
                src="src/assets/icons/checkbox.svg"
                alt="more"
              />
              <input
                onChange={handleInputChange}
                type="text"
                name="title"
                value={updateTodo}
                className="block w-full rounded-md border py-1.5 pl-3 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-lime-200 focus:border focus:border-lime-500 ml-2"
              />
            </div>

            <div className="flex justify-end mt-1 absolute right-0 z-50">
              <div
                className="flex flex-shrink-0 justify-center items-center mr-2 bg-gray-200 w-8 h-8 cursor-pointer rounded-md hover:bg-gray-300"
                onClick={() => handleUpdateTodo(todo._id, updateTodo)}
              >
                <img
                  className="w-5"
                  src="src/assets/icons/edit-confirm.svg"
                  alt="edit-confirm"
                />
              </div>
              <div
                className="flex flex-shrink-0 justify-center items-center mr-2 bg-gray-200 w-8 h-8 cursor-pointer rounded-md hover:bg-gray-300"
                onClick={toggleCloseEditing}
              >
                <img
                  className="w-6 mt-1"
                  src="src/assets/icons/edit-cancel.svg"
                  alt="edit-cancel"
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            {completed ? (
              <div className="flex items-start line-through">
                <div className="flex flex-shrink-0 relative">
                  <img
                    className="flex"
                    src="src/assets/icons/checkbox-selected.svg"
                    alt="more"
                  />
                  <img
                    className="top-1/4 left-1/4 absolute"
                    src="src/assets/icons/checkmark.svg"
                    alt="more"
                  />
                </div>
                <p
                  className={`${
                    todo.isCompleted && "text-gray-400"
                  } -mt-1 ml-2`}
                >
                  {todo.title}
                </p>
              </div>
            ) : (
              <div
                className="flex items-start cursor-pointer"
                onClick={() => onCompleteTodo(todo._id)}
              >
                <img
                  className="flex"
                  src="src/assets/icons/checkbox.svg"
                  alt="more"
                />
                <p className="-mt-1 ml-2">{todo.title}</p>
              </div>
            )}
          </>
        )}

        <Dropdown
          width={"w-40"}
          isOpen={openDropdownId === todo._id}
          toggleDropdown={() => handleToggleDropdown(todo._id)}
        >
          {!completed && (
            <div className="text-gray-400 py-2 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2">
              <div className="flex flex-shrink-0 mr-2">
                <img
                  className="w-6"
                  src="src/assets/icons/edit.svg"
                  alt="add"
                />
              </div>
              <div onClick={() => toggleIsEditing(todo._id, todo.title)}>
                Edit Item
              </div>
            </div>
          )}
          <div className="text-gray-400 py-2 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2">
            <div className="flex flex-shrink-0 mr-2">
              <img src="src/assets/icons/delete.svg" alt="add" />
            </div>
            <div onClick={() => onDeleteTodo(todo._id)}>Delete Item</div>
          </div>
        </Dropdown>
      </div>
    </li>
  );
};

export default TodoItem;
