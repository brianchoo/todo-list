import { useState } from "react";
import Dropdown from "./Dropdown";

const TodoList = ({
  onDelete,
  onComplete,
  incompleteTodos,
  completedTodos,
  showTodo,
}) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleToggleDropdown = (dropdownId) => {
    setOpenDropdownId((prevDropdownId) =>
      prevDropdownId === dropdownId ? null : dropdownId
    );
  };

  return (
    <>
      {incompleteTodos?.length > 0 && (
        <ul className="px-4">
          {incompleteTodos.map((todo) => (
            <li key={todo._id} className="flex my-7">
              <div className="flex justify-between w-full">
                <div
                  className="flex items-start cursor-pointer"
                  onClick={() => onComplete(todo._id)}
                >
                  <img
                    className="flex"
                    src="src/assets/icons/checkbox.svg"
                    alt="more"
                  />
                  <p className="-mt-1 ml-2">{todo.title}</p>
                </div>
                <Dropdown
                  width={"w-40"}
                  isOpen={openDropdownId === todo._id}
                  toggleDropdown={() => handleToggleDropdown(todo._id)}
                >
                  <div className="text-gray-400 py-2 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2">
                    <div className="flex flex-shrink-0 mr-2">
                      <img
                        className="w-6"
                        src="src/assets/icons/edit.svg"
                        alt="add"
                      />
                    </div>
                    <div>Edit Item</div>
                  </div>
                  <div className="text-gray-400 py-2 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2">
                    <div className="flex flex-shrink-0 mr-2">
                      <img src="src/assets/icons/delete.svg" alt="add" />
                    </div>
                    <div onClick={() => onDelete(todo._id)}>Delete Item</div>
                  </div>
                </Dropdown>
              </div>
            </li>
          ))}
        </ul>
      )}

      {completedTodos.length > 0 && <hr className="mx-4" />}

      {completedTodos?.length > 0 && !showTodo && (
        <ul className="px-4">
          {completedTodos.map((todo) => (
            <li key={todo._id} className="flex my-7 line-through">
              <div className="flex justify-between w-full">
                <div className="flex items-start">
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
                <Dropdown
                  width={"w-40"}
                  isOpen={openDropdownId === todo._id}
                  toggleDropdown={() => handleToggleDropdown(todo._id)}
                >
                  <div className="text-gray-400 py-2 flex items-center cursor-pointer hover:bg-gray-100 rounded-lg px-2">
                    <div className="flex flex-shrink-0 mr-2">
                      <img src="src/assets/icons/delete.svg" alt="add" />
                    </div>
                    <div onClick={() => onDelete(todo._id)}>Delete Item</div>
                  </div>
                </Dropdown>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
