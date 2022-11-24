import React from "react";

const MyChildComponent = () => {
  React.useEffect(() => {
    console.log("Mounting");
    return () => console.log("Unmounting");
  }, []);

  return <h4>Hi from Child Component</h4>;
};

export const MyComponent4 = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <br />
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>Toggle Visible</button>
    </>
  );
};
