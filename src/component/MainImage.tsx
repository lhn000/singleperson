import React, { useState, useEffect } from "react";
import MainSocialing from "./MainSocialing";
import MainPlace from "./MainPlace";
import MainTogether from "./MainTogether";

function MainImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [verticalLineHeight, setVerticalLineHeight] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [socialingScrollVisible, setSocialingScrollVisible] = useState(false);
  const [marketPlaceScrollVisible, setMarketPlaceScrollVisible] = useState(false);
  const [togetherScrollVisible, setTogetherScrollVisible] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "img/main01.jpg";
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (imageLoaded) {
      setTimeout(() => {
        setVerticalLineHeight(100);
        setTimeout(() => {
          setShowText(true);
        }, 1000);
        setTimeout(() => {
          setShowSecondText(true);
        }, 1500);
      }, 1000);
    }
  }, [imageLoaded]);

  useEffect(() => {
    function handleScrollSocialing() {
      const dNoneElementD = document.querySelector(".d-none");
      if (dNoneElementD) {
        const rectD = dNoneElementD.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rectD.top <= windowHeight) {
          setSocialingScrollVisible(true);
        } else {
          setSocialingScrollVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScrollSocialing);
    return () => window.removeEventListener("scroll", handleScrollSocialing);
  }, []);

  useEffect(() => {
    function handleScrollMarketPlace() {
      const fNoneElementF = document.querySelector(".f-none");
      if (fNoneElementF) {
        const rectF = fNoneElementF.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rectF.top <= windowHeight) {
          setMarketPlaceScrollVisible(true);
        } else {
          setMarketPlaceScrollVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScrollMarketPlace);
    return () => window.removeEventListener("scroll", handleScrollMarketPlace);
  }, []);

  useEffect(() => {
    function handleScrollTogether() {
      const gNoneElementG = document.querySelector(".g-none");
      if (gNoneElementG) {
        const rectG = gNoneElementG.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rectG.top <= windowHeight) {
          setTogetherScrollVisible(true);
        } else {
          setTogetherScrollVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScrollTogether);
    return () => window.removeEventListener("scroll", handleScrollTogether);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
        className="d-block img-fluid"
        src="img/main01.jpg"
        alt="First slide"
        style={{
          transition: "opacity 1s ease-in-out",
          opacity: imageLoaded ? 1 : 0,
          position: "relative",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "0px",
          height: `${verticalLineHeight}px`,
          backgroundColor: "#84AB49",
          borderWidth: verticalLineHeight > 0 ? "1px" : "0px",
          borderStyle: "solid",
          borderColor: "#84AB49",
          zIndex: 2,
          transition:
            "width 1s ease-in-out, height 1s ease-in-out, border-width 1s ease-in-out",
        }}
      ></div>
      {showText && (
        <>
          <div
            style={{
              position: "absolute",
              zIndex: 2,
              top: "240px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: showText ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              fontSize: "60px",
              fontWeight: "bold",
              color: "#84AB49",
              animation: "slide 1s ease-in-out",
            }}
          >
            따로 또, 같이
          </div>
          {showSecondText && (
            <div
              style={{
                position: "absolute",
                zIndex: 2,
                top: "300px",
                left: "50%",
                transform: "translate(-50%, 0)",
                opacity: showText ? 1 : 0,
                transition: "opacity 1s ease-in-out",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#84AB49",
                animation: "slideTwo 1s ease-in-out",
              }}
            >
              1인 가구를 위한 소모임 + 거래 사이트
            </div>
          )}
        </>
      )}
      <div
        className="d-none d-lg-block"
        style={{
          width: "100%",
          height: "600px",
          backgroundColor: "#84AB49",
          position: "relative",
          overflow: "hidden", // 텍스트가 넘칠 때 자르도록 설정
        }}
      >
        <div
          className={`socialing-visible ${socialingScrollVisible ? "slideDown" : ""}`}
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          소셜링
        </div>
        <div
          className="socialing-visible expand-text"
          style={{
            position: "absolute",
            top: "170px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "18px",
            opacity: "1",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          일상을 새롭게 만들어주는 근처 이웃들과의 즐거운 시간을 누려보세요!
        </div>
        <button
          style={{
            position: "absolute",
            top: "250px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            backgroundColor: "#fff",
            padding: "8px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s, color 0.3s",
            outline: "none",
          }}
        >
          더보기 ＞
        </button>{" "}
        <div
          style={{
            position: "absolute",
            width: "60%",
            left: "50%",
            top: "55%",
            transform: "translateX(-50%)",
          }}
        >
          <MainSocialing></MainSocialing>
        </div>
      </div>
      <div
        className="f-none f-lg-block"
        style={{
          width: "100%",
          height: "800px",
          backgroundColor: "#FFF6E9",
          position: "relative",
          overflow: "hidden", // 텍스트가 넘칠 때 자르도록 설정
        }}
      >
        <div
          className={`socialing-visible ${marketPlaceScrollVisible ? "slideDown" : ""}`}
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#84AB49",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          마켓 플레이스
        </div>
        <div
          className="socialing-visible"
          style={{
            position: "absolute",
            top: "170px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#84AB49",
            fontSize: "18px",
          }}
        >
          서로의 소중한 것을 나누며 지역사회를 더욱 풍요롭게 만들어요!
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <button
            style={{
              position: "absolute",
              top: "250px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              backgroundColor: "#fff",
              padding: "8px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              transition: "background-color 0.3s, color 0.3s",
              outline: "none",
            }}
          >
            더보기 ＞
          </button>{" "}
          <div
            style={{
              position: "absolute",
              width: "100%",
              maxWidth: "100%",
              left: "50%",
              top: "480px",
              transform: "translateX(-50%)",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <MainPlace></MainPlace>
          </div>
        </div>
      </div>
      <div
        className="g-none g-lg-block"
        style={{
          width: "100%",
          height: "800px",
          backgroundColor: "#5C3D2E",
          position: "relative",
        }}
      >
        <div
          className={`socialing-visible ${togetherScrollVisible ? "slideDown" : ""}`}
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#FFF6E9",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          투게더
        </div>
        <div
          className="socialing-visible"
          style={{
            position: "absolute",
            top: "170px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#FFF6E9",
            fontSize: "18px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            내일이 더 나은 날이 될꺼예요<p>당신을 기다리고 있어요</p>
          </div>
        </div>
        <div style={{ position: "relative", textAlign: "center" }}>
          <button
            style={{
              position: "absolute",
              top: "250px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              backgroundColor: "#fff",
              padding: "8px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
              transition: "background-color 0.3s, color 0.3s",
              outline: "none",
            }}
          >
            함께하기 ＞
          </button>{" "}
          <div
            style={{
              position: "absolute",
              width: "100%",
              maxWidth: "100%",
              left: "50%",
              top: "480px",
              transform: "translateX(-50%)",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <MainPlace></MainPlace>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
