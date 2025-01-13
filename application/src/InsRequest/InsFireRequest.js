import "../App.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function InsFireRequest() {
  const navigate = useNavigate();
  const [insuranceData, setInsuranceData] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/request");
      return;
    }

    const fetchInsuranceData = async () => {
      try {
        const response = await fetch("http://localhost:8080/request/fire", {
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
          const errorData = await response.json();
          alert(errorData.message || "데이터를 불러오지 못했습니다.");
          navigate("/request"); // 에러 시 다른 페이지로 이동
        }
      } catch (error) {
        console.error("데이터 가져오기 중 오류:", error);
        alert("서버와의 통신에 실패했습니다.");
        navigate("/request"); // 에러 시 다른 페이지로 이동
      }
    };

    fetchInsuranceData();
  }, [navigate]);

  const handleNavigation = async (url) => {
    if (sessionStorage.getItem("jwtToken")) {
      try {
        const response = await fetch("http://localhost:8080" + url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        });

        if (response.ok) {
          navigate(url);
        } else {
          const errorData = await response.json();
          if (errorData.value) {
            alert(errorData.message || "권한이 없습니다.");
            navigate(`${url}/${errorData.value}`);
          } else {
            alert(errorData.message || "권한이 없습니다.");
          }
        }
      } catch (error) {
        console.error("오류 발생:", error);
        alert("서버와의 통신에 실패했습니다.");
      }
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
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
                    handleNavigation("/request/fire/" + item.insuranceId); // 적절한 경로 설정
                  }}
                >
                  <p className="title">
                    <strong>{item.buildingType || "화재보험"}</strong>
                  </p>

                  <p className="text">
                    <span className="fc-blue">{item.riskRankDescription}</span>
                    <br />
                  </p>

                  <p className="text">
                    <span className="fc-blue">{"재산 주소 : "+ item.propertyAddress + " " + item.propertyDetailAddress}</span>
                    <br />
                  </p>
                  <p className="text">
                    <span className="fc-blue">{"공제율 : "+ item.deductibleRate + "%"}</span>
                    <br />
                  </p>
                  <p className="text">
                    <span className="fc-blue">{"한도 : "+item.coverageLimit+"원"}</span>
                    <br />
                  </p>
                  <p className="text">
                    <span className="fc-blue">
                      {"보험가입일 : "+item.startDate + " ~ " + item.endDate}
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
  );
}

export default InsFireRequest;
