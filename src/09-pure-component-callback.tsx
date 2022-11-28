import React from "react";

interface Props {
  onReset: () => void;
}

const ResetValue: React.FC<Props> = React.memo((props: Props) => {
  console.log("Only renders the first time; check React.memo + callback");
  return <button onClick={props.onReset}>Reset Value</button>;
});

export const MyComponent9 = () => {
  const [username, setUserName] = React.useState("Ada");
  const [lastname, setLastName] = React.useState("Ada");

  const resetNameCallback = React.useCallback(() => {
    setUserName("");
  }, []);

  return (
    <>
      <h3>
        {username} {lastname}
      </h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <ResetValue onReset={resetNameCallback} />
    </>
  );
};
