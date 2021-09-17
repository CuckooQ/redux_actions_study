import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersStart } from "../redux/modules/user";

function UserListContainer() {
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const init = useCallback(() => {
    dispatch(getUsersStart());
  }, [dispatch]);
  console.log(userState);
  return <UserList userList={userState.userList} init={init} />;
}

export default UserListContainer;
