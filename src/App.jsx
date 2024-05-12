import { useState, useEffect } from "react";
import TodoListHeader from "./components/TodoListHeader";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const getTodosList = async () => {
  const fetchTodos = await fetch(
    "https://demo-todo.moneymatch.technology:8444/api/v1/todo/"
  );
  const response = await fetchTodos.json();
  return response.todos;
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showTodo, setShowTodo] = useState(false);

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

  const handleCompleteTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo._id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  const handleAddTodo = async (todo) => {
    try {
      const newTodo = {
        title: todo,
      };

      console.log(newTodo);

      const response = await fetch(
        "https://demo-todo.moneymatch.technology:8444/api/v1/todo/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      // call a GET request to get updated todoList
      const updatedTodos = await getTodosList();
      setTodos(updatedTodos);
    } catch (err) {
      console.error("Error adding todo:", err.message);
    }
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
