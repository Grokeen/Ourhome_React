import "../../InsJoinForm.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function InsMypageJoinedHealth() {
  const { id } = useParams(); // URL에서 ID 가져오기
  const navigate = useNavigate();
  const [insuranceData, setInsuranceData] = useState(null);

  // 서버에서 데이터를 불러오기
  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }

    const fetchInsuranceData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/mypage/joined/" + id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setInsuranceData(data);
        } else {
          const errorData = await response.json();
          alert(errorData.message || "데이터를 불러오지 못했습니다.");
          navigate("/mypage/joined"); // 에러 시 다른 페이지로 이동
        }
      } catch (error) {
        console.error("데이터 가져오기 중 오류:", error);
        alert("서버와의 통신에 실패했습니다.");
        navigate("/mypage/joined");
      }
    };

    fetchInsuranceData();

    document.body.classList.add("mypage");
    return () => {
      document.body.classList.remove("mypage");
    };
  }, [id, navigate]);

  // 가입 정보 수정
  const update = async () => {
    navigate("/join");
  };

  // 가입 해지
  const cancel = async () => {
    try {
      const userConfirmed = window.confirm("정말로 해지하시겠습니까?");
      if (userConfirmed) {
        const response = await fetch(
          "http://localhost:8080/mypage/joined/+" + id + "/cancel",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
            },
          }
        );

        if (response.ok) {
          alert("가입이 해지되었습니다.");
          navigate("/mypage/joined");
        } else {
          const errorData = await response.json();
          alert(errorData.message || "취소 요청에 실패했습니다.");
        }
      } else {
        alert("해지가 취소되었습니다.");
      }
    } catch (error) {
      console.error("취소 요청 중 오류 발생:", error);
      alert("서버와의 통신에 실패했습니다.");
    }
  };

  // 데이터 로딩 상태 처리
  if (!insuranceData) {
    return <div>로딩 중...</div>;
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

        <div className="tab-area mt30">
          <div id="usGdcInfo02"></div>
          <div className="title-wrap">
            <p className="title-3">가입 정보</p>
          </div>

          <div className="board-form">
            <table>
              <colgroup>
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>가입자 이름</th>
                  <td>{insuranceData.userName}</td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>{insuranceData.userBirthday}</td>
                </tr>
                <tr>
                  <th>보험 상품명</th>
                  <td>{insuranceData.productTitle}</td>
                </tr>
                <tr>
                  <th>보장 범위</th>
                  <td>{insuranceData.riskRankDescription}</td>
                </tr>
                <tr>
                  <th>보험료</th>
                  <td>{insuranceData.price} 원</td>
                </tr>
                <tr>
                  <th>공제율</th>
                  <td>{insuranceData.deductibleRate}%</td>
                </tr>
                <tr>
                  <th>보장 한도</th>
                  <td>{insuranceData.coverageLimit} 원</td>
                </tr>
                <tr>
                  <th>보험 기간</th>
                  <td>
                    {insuranceData.startDate} ~ {insuranceData.endDate}
                  </td>
                </tr>
                <tr>
                  <th>은행</th>
                  <td>{insuranceData.bank}</td>
                </tr>
                <tr>
                  <th>계좌번호</th>
                  <td>{insuranceData.bankAccount}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="button-group mt30">
            <button
              type="button"
              className="button navy"
              onClick={() => {
                update();
              }}
            >
              계좌 수정
            </button>

            <span class="left-10;"> </span>

            <button
              type="button"
              className="button navy"
              onClick={() => {
                cancel();
              }}
            >
              보험 해지
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsMypageJoinedHealth;
