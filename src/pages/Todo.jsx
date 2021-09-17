import TodoFormContainer from "../containers/TodoFormContainer";
import TodoListContainer from "../containers/TodoListContainer";

function Todo() {
  return (
    <div>
      <h1>TODO</h1>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
}

export default Todo;
