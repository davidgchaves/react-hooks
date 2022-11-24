import React from "react";
import { MyComponent } from "./01-use-state";
import { MyComponent2 } from "./02-use-state-object";
import { MyComponent3 } from "./03-component-did-load";

export const App = () => {
  return (
    <>
      <MyComponent />
      <MyComponent2 />
      <MyComponent3 />
    </>
  );
};
