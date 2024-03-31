// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes"; // 파일 경로를 적절히 수정

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
