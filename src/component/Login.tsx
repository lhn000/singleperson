import React, { useState, ChangeEvent, MouseEvent } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login: React.FC = () => {
  const [idInputText, setIdInputText] = useState<string>("");
  const [passwordInputText, setPasswordInputText] = useState<string>("");

  const InputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIdInputText(event.target.value);
  };

  const PasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputText(event.target.value);
  };

  const BoxClick = () => {};

  const LoginButtonClick = () => {
    // 로그인 버튼 클릭 시의 동작 정의
  };

  const LoginButtonMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.style.backgroundColor = "#AA3939"; // 마우스 오버 시 배경색 변경
    target.style.fontWeight = "bold"; // 마우스 오버 시 글꼴 굵기 변경
  };

  const LoginButtonMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.style.backgroundColor = "#DD4A48"; // 마우스 떠날 때 배경색 원래대로 변경
    target.style.fontWeight = "normal"; // 마우스 떠날 때 글꼴 굵기 원래대로 변경
  };

  const NaverLoginButtonMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.style.backgroundColor = "#1CA357"; // 네이버 로그인 버튼 마우스 오버 시 배경색 변경
    target.style.fontWeight = "bold"; // 네이버 로그인 버튼 마우스 오버 시 글꼴 굵기 변경
  };

  const NaverLoginButtonMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.style.backgroundColor = "#03CF5D"; // 네이버 로그인 버튼 마우스 떠날 때 배경색 원래대로 변경
    target.style.fontWeight = "normal"; // 네이버 로그인 버튼 마우스 떠날 때 글꼴 굵기 원래대로 변경
  };

  const KakaoLoginButtonMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.style.backgroundColor = "#C2B225"; // 카카오 로그인 버튼 마우스 오버 시 배경색 변경
    target.style.fontWeight = "bold"; // 카카오 로그인 버튼 마우스 오버 시 글꼴 굵기 변경
  };

  const KakaoLoginButtonMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    target.style.backgroundColor = "#FFEB3B"; // 카카오 로그인 버튼 마우스 떠날 때 배경색 원래대로 변경
    target.style.fontWeight = "normal"; // 카카오 로그인 버튼 마우스 떠날 때 글꼴 굵기 원래대로 변경
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "80px" }}>로그인</div>
      <div style={loginBoxId} onClick={BoxClick}>
        <input
          type="text"
          value={idInputText}
          onChange={InputChange}
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
      <div style={loginBoxPassword} onClick={BoxClick}>
        <input
          type="password"
          value={passwordInputText}
          onChange={PasswordInputChange}
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            outline: "none",
            marginLeft: "20px",
          }}
          placeholder="비밀번호를 입력해주세요"
        />
        <span
          className="material-icons"
          style={{ cursor: "pointer" }}
          onClick={BoxClick}
        ></span>
      </div>
      <div style={loginBoxEnter}>
        <button
          onMouseEnter={LoginButtonMouseEnter}
          onMouseLeave={LoginButtonMouseLeave}
          onClick={LoginButtonClick}
          style={{
            border: "none",
            backgroundColor: "#DD4A48",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            color: "white",
            fontWeight: "normal",
            transition: "background-color 0.3s, font-weight 0.3s",
            outline: "none", // 클릭 시 테두리 제거
          }}
        >
          로그인
        </button>
      </div>
      <div style={naverloginBoxEnter}>
        <button
          onMouseEnter={NaverLoginButtonMouseEnter}
          onMouseLeave={NaverLoginButtonMouseLeave}
          onClick={LoginButtonClick}
          style={{
            border: "none",
            backgroundColor: "#03CF5D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            color: "white",
            fontWeight: "normal",
            transition: "background-color 0.3s, font-weight 0.3s",
            outline: "none", // 클릭 시 테두리 제거
          }}
        >
          네이버 로그인
        </button>
      </div>
      <div style={kakaologinBoxEnter}>
        <button
          onMouseEnter={KakaoLoginButtonMouseEnter}
          onMouseLeave={KakaoLoginButtonMouseLeave}
          onClick={LoginButtonClick}
          style={{
            border: "none",
            backgroundColor: "#f9e000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            color: "black",
            fontWeight: "normal",
            transition: "background-color 0.3s, font-weight 0.3s",
            outline: "none", // 클릭 시 테두리 제거
          }}
        >
          카카오톡 로그인
        </button>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontSize: "12px",
        }}
      >
        아직 회원이 아니신가요?{" "}
        <Link to="/signin" style={{ color: "black" }}>
          <strong>회원가입 하러가기</strong>
        </Link>
        <a href="#" style={{ color: "black", marginLeft: "50px" }}>
          아이디/비밀번호 찾기
        </a>
      </div>
      <Footer></Footer>
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
  position: "relative",
};

const loginBoxEnter: React.CSSProperties = {
  ...loginBoxId,
  marginTop: "20px",
};
const naverloginBoxEnter: React.CSSProperties = {
  ...loginBoxId,
  marginTop: "10px",
};
const kakaologinBoxEnter: React.CSSProperties = {
  ...loginBoxId,
  marginTop: "10px",
};
export default Login;
