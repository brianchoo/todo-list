import { useState, useEffect } from "react";
import TodoListHeader from "./components/TodoListHeader";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {
  getTodosList,
  addTodo,
  completeTodo,
  removeTodo,
  updateTodo,
} from "./services/todoService";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showTodo, setShowTodo] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  useEffect(() => {
    const fetchData = async () => {
      const todosData = await getTodosList();
      setTodos(todosData);
    };

    fetchData();
  }, []);

  const handleToggleTodo = (bool) => {
    setShowTodo(bool);
  };

  const handleAddTodo = async (todo) => {
    await addTodo(todo);
    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = async (id) => {
    await completeTodo(id);
    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
  };

  const handleCompleteAllTodos = async () => {
    const completeAllTodosPromise = todos.map(async (todo) => {
      await completeTodo(todo._id);
    });

    await Promise.all(completeAllTodosPromise);
    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
    setToggleDropdown(false);
  };

  const handleDeleteTodo = async (id) => {
    await removeTodo(id);
    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
  };

  const handleDeleteAllTodos = async () => {
    const deleteAllTodosPromise = todos.map(async (todo) => {
      await removeTodo(todo._id);
    });

    await Promise.all(deleteAllTodosPromise);

    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
    setToggleDropdown(false);
  };

  const handleUpdateTodo = async (id, todo) => {
    await updateTodo(id, todo);
    const updatedTodos = await getTodosList();
    setTodos(updatedTodos);
  };

  const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      <main className="h-screen w-full flex justify-center items-center ">
        <div className="w-10/12 md:w-1/4 h-auto p-4 rounded-md bg-lime-100">
          <TodoListHeader
            onToggleAddTodo={() => handleToggleTodo(true)}
            onMarkAllComplete={handleCompleteAllTodos}
            onDeleteAllTodos={handleDeleteAllTodos}
            toggleDropdown={toggleDropdown}
            setToggleDropdown={handleToggleDropdown}
          />
          {todos.length > 0 ? (
            <TodoList
              showTodo={showTodo}
              completedTodos={completedTodos}
              incompleteTodos={incompleteTodos}
              onCompleteTodo={handleCompleteTodo}
              onDeleteTodo={handleDeleteTodo}
              onUpdateTodo={handleUpdateTodo}
            />
          ) : (
            <p className="mt-2">Start by adding a new todo!</p>
          )}

          {showTodo && (
            <AddTodo
              onToggleCloseTodo={() => handleToggleTodo(false)}
              onAddTodo={handleAddTodo}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
