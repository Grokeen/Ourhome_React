import "../../InsJoinForm.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function InsMyPageTransactionDetail() {
  const { id } = useParams(); // URL에서 ID 가져오기
  const navigate = useNavigate();
  const [transactionData, setTransactionData] = useState(null);

  // 서버에서 데이터를 불러오기
  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }

    const fetchTransactionData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/mypage/transaction/" + id,
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
          setTransactionData(data);
        } else {
          if (response.status === 403) {
            alert("세션이 만료되었습니다. 다시 로그인해주세요.");
            sessionStorage.removeItem("jwtToken");
            navigate("/");
          } else {
            const errorData = await response.json();
            alert(errorData.message || "데이터를 불러오지 못했습니다.");
            navigate("/mypage/transaction"); // 에러 시 다른 페이지로 이동
          }
        }
      } catch (error) {
        console.error("데이터 가져오기 중 오류:", error);
        alert("서버와의 통신에 실패했습니다.");
        navigate("/mypage/transaction"); // 에러 시 다른 페이지로 이동
      }
    };

    fetchTransactionData();
  }, [id, navigate]);


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

  // 데이터 로딩 상태 처리
  if (!transactionData) {
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
            <p className="title-3">청구 신청서</p>
          </div>

          <div className="board-form">
            <table>
              <colgroup>
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>보험 상품명</th>
                  <td>{transactionData.productTitle}</td>
                </tr>
                <tr>
                  <th>상태</th>
                  <td>{transactionData.status}</td>
                </tr>
                <tr>
                  <th>지급일</th>
                  <td>{formatDate(transactionData.dateTime)}</td>
                </tr>
                <tr>
                  <th>지급액</th>
                  <td>{transactionData.price} 원</td>
                </tr>
                <tr>
                  <th>지급 은행</th>
                  <td>{transactionData.bank}</td>
                </tr>
                <tr>
                  <th>지급 계좌</th>
                  <td>{transactionData.bankAccount} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsMyPageTransactionDetail;
