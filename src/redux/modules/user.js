import { createActions, handleActions } from "redux-actions";

/* ACTION TYPES */
export const ACTION_TYPE_PREFIX = "cuckooQ/redux-action-study/user";
export const GET_USERS_START = "GET_USERS_START";

/* ACTION CREATORS */
export const { getUsersSuccess, getUsersFail, getUsersStart } = createActions(
  {
    GET_USERS_SUCCESS: (data) => ({ data }),
    GET_USERS_FAIL: (error) => ({ error }),
  },
  GET_USERS_START,
  {
    prefix: ACTION_TYPE_PREFIX,
  }
);

/* REDUCER */
const initState = {
  userList: [],
  loading: false,
  error: null,
};
const reducer = handleActions(
  {
    GET_USERS_START: (prevState, action) => {
      const newState = { ...prevState };
      newState.userList = [];
      newState.loading = true;
      newState.error = null;
      return newState;
    },
    GET_USERS_SUCCESS: (prevState, action) => {
      const newState = { ...prevState };
      newState.userList = action.payload.data;
      newState.loading = false;
      newState.error = null;
      return newState;
    },
    GET_USERS_FAIL: (prevState, action) => {
      const newState = { ...prevState };
      newState.userList = [];
      newState.loading = false;
      newState.error = action.payload.error;
      return newState;
    },
  },
  initState,
  { prefix: ACTION_TYPE_PREFIX }
);

export default reducer;
