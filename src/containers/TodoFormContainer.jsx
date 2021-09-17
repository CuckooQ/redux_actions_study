import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/modules/todo";

function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = (text) => {
    dispatch(addTodo(text));
  };
  return <TodoForm addTodo={add} />;
}

export default TodoFormContainer;
