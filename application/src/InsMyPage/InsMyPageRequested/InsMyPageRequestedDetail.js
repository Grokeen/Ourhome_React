import "../../InsJoinForm.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function InsMyPageRequestedDetail() {
  const { id } = useParams(); // URL에서 ID 가져오기
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState(null);

  // 서버에서 데이터를 불러오기
  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/");
      return;
    }

    const fetchRequestData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/mypage/requested/" + id,
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
          setRequestData(data);
        } else {
          if (response.status === 403) {
            alert("세션이 만료되었습니다. 다시 로그인해주세요.");
            sessionStorage.removeItem("jwtToken");
            navigate("/");
          } else{
          const errorData = await response.json();
          alert(errorData.message || "데이터를 불러오지 못했습니다.");
          navigate("/mypage/requested"); // 에러 시 다른 페이지로 이동
          }
        }
      } catch (error) {
        console.error("데이터 가져오기 중 오류:", error);
        alert("서버와의 통신에 실패했습니다.");
        navigate("/mypage/requested"); // 에러 시 다른 페이지로 이동
      }
    };

    fetchRequestData();
  }, [id, navigate]);

  // 데이터 로딩 상태 처리
  if (!requestData) {
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
                  <td>{requestData.productTitle}</td>
                </tr>
                <tr>
                  <th>유형</th>
                  <td>{requestData.type}</td>
                </tr>
                <tr>
                  <th>발생비용</th>
                  <td>{requestData.price} 원</td>
                </tr>
                <tr>
                  <th>청구 내용</th>
                  <td>{requestData.content}</td>
                </tr>
                <tr>
                  <th>요청시간</th>
                  <td>{requestData.requestDate} </td>
                </tr>
                <tr>
                  <th>상태</th>
                  <td>{requestData.status}</td>
                </tr>
                <tr>
                  <th>결과</th>
                  <td>{requestData.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsMyPageRequestedDetail;
