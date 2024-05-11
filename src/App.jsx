import TodoListHeader from "./components/TodolistHeader";

const App = () => {
  return (
    <>
      <main className="h-screen w-full flex justify-center items-center ">
        <div className="w-10/12 md:w-1/4 h-auto p-4 rounded-md bg-lime-100">
          <TodoListHeader />
        </div>
      </main>
    </>
  );
};

export default App;
