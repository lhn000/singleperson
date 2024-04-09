import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ border: "1px solid #E5E5E5" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="/logo192.png"
            alt="로고"
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  textDecoration: "none",
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.3s",
                  color: "#84AB49",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "#84AB49";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "transparent";
                  target.style.color = "#84AB49";
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "#84AB49";
                  target.style.color = "#84AB49"; // 텍스트 색상 변경
                }}
              >
                소개
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  textDecoration: "none",
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.3s",
                  color: "#84AB49",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "#84AB49")
                }
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "transparent";
                  target.style.color = "84AB49";
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "#84AB49";
                  target.style.color = "#84AB49"; // 텍스트 색상 변경
                }}
              >
                소셜링
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  textDecoration: "none",
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.3s",
                  color: "#84AB49",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "#84AB49")
                }
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "transparent";
                  target.style.color = "84AB49";
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "#84AB49";
                  target.style.color = "#84AB49"; // 텍스트 색상 변경
                }}
              >
                마켓플레이스
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  textDecoration: "none",
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.3s",
                  color: "#84AB49",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "#84AB49")
                }
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "transparent";
                  target.style.color = "84AB49";
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "#84AB49";
                  target.style.color = "#84AB49"; // 텍스트 색상 변경
                }}
              >
                투게더
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  textDecoration: "none",
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.3s",
                  color: "#84AB49",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "#84AB49")
                }
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "transparent";
                  target.style.color = "#84AB49";
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "#84AB49";
                  target.style.color = "#84AB49"; // 텍스트 색상 변경
                }}
              >
                마이페이지
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                style={{
                  marginRight: "50px",
                  textDecoration: "none",
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.3s",
                  color: "#84AB49",
                  fontWeight: "bold",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.borderColor = "#84AB49")
                }
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "transparent";
                  target.style.color = "#84AB49";
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.borderColor = "#84AB49";
                  target.style.color = "#84AB49"; // 텍스트 색상 변경
                }}
              >
                로그인
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
