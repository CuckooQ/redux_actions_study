import { useEffect } from "react";

function UserList(props) {
  const { userList, init } = props;

  useEffect(() => {
    init();
  }, [init]);

  if (userList.length === 0) {
    return <p>현재 유저 정보 없음</p>;
  }

  return (
    <ul>
      {userList.map((user) => {
        return <li key={user.id}>{user.login}</li>;
      })}
    </ul>
  );
}

export default UserList;
