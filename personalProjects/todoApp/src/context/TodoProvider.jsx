import { useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        {" "}
        {children}{" "}
      </TodoContext.Provider>
    </>
  );
};
