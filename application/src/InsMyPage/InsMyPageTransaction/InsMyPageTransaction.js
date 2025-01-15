import React, { useEffect, useState } from "react";
import "../../css/InsMyPage.css";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";

const InsMyPageTransaction = () => {
  const navigate = useNavigate();
  const [insuranceData, setInsuranceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }

    fetchInsuranceData();

    document.body.classList.add("mypage");
    return () => {
      document.body.classList.remove("mypage");
    };
  }, [navigate]);

  const fetchInsuranceData = async (page = 0) => {
    try {
      const response = await fetch("http://localhost:8080/mypage/transaction", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setInsuranceData(data.content);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      } else {
        if (response.status === 403) {
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          sessionStorage.removeItem("jwtToken");
          navigate("/");
        } else {
          const errorData = await response.json();
          alert(errorData.message || "데이터를 불러오지 못했습니다.");
        }
      }
    } catch (error) {
      console.error("데이터 가져오기 중 오류:", error);
      alert("서버와의 통신에 실패했습니다.");
    }
  };

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      fetchInsuranceData(page);
    }
  };

  function formatDate(isoDate) {
    const date = new Date(isoDate);

    // 원하는 형식: YYYY년 MM월 DD일 HH시 mm분
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 0부터 시작하므로 +1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
  }

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
        <div className="sub_wrap">
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
                        navigate("/mypage/transaction/" + item.transactionId); // 적절한 경로 설정
                      }}
                    >
                      <p className="title">
                        <strong>{item.productTitle || "보험"}</strong>
                      </p>
                      <p className="text">
                        <span className="fc-blue">
                          {"지급일 : " + formatDate(item.dateTime)}
                        </span>
                        <br />
                      </p>
                      <p className="text">
                        <span className="fc-blue">
                          {"상태 : " + item.status}
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
          {/* 페이지 네이션 */}
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              이전
            </button>
            <span>
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsMyPageTransaction;
