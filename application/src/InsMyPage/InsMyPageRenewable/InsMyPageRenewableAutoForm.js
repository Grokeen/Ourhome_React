import "../../InsJoinForm.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function InsMyPageJoinedUpdateForm() {
  const [hasOtherVehicleUsage, setHasOtherVehicleUsage] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { productName } = useParams();
  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/");
    }

    const checkJoined = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/mypage/renewable/auto/" + id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
            },
          }
        );

        if (!response.ok) {
          if (response.status === 403) {
            alert("세션이 만료되었습니다. 다시 로그인해주세요.");
            sessionStorage.removeItem("jwtToken");
            navigate("/");
          } else {
            const errorData = await response.json();
            alert(errorData.message || "해당 보험이 존재하지 않습니다.");
          }
        }
      } catch (error) {
        console.error("보험 갱신 중 오류 발생:", error);
        alert("서버와의 통신에 실패했습니다.");

        navigate("/");
      }
    };
    checkJoined();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    // buildingType이 '기타'라면 입력된 값으로 덮어쓰기
    if (formObject.vehicleUsage === "기타") {
      if (formObject.vehicleUsage) {
        formObject.vehicleUsage = formObject.vehicleUsageOther;
      } else {
        alert("건물 유형의 기타 칸을 입력하세요.");
        return;
      }
    }

    try {
      const response = await fetch(
        "http://localhost:8080/mypage/renewable/auto/" + id,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
          },
          body: JSON.stringify(formObject),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const id = data.insuranceId;
        navigate("/join/auto/" + id);
      } else {
        if (response.status === 403) {
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          sessionStorage.removeItem("jwtToken");
          navigate("/");
        } else {
          const errorData = await response.json();
          alert(errorData.message || "갱신에 실패했습니다.");
        }
      }
    } catch (error) {
      console.error("보험 가입 중 오류 발생:", error);
      alert("서버와의 통신에 실패했습니다.");
    }
  };

  return (
    <div id="contents" className="inner-wrap">
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
            <p className="title-3">정보 갱신</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="board-form">
              <table>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>최근 사고 여부</th>
                    <td>
                      <div className="checkbox-group">
                        <label>
                          <input
                            type="radio"
                            name="recentAccident"
                            value="true"
                          />{" "}
                          예
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="recentAccident"
                            value="false"
                          />{" "}
                          아니오
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>한 달 평균 주행 거리</th>
                    <td>
                      <input
                        type="number"
                        name="monthlyMileage"
                        title="평균 주행 거리 입력"
                        placeholder="월 평균 주행 거리 (km)"
                        className="input-text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>차량 용도</th>
                    <td>
                      <div className="checkbox-group">
                        <label>
                          <input
                            name="vehicleUsage"
                            type="radio"
                            value="출퇴근"
                            onChange={() => setHasOtherVehicleUsage(false)}
                          />{" "}
                          출퇴근
                        </label>
                        <label>
                          <input
                            name="vehicleUsage"
                            type="radio"
                            value="영업용"
                            onChange={() => setHasOtherVehicleUsage(false)}
                          />{" "}
                          영업용
                        </label>
                        <label>
                          <input
                            name="vehicleUsage"
                            type="radio"
                            value="개인용"
                            onChange={() => setHasOtherVehicleUsage(false)}
                          />{" "}
                          개인용
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="기타"
                            name="vehicleUsage"
                            onChange={() => setHasOtherVehicleUsage(true)}
                          />{" "}
                          기타
                        </label>
                        {hasOtherVehicleUsage && (
                          <input
                            type="text"
                            name="vehicleUsageOther"
                            placeholder="기타 유형 입력"
                            className="input-text"
                            style={{ marginTop: "10px", display: "block" }}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="button-group mt30">
              <button type="submit" className="button navy" id="btnSubmit">
                신청하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InsMyPageJoinedUpdateForm;
