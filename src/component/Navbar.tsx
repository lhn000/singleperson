import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
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
            style={{ width: "50px", height: "50px", marginRight: "100px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ width: "100px", color: "black" }}
              >
                소개
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ width: "100px", color: "black" }}
              >
                거래
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ width: "100px", color: "black" }}
              >
                소모임
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ width: "100px", color: "black" }}
              >
                의지해요♥
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
