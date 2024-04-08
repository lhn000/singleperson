import React from "react";
import "./../style/style.css"; // style.css 파일 import

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <div className="footer-text">
          개인정보처리방침<br></br>
          서울특별시 중구 세종대로 110 | 대표전화 : 02-999-9999<br></br>
          Seoul Metropolitan Government all rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
