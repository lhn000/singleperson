import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home"; // 파일 경로 수정
import Login from "./component/Login"; // 파일 경로 수정

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;
