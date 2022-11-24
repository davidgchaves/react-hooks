import React from "react";

interface Props {
  name: string;
}

/* The Pure Component memoized */
const DisplayName = React.memo((props: Props) => {
  console.log("re-rendered when name gets updated");

  return <h3>{props.name}</h3>;
});

export const MyComponent8 = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "Ada",
    lastname: "Lovelace",
  });

  return (
    <>
      <DisplayName name={userInfo.name} />
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
    </>
  );
};
