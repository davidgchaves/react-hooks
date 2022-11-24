import React from "react";
import { useDebounce } from "use-debounce";

export const MyComponent6 = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${debouncedFilter}`
    )
      .then((r) => r.json())
      .then((json) => setUsers(json));
  }, [debouncedFilter]);

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
