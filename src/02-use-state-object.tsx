import React from "react";

interface UserInfo {
  name: string;
  lastname: string;
}

type UserInfoFields = 'name' | 'lastname';

export const MyComponent2: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    name: 'Ada',
    lastname: 'Lovelace'
  });

  const onUserInfo = (field: UserInfoFields) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInfo({
        ...userInfo,
        [field]: e.target.value
      });
  };

  return (
    <>
      <h4>{userInfo.name} {userInfo.lastname}</h4>
      <input
        type="text"
        value={userInfo.name}
        onChange={onUserInfo('name')}
      />
      <input
        type="text"
        value={userInfo.lastname}
        onChange={onUserInfo('lastname')}
      />
    </>
  );
};
