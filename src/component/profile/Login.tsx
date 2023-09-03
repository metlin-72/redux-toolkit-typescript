import React from "react";
import {useDispatch} from "react-redux";
import {login, logout} from "../../redux/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "김원기",
              age: 50,
              email: "metlin@naver.com",
              mobile: "010-8722-6806",
            })
          );
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Login;
