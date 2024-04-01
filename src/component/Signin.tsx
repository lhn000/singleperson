import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface SigninProps {}

const Signin: React.FC<SigninProps> = () => {
  const [idInputTextSign, setIdInputTextSign] = useState<string>("");

  const inputStyle: React.CSSProperties = {
    border: "none",
    height: "50px",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    color: "gray",
    padding: "10px",
    width: "400px", // 명시적으로 너비 설정
    marginRight: "10px",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100px",
    height: "50px",
    backgroundColor: "#DD4A48",
    color: "white",
    border: "none",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    cursor: "pointer",
    outline: "none",
    marginLeft: "5px", // 버튼을 오른쪽으로 이동
  };

  const cancelButtonStyle: React.CSSProperties = {
    width: "100px",
    height: "50px",
    color: "gray",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    marginLeft: "5px", // 버튼을 오른쪽으로 이동
  };

  const errorTextStyle: React.CSSProperties = {
    marginLeft: "550px",
    color: "red",
    fontSize: "12px",
    marginTop: "10px",
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        회원가입
        <div
          style={{
            marginRight: "400px",
            marginTop: "30px",
            marginLeft: "60px",
            fontWeight: "bold",
          }}
        >
          1. 정보 입력
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          marginLeft: "550px", // 오른쪽 여백 추가
        }}
      >
        <input
          type="text"
          value={idInputTextSign}
          onChange={(e) => setIdInputTextSign(e.target.value)}
          style={inputStyle}
          placeholder="아이디를 입력해주세요 (영문 8~15자)"
        />
        <button style={buttonStyle}>중복 확인</button>
      </div>
      <div style={errorTextStyle}>
        <span>※ 아이디는 가입 후 변경불가능합니다.</span>
      </div>
      <div style={errorTextStyle}>
        <span>※ 이미 가입된 아이디입니다.</span>
      </div>
      {/* 두 번째 입력창과 버튼 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "550px", // 오른쪽 여백 추가
        }}
      >
        <input
          type="text"
          style={inputStyle}
          placeholder="닉네임을 입력해주세요"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          marginLeft: "550px", // 오른쪽 여백 추가
        }}
      >
        <input
          type="text"
          style={inputStyle}
          placeholder="비밀번호 입력 (문자,숫자,특수문자 포함 8~20자 이내)"
        />
      </div>
      <div style={errorTextStyle}>
        <span>※ 비밀번호를 조건에 맞게 입력해주세요</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          marginLeft: "550px", // 오른쪽 여백 추가
        }}
      >
        <input
          type="text"
          style={inputStyle}
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
      </div>
      <div style={errorTextStyle}>
        <span>※ 비밀번호가 일치하지 않습니다</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "550px", // 오른쪽 여백 추가
        }}
      >
        <input
          type="text"
          style={inputStyle}
          placeholder="이메일을 입력해주세요"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "550px", // 오른쪽 여백 추가
        }}
      >
        <input
          type="text"
          style={inputStyle}
          placeholder="핸드폰 번호를 입력해주세요 ('-'를 제외한 11자리)"
        />
        <button style={buttonStyle}>본인 인증</button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "550px", // 오른쪽 여백 추가
          marginBottom: "200px",
        }}
      >
        <input
          type="text"
          style={inputStyle}
          placeholder="주소를 입력해주세요"
        />
        <button style={buttonStyle}>검색</button>
      </div>
      <hr
        style={{
          width: "1000px",
          marginTop: "-100px",
          border: "none",
          borderBottom: "1px dashed #d9d9d9",
        }}
      />
      <div
        style={{
          marginRight: "400px",
          marginTop: "50px",
          marginLeft: "60px",
        }}
      >
        <span style={{ fontWeight: "bold", marginLeft: "490px" }}>
          2. 약관 동의
        </span>
        <br />
        <div style={{ marginLeft: "490px" }}>
          <div>
            <label style={{ marginTop: "30px", fontWeight: "normal" }}>
              <input type="checkbox" />
              &nbsp;○○이용 약관
            </label>
          </div>
          <div>
            <label style={{ marginTop: "10px", fontWeight: "normal" }}>
              <input type="checkbox" />
              &nbsp;전자금융거래 이용약관(필수)
            </label>
          </div>
          <div>
            <label style={{ marginTop: "10px", fontWeight: "normal" }}>
              <input type="checkbox" />
              &nbsp;개인정보 수집 및 이용(필수)
            </label>
          </div>
          <div>
            <label style={{ marginTop: "10px", fontWeight: "normal" }}>
              <input type="checkbox" />
              &nbsp;만 14세 이상입니다(필수)
            </label>
          </div>
          <div>
            <label style={{ marginTop: "10px", fontWeight: "normal" }}>
              <input type="checkbox" />
              &nbsp;개인정보 수집 및 이용(선택)
            </label>
          </div>
          <div>
            <label style={{ marginTop: "10px", fontWeight: "normal" }}>
              <input type="checkbox" />
              &nbsp;혜택 알림 이메일, 문자, 앱 푸시 수신(선택)
            </label>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "1000px",
          border: "none",
          marginTop: "50px",
          borderBottom: "1px dashed #d9d9d9",
        }}
      />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <span
          style={{
            display: "inline-block",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          고객은 동의를 거부할 권리가 있으며 동의를 거부할 경우, 사이트 가입
          또는 일부 서비스 이용이 제한됩니다.
        </span>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button style={buttonStyle}>회원 가입</button>
        <button style={cancelButtonStyle}>취소</button>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
