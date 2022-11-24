import React from "react";
import { MyComponent1 } from "./01-use-state";
import { MyComponent2 } from "./02-use-state-object";
import { MyComponent3 } from "./03-component-did-load";
import { MyComponent4 } from "./04-component-unmount";
import { MyComponent5 } from "./05-component-update-render";
import { MyComponent6 } from "./06-ajax-field-change";
import { MyComponent7 } from "./07-custom-hook";

export const App = () => {
  return (
    <>
      <MyComponent1 />
      <MyComponent2 />
      <MyComponent3 />
      <MyComponent4 />
      <MyComponent5 />
      <MyComponent6 />
      <MyComponent7 />
    </>
  );
};
