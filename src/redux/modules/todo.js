import { createActions, handleActions } from "redux-actions";

/* ACTION CREATORS */
const ACTION_TYPE_PREFIX = "cuckooQ/redux-action-study/todo";
export const { addTodo, completeTodo, showAll, showComplete } = createActions(
  {
    ADD_TODO: (text) => ({ text }),
    COMPLETE_TODO: (id) => ({ id }),
  },
  "SHOW_ALL",
  "SHOW_COMPLETE",
  {
    prefix: ACTION_TYPE_PREFIX,
  }
);

/* REDUCER */
const FILTER = {
  ALL: "ALL",
  COMPELTE: "COMPLETE",
};
const initState = {
  todoList: [],
  showingTodoList: [],
  filter: "ALL",
};
const reducer = handleActions(
  {
    ADD_TODO: (prevState, action) => {
      const newState = { ...prevState };
      const todo = {
        id: newState.todoList.length,
        title: action.payload.text,
        done: false,
      };
      newState.todoList = [...newState.todoList, todo];
      newState.showingTodoList = [...newState.todoList];
      newState.filter = FILTER.ALL;
      return newState;
    },
    COMPLETE_TODO: (prevState, action) => {
      const newState = { ...prevState };
      const idx = newState.todoList.findIndex(
        (todo) => todo.payload.id === action.payload.id
      );
      if (idx >= 0) {
        newState.todoList[idx].done = true;
        newState.showingTodoList = [...newState.todoList];
        newState.filter = FILTER.ALL;
      }
      return newState;
    },
    SHOW_ALL: (prevState, action) => {
      const newState = { ...prevState };
      const idx = newState.todoList.findIndex((todo) => todo.id === action.id);
      if (idx >= 0) {
        newState.todoList[idx].done = true;
        newState.showingTodoList = [...newState.todoList];
        newState.filter = FILTER.ALL;
      }
      return newState;
    },
    SHOW_COMPLETE: (prevState, action) => {
      const newState = { ...prevState };
      newState.filter = FILTER.COMPELTE;
      newState.showingTodoList = [
        ...newState.todoList.filter((todo) => todo.done === true),
      ];
      return newState;
    },
  },
  initState,
  { prefix: ACTION_TYPE_PREFIX }
);

export default reducer;
