import { get, post, patch, remove, put } from "../utils/api";

export const getTodosList = async () => {
  try {
    const response = await get("/api/v1/todo/");
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const data = await response.json();
    // return an empty array when todos are empty
    return data.todos || [];
  } catch (error) {
    console.error("Error getting todos:", error.message);
    return [];
  }
};

export const addTodo = async (todo) => {
  try {
    const response = await post("/api/v1/todo/", todo);

    if (!response.ok) {
      throw new Error("Failed to add todo");
    }
  } catch (err) {
    console.error("Error adding todo:", err.message);
  }
};

export const completeTodo = async (id) => {
  try {
    const response = await patch("/api/v1/todo/", id);

    if (!response.ok) {
      throw new Error("Failed to complete todo");
    }
  } catch (err) {
    console.error("Error completing todo:", err.message);
  }
};

export const removeTodo = async (id) => {
  try {
    const response = await remove("/api/v1/todo/", id);

    if (!response.ok) {
      throw new Error("Failed to remove todo");
    }
  } catch (err) {
    console.error("Error removing todo:", err.message);
  }
};

export const updateTodo = async (id, todo) => {
  try {
    const response = await put("/api/v1/todo/", id, todo);

    if (!response.ok) {
      throw new Error("Failed to remove todo");
    }
  } catch (err) {
    console.error("Error removing todo:", err.message);
  }
};
