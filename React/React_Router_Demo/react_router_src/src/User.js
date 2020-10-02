import React, { useEffect, useState } from "react";

function User(props) {
  const [user, setUser] = useState({});

  const fetchUsers = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${props.match.params.id}`
    );
    const usersData = await data.json();
    console.log(usersData);
    setUser(usersData);
    return usersData;
  };

  useEffect(() => {
    console.log(props.match.params.id);
    fetchUsers();
  }, []);

  return (
    user && (
      <div>
        <h2>{user?.name}</h2>
        <h3>{user?.username}</h3>
        <h4>{user?.email}</h4>
      </div>
    )
  );
}

export default User;
