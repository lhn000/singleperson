import React from "react";
import "./../style/style.css"; // style.css 파일 import

function MainSocialing() {
  return (
    <div className="row">
      <div className="col-md-6 ">
        <div className="card mb-3 " style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                className="img-fluid rounded-start"
                alt="Placeholder"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">개발자들 모여라!</h5>
                <p className="card-text">현직 개발자들을 위한 소모임입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3 " style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                className="img-fluid rounded-start"
                alt="Placeholder"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">자바 스터디 모집</h5>
                <p className="card-text">스터디원 모집합니다 . 초보자도 가능</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSocialing;
