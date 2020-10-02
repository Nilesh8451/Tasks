import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await data.json();
    console.log(usersData);
    setUsers(usersData);
    return usersData;
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <h4 key={user.id}>
              <Link to={`/shop/${user.id}`}>{user.name}</Link>
            </h4>
          );
        })}
    </div>
  );
}

export default Shop;
