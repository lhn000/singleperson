import React from "react";
import "./../style/style.css"; // style.css 파일 import

function Footer() {
  return (
    <div className="footer-container" style={{ position: "relative" }}>
      <span className="footer-text">
        개인정보처리방침<br></br>
        서울특별시 중구 세종대로 110 | 대표전화 : 02-999-9999<br></br>
        Seoul Metropolitan Government all rights reserved
      </span>
      <div>
        <select
          style={{
            padding: "4px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #84AB49",
            backgroundColor: "#FFF",
            color: "#000",
            outline: "none",
            cursor: "pointer",
            position: "absolute",
            right: "498px",
            top: "60px", // 이미지와 높이 맞추기 위해 추가
          }}
        >
          <option>1인가구 지원기관</option>
          <option>1인가구 지원기관</option>
          <option>1인가구 지원기관</option>
        </select>
        <select
          style={{
            padding: "4px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #84AB49",
            backgroundColor: "#FFF",
            color: "#000",
            outline: "none",
            cursor: "pointer",
            position: "absolute",
            right: "330px",
            top: "60px", // 이미지와 높이 맞추기 위해 추가
          }}
        >
          <option>서울시 유관기관</option>
          <option>서울시 유관기관</option>
          <option>서울시 유관기관</option>
        </select>
        <select
          style={{
            padding: "4px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #84AB49",
            backgroundColor: "#FFF",
            color: "#000",
            outline: "none",
            cursor: "pointer",
            position: "absolute",
            right: "180px",
            top: "60px", // 이미지와 높이 맞추기 위해 추가
          }}
        >
          <option>정부 유관기관</option>
          <option>정부 유관기관</option>
          <option>정부 유관기관</option>
        </select>
      </div>
      <img
        style={{
          width: "50px",
          position: "absolute",
          top: "50px",
          right: "30px",
        }}
        src="img/appstore.png"
        alt="앱스토어"
      />
      <img
        style={{
          width: "50px",
          position: "absolute",
          top: "50px",
          right: "100px", // 이미지 간격 조정을 위해 조정
        }}
        src="img/playstore.png"
        alt="플레이스토어"
      />
    </div>
  );
}

export default Footer;
