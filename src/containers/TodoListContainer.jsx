import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";

function TodoListContainer() {
  const todoState = useSelector((state) => state.todo);
  return <TodoList todoList={todoState.todoList} />;
}

export default TodoListContainer;
