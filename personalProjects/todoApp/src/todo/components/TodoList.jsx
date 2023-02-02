import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../../store/TodoContext";

export const TodoList = () => {
  const { todoList, setTodoList } = useContext(TodoContext);

  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
