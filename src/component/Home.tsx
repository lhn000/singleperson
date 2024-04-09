import React from "react";
import NavBar from "./Navbar";
import MainImage from "./MainImage";
import Footer from "./Footer";
import "./../style/style.css"; // style.css 파일 import

function Home() {
  return (
    <div>
      <NavBar />
      <MainImage />
      <Footer />
    </div>
  );
}

export default Home;
