import { XIcon } from "/src/assets/icons";
import { status as Status } from "../helpers/taskStatus";
import { useContext } from "react";
import { TodoContext } from "../../store/TodoContext";

export const TodoItem = ({ id, title, status }) => {
  const { setTodoList } = useContext(TodoContext);

  const onDelete = () => {
    setTodoList((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const onComplete = () => {
    setTodoList((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, status: Status.Completed };
        }
        return item;
      });
      return updatedItems;
    });
  };

  return (
    <li
      className={`p-2 border-b border-b-gray-300 flex justify-between cursor-pointer ${
        status === Status.Completed ? "line-through bg-green-200" : ""
      }`}
      onClick={onComplete}
    >
      <span>{title}</span>
      <button className="hover:scale-125" onClick={onDelete}>
        <XIcon />
      </button>
    </li>
  );
};
