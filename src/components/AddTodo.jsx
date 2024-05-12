import { useState } from "react";

const AddTodo = ({ onToggleCloseTodo, onAddTodo }) => {
  const [inputTodo, setInputTodo] = useState("");

  const handleInputChange = (e) => {
    setInputTodo(e.target.value);
  };

  return (
    <div className="mt-4">
      <input
        onChange={handleInputChange}
        type="text"
        name="title"
        className="block w-full rounded-md border py-1.5 pl-4 ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-lime-200 focus:border focus:border-lime-500"
        placeholder="What needs to be done?"
      />
      <div className="flex justify-end mt-5">
        <button onClick={onToggleCloseTodo} className="hover:underline">
          Cancel
        </button>
        <button
          className="bg-green-400 hover:text-white text-green-700 font-semibold py-1.5 px-4 rounded-md disabled:bg-gray-200 disabled:text-gray-300 disabled:border-slate-200 disabled:shadow-none ml-4"
          disabled={!inputTodo.trim()}
          onClick={() => onAddTodo(inputTodo)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
