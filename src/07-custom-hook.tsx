import React from "react";

const useUsers = (url?: string) => {
  const [filter, setFilter] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const loadCollection = () => {
    fetch(`${url}${filter}`)
      .then((r) => r.json())
      .then((json) => setUsers(json));
  };

  return {
    users,
    loadCollection,
    filter,
    setFilter,
  };
};

export const MyComponent7 = () => {
  const { users, loadCollection, filter, setFilter } = useUsers(
    "https://jsonplaceholder.typicode.com/users?name_like="
  );

  React.useEffect(() => {
    loadCollection();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
