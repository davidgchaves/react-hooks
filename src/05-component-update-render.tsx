import React from "react";

const MyChildComponent = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "Ada",
    lastname: "Lovelace",
  });

  React.useEffect(() => {
    console.log("A. Called right after every render");

    return () => {
      console.log("B. Clean Up");
    };
  });

  return (
    <div>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <input
        type="text"
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        type="text"
        value={userInfo.lastname}
        onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
      />
    </div>
  );
};

export const MyComponent5 = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <br />
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>Toggle Visible</button>
    </>
  );
};
