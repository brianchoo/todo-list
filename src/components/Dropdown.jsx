const Dropdown = ({ children, isOpen, toggleDropdown }) => {
  return (
    <div className="relative">
      <button className="flex flex-shrink-0 ml-2" onClick={toggleDropdown}>
        <img src="src/assets/icons/more.svg" alt="more" />
      </button>
      {isOpen && (
        <div className="absolute top-6 right-0 w-400 border border-gray-100 bg-white mt-2 rounded-lg px-4 py-3 shadow-lg z-50 whitespace-nowrap">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
