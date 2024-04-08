import React, { useState, useEffect } from "react";

function MainImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [verticalLineHeight, setVerticalLineHeight] = useState(0);
  const [showText, setShowText] = useState(false);
  const [socialingOpacity, setSocialingOpacity] = useState(0);
  const [isScrollingOver, setIsScrollingOver] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

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
    function handleScroll() {
      const scrollY = window.scrollY;
      const dNoneElement = document.querySelector(
        ".d-none.d-lg-block"
      ) as HTMLElement;
      if (dNoneElement) {
        const dNoneOffsetTop = dNoneElement.offsetTop;
        const dNoneHalfHeight = dNoneElement.offsetHeight / 2;
        const scrollPosition = scrollY + window.innerHeight;

        if (
          scrollPosition >= dNoneOffsetTop + dNoneHalfHeight &&
          scrollPosition <= dNoneOffsetTop + dNoneElement.offsetHeight
        ) {
          setSocialingOpacity(1); // 스크롤이 해당 영역에 위치하면 투명도를 1로 설정하여 나타나도록 함
          setIsScrollingOver(true);
        } else {
          setSocialingOpacity(0); // 스크롤이 해당 영역에 위치하지 않으면 투명도를 0으로 설정하여 사라지도록 함
          setIsScrollingOver(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          top: "4%",
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
              top: "220px",
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
                top: "280px",
                left: "50%",
                transform: "translate(-50%, 0)",
                opacity: showText ? 1 : 0,
                transition: "opacity 2s ease-in-out",
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
          height: "800px",
          backgroundColor: "#84AB49",
          position: "relative",
        }}
      >
        <div
          className={isScrollingOver ? "socialing-hidden" : "socialing-visible"}
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            transition: "opacity 1s ease-in-out",
            opacity: socialingOpacity,
          }}
        >
          소셜링
        </div>
        <div
          className={isScrollingOver ? "socialing-hidden" : "socialing-visible"}
          style={{
            position: "absolute",
            top: "170px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "18px",
            transition: "opacity 1s ease-in-out",
            opacity: socialingOpacity,
          }}
        >
          일상을 새롭게 만들어주는 근처 이웃들과의 즐거운 시간을 누려보세요!
        </div>
        <button
          style={{
            position: "absolute",
            top: "240px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            backgroundColor: "#fff",
            padding: "px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)", // 살짝 그림자 추가
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          더보기 ＞
        </button>{" "}
      </div>
    </div>
  );
}

export default MainImage;
