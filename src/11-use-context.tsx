import React from "react";

// Context is an object
interface UserContext {
  username: string;
  setUsername: (value: string) => void;
}

export const UserContextExample = React.createContext<UserContext>({
  setUsername: (value) => {
    console.log("Provider is not injected");
  },
  username: "",
});

interface Props {
  children?: React.ReactElement;
}

export const UserContextExampleProvider: React.FC<Props> = (props: Props) => {
  const [username, setUsername] = React.useState("Ada Lovelace");

  return (
    <UserContextExample.Provider value={{ username, setUsername }}>
      {props.children}
    </UserContextExample.Provider>
  );
};
