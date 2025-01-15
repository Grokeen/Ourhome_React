import React, { useEffect, useState } from "react";
import "../../css/InsMyPage.css";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";

const InsMyPageMain = () => {
  const navigate = useNavigate();
  const [insuranceData, setInsuranceData] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }

    const fetchInsuranceData = async () => {
      try {
        const response = await fetch("http://localhost:8080/mypage/joined", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setInsuranceData(Array.isArray(data) ? data : [data]); // 데이터를 배열로 변환
        } else {    
          console.log(response.status);
          if (response.status === 403) {
            alert("세션이 만료되었습니다. 다시 로그인해주세요.");
            sessionStorage.removeItem("jwtToken");
            navigate("/");
          } else {
            const errorData = await response.json();
            alert(errorData.message || "데이터를 불러오지 못했습니다.");
            navigate("/mypage/joined");
          }          
        }
      } catch (error) {
        console.error("데이터 가져오기 중 오류:", error);
        alert("서버와의 통신에 실패했습니다.");
        navigate("/mypage/joined"); // 에러 시 다른 페이지로 이동
      }
    };

    fetchInsuranceData();

    document.body.classList.add("mypage");
    return () => {
      document.body.classList.remove("mypage");
    };
  }, [navigate]);


  return (
    <div class="sub_wrap">
      <br />
      <br />
      <br />
      <br />

      <div class="inner inner_hidden">
        {/* 사이드바 */}
        <Sidebar />
        {/* 보험 상품 리스트 */}

        <div className="main-prd-wrap">
          {insuranceData.map((item, index) => (
            <div className="list-prd-box" key={index}>
              <ul>
                <li className="list-prd">
                  <Link
                    to="#"
                    className="splunk_mainProduct mainProduct dental"
                    style={{ textDecoration: "none" }}
                    onClick={(e) => {
                      e.preventDefault(); // 기본 이동 방지
                      navigate("/mypage/joined/" +item.productName+"/"+ item.insuranceId); // 적절한 경로 설정
                    }}
                  >
                    <p className="title">
                      <strong>
                        {item.productTitle || "보험"}
                      </strong>
                    </p>
                    <p className="text">
                      <span className="fc-blue">
                        {item.riskRankDescription}
                      </span>
                      <br />
                    </p>
                    <p className="text">
                      <span className="fc-blue">{"공제율 : " +item.deductibleRate+"%"}</span>
                      <br />
                    </p>
                    <p className="text">
                      <span className="fc-blue">{"한도 : "+item.coverageLimit+"원"}</span>
                      <br />
                    </p>
                    <p className="text">
                      <span className="fc-blue">
                        {"보험 가입일 : "+ item.startDate + " ~ " + item.endDate}
                      </span>
                      <br />
                    </p>
                    <p className="text-sub"></p>
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsMyPageMain;
