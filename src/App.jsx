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

  const handleCompleteAllTodos = async () => {
    try {
      const completeAllTodosPromise = todos.map(async (todo) => {
        const response = await fetch(
          `https://demo-todo.moneymatch.technology:8444/api/v1/todo/${todo._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isCompleted: true }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to complete all todos:", todo._id);
        }
      });

      await Promise.all(completeAllTodosPromise);

      const updatedTodos = await getTodosList();
      setTodos(updatedTodos);
    } catch (err) {
      console.error("Error completing all todos:", err.message);
    }
  };

  const handleCompleteTodo = async (id) => {
    try {
      const response = await fetch(
        `https://demo-todo.moneymatch.technology:8444/api/v1/todo/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isCompleted: true }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to complete todo");
      }

      const updatedTodos = await getTodosList();
      setTodos(updatedTodos);
    } catch (err) {
      console.error("Error completing todo:", err.message);
    }
  };

  const handleAddTodo = async (todo) => {
    try {
      const newTodo = {
        title: todo,
      };

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

  const handleDeleteAllTodos = async () => {
    try {
      const deleteAllTodosPromise = todos.map(async (todo) => {
        const response = await fetch(
          `https://demo-todo.moneymatch.technology:8444/api/v1/todo/${todo._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete all todos:", todo._id);
        }
      });

      await Promise.all(deleteAllTodosPromise);

      const updatedTodos = await getTodosList();
      setTodos(updatedTodos);
    } catch (err) {
      console.error("Error deleting all todos:", err.message);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const response = await fetch(
        `https://demo-todo.moneymatch.technology:8444/api/v1/todo/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to complete todo");
      }

      const updatedTodos = await getTodosList();
      setTodos(updatedTodos);
    } catch (err) {
      console.error("Error completing todo:", err.message);
    }
  };

  const handleUpdateTodo = async (id, todo) => {
    try {
      const editTodo = {
        title: todo,
      };

      const response = await fetch(
        `https://demo-todo.moneymatch.technology:8444/api/v1/todo/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editTodo),
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
          <TodoListHeader
            onToggleAddTodo={() => handleToggleTodo(true)}
            onMarkAllComplete={handleCompleteAllTodos}
            onDeleteAllTodos={handleDeleteAllTodos}
          />
          <TodoList
            showTodo={showTodo}
            completedTodos={completedTodos}
            incompleteTodos={incompleteTodos}
            onCompleteTodo={handleCompleteTodo}
            onDeleteTodo={handleDeleteTodo}
            onUpdateTodo={handleUpdateTodo}
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
