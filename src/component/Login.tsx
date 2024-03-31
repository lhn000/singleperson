import React, { useState } from "react";
import Navbar from "./Navbar";

const Login: React.FC = () => {
  const [idInputText, setIdInputText] = useState(""); // 아이디 입력 필드용 상태
  const [passwordInputText, setPasswordInputText] = useState(""); // 비밀번호 입력 필드용 상태

  const handleIdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdInputText(event.target.value); // 아이디 입력 필드용 상태 업데이트
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInputText(event.target.value); // 비밀번호 입력 필드용 상태 업데이트
  };

  const handleBoxClick = () => {
    setIdInputText(""); // 아이디 입력 필드용 상태 초기화
    setPasswordInputText(""); // 비밀번호 입력 필드용 상태 초기화
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "80px" }}>로그인</div>
      <div style={loginBoxId} onClick={handleBoxClick}>
        <input
          type="text"
          value={idInputText}
          onChange={handleIdInputChange}
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            outline: "none",
            marginLeft: "20px",
          }}
          placeholder="아이디를 입력해주세요"
        />
      </div>
      <div style={loginBoxPassword} onClick={handleBoxClick}>
        <input
          type="password"
          value={passwordInputText}
          onChange={handlePasswordInputChange}
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            outline: "none",
            marginLeft: "20px",
          }}
          placeholder="비밀번호를 입력해주세요"
        />
      </div>
      <div style={loginBoxEnter} onClick={handleBoxClick}>
        <button
          onClick={handleBoxClick}
          style={{
            border: "none",
            backgroundColor: "orange",
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

const loginBoxId: React.CSSProperties = {
  width: "400px",
  height: "50px",
  margin: "auto",
  marginTop: "50px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  color: "gray",
  display: "flex",
  alignItems: "center",
};

const loginBoxPassword: React.CSSProperties = {
  ...loginBoxId,
  marginTop: "20px",
};

const loginBoxEnter: React.CSSProperties = {
  ...loginBoxId,
  marginTop: "20px",
  backgroundColor: "orange",
};

export default Login;
