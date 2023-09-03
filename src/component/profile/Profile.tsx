import React from "react";
import {useSelector} from "react-redux";

const Profile = () => {
  const user = useSelector((state: any) => state.user.value);
  const themeColor = useSelector((state: any) => state.theme.value)

  return (
    <div style={{color: themeColor}}>
      <h1>Profile Page</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>email: {user.email}</p>
      <p>mobile: {user.mobile}</p>
    </div>
  );
};

export default Profile;
