import { useState } from "react";
import TodoListHeader from "./components/TodoListHeader";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showTodo, setShowTodo] = useState(false);

  const handleToggleTodo = (bool) => {
    setShowTodo(bool);
  };

  const handleCompleteTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo._id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      <main className="h-screen w-full flex justify-center items-center ">
        <div className="w-10/12 md:w-1/4 h-auto p-4 rounded-md bg-lime-100">
          <TodoListHeader onToggleAddTodo={() => handleToggleTodo(true)} />
          <TodoList
            completedTodos={completedTodos}
            incompleteTodos={incompleteTodos}
            onComplete={handleCompleteTodo}
          />
          {showTodo && (
            <AddTodo onToggleCloseTodo={() => handleToggleTodo(false)} />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
