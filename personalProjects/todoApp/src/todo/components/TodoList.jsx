import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList, setTodoList }) => {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoItem key={item.id} {...item} setTodoList={setTodoList} />
      ))}
    </ul>
  );
};
