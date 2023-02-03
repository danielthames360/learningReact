import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../../context/TodoContext";

export const TodoList = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
