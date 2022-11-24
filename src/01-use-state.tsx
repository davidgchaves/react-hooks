import React from "react";

export const MyComponent: React.FC = () => {
  const [myName, setMyName] = React.useState("Ada Lovelace");

  return (
    <>
      <h4>{myName}</h4>
      <input
        type="text"
        value={myName}
        onChange={e => {setMyName(e.target.value)}}
     />
    </>

  );
};