import { BarsIcon } from "/src/assets/icons";
import { status } from "../helpers/taskStatus";
// import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export const TodoPage = () => {
  const { setTodoList, todoList } = useContext(TodoContext);

  const onAddTodo = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      const todo = {
        title: event.target.value,
        status: status.Pending,
        id: new Date().getTime(),
      };
      setTodoList([todo, ...todoList]);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-t from-current via-sky-900 to-stone-700 flex justify-center items-center">
        <div className="w-96 h-96 shadow-lg bg-white rounded-md p-6">
          <div className="relative text-gray-400 focus:text-gray-700">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <BarsIcon />
              </button>
            </span>
            <input
              type="text"
              name="q"
              className="pl-12 shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:font-semibold"
              placeholder="Add a new task"
              autoComplete="off"
              onKeyDown={onAddTodo}
            />
          </div>
          <div className="mt-12 h-2/3 overflow-y-scroll">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
};
