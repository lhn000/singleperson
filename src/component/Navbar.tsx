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
              <a className="nav-link" href="#">
                소개
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                소셜링
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                마켓플레이스
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                투게더
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ marginRight: "50px", color: "black" }}
              >
                마이페이지
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                style={{ marginRight: "50px", color: "black" }}
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
