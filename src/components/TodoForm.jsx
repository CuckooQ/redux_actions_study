import { useRef } from "react";

function TodoForm(props) {
  const inputRef = useRef();
  const click = (e) => {
    e.preventDefault();
    props.addTodo(inputRef.current.value);
  };
  return (
    <form>
      <label>
        <input ref={inputRef} type="text" />
      </label>
      <button onClick={click}>추가</button>
    </form>
  );
}

export default TodoForm;
