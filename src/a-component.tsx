import React from "react";
import { UserContextExample } from "./11-use-context";

export const AComponent: React.FC = () => {
  const context = React.useContext(UserContextExample);

  return <h3>{context.username}</h3>;
};
