function TodoList(props) {
  const { todoList } = props;

  return (
    <ul>
      {todoList.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
