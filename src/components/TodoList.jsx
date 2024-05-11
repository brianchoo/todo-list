const TodoList = ({ onComplete, incompleteTodos, completedTodos }) => {
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
                <button className="flex flex-shrink-0 ml-2">
                  <img src="src/assets/icons/more.svg" alt="more" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {completedTodos.length > 0 && <hr className="mx-4" />}

      {completedTodos?.length > 0 && (
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

                  <p className="-mt-1 ml-2">{todo.title}</p>
                </div>
                <button className="flex flex-shrink-0 ml-2">
                  <img src="src/assets/icons/more.svg" alt="more" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
