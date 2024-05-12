import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  onDeleteTodo,
  onCompleteTodo,
  onUpdateTodo,
  incompleteTodos,
  completedTodos,
  showTodo,
}) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [updateTodo, setUpdateTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleDropdown = (dropdownId) => {
    setOpenDropdownId((prevDropdownId) =>
      prevDropdownId === dropdownId ? null : dropdownId
    );
  };

  const handleInputChange = (e) => {
    setUpdateTodo(e.target.value);
  };

  const toggleIsEditing = (todoId, todoTitle) => {
    setIsEditing(todoId);
    setUpdateTodo(todoTitle);
    setOpenDropdownId(null);
  };

  const toggleCloseEditing = () => {
    setIsEditing(false);
  };

  const handleUpdateTodo = (id, todo) => {
    onUpdateTodo(id, todo);
    setIsEditing(false);
  };

  return (
    <>
      {incompleteTodos?.length > 0 && (
        <ul className="px-4">
          {incompleteTodos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              isEditing={isEditing}
              updateTodo={updateTodo}
              handleInputChange={handleInputChange}
              handleUpdateTodo={handleUpdateTodo}
              toggleCloseEditing={toggleCloseEditing}
              onCompleteTodo={onCompleteTodo}
              openDropdownId={openDropdownId}
              handleToggleDropdown={handleToggleDropdown}
              toggleIsEditing={toggleIsEditing}
              onDeleteTodo={onDeleteTodo}
              completed={todo.isCompleted}
            />
          ))}
        </ul>
      )}

      {completedTodos.length > 0 && <hr className="mx-4" />}

      {completedTodos?.length > 0 && !showTodo && (
        <ul className="px-4">
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              openDropdownId={openDropdownId}
              handleToggleDropdown={handleToggleDropdown}
              onDeleteTodo={onDeleteTodo}
              completed={todo._id}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
