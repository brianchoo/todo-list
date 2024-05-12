const BASE_URL = "https://demo-todo.moneymatch.technology:8444";

export const get = async (path) => {
  const response = await fetch(`${BASE_URL}${path}`);
  return response;
};

export const post = async (path, todo) => {
  const newTodo = {
    title: todo,
  };

  const response = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  return response;
};

export const patch = async (path, id) => {
  const response = await fetch(`${BASE_URL}${path}${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isCompleted: true }),
  });

  return response;
};

export const remove = async (path, id) => {
  const response = await fetch(`${BASE_URL}${path}${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const put = async (path, id, todo) => {
  const editTodo = {
    title: todo,
  };

  const response = await fetch(`${BASE_URL}${path}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editTodo),
  });

  return response;
};
