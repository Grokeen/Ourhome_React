import "../InsJoinForm.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InsAutoJoinForm() {
  const [hasOtherVehicleUsage, setHasOtherVehicleUsage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/join");
    }

    const alreadyJoin = async () => {
      try {
        const response = await fetch("http://localhost:8080/join/auto", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
          },
        });

        if (!response.ok) {
          if (response.status === 403) {
            alert("세션이 만료되었습니다. 다시 로그인해주세요.");
            sessionStorage.removeItem("jwtToken");
            navigate("/");
          } else {
            const errorData = await response.json();
            alert(errorData.message || "신청중인 보험이 있습니다.");
            navigate("/join/auto/" + errorData.value);
          }
        }
      } catch (error) {
        console.error("보험 가입 중 오류 발생:", error);
        alert("서버와의 통신에 실패했습니다.");

        navigate("/join");
      }
    };
    alreadyJoin();
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

    console.log(formObject);

    try {
      const response = await fetch("http://localhost:8080/join/auto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
        },
        body: JSON.stringify(formObject),
      });

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
          alert(errorData.message || "가입 신청에 실패했습니다.");
        }
      }
    } catch (error) {
      console.error("보험 가입 중 오류 발생:", error);
      alert("서버와의 통신에 실패했습니다.");
    }
  };

  return (
    <div id="contents" className="inner-wrap">
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="tab-area mt30">
        <div id="usGdcInfo02"></div>
        <div className="title-wrap">
          <p className="title-3">자동차보험 가입</p>
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
                  <th>은행</th>
                  <td>
                    <div style={{ display: "flex" }}>
                      <input
                        id="bank"
                        name="bank"
                        type="text"
                        title="은행명 입력"
                        placeholder="보험비 납부 은행 입력"
                        className="input-text"
                        style={{ flex: 1 }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>계좌번호</th>
                  <td>
                    <div style={{ display: "flex" }}>
                      <input
                        id="account"
                        name="account"
                        type="text"
                        title="계좌번호 입력"
                        placeholder="보험료 납부 계좌번호 입력"
                        className="input-text"
                        style={{ flex: 1 }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>가입기간</th>
                  <td>
                    <input
                      id="duration"
                      name="duration"
                      type="number"
                      title="가입기간 입력"
                      placeholder="가입기간 입력(년)"
                      className="input-text"
                    />
                  </td>
                </tr>
                <tr>
                  <th>차량 모델</th>
                  <td>
                    <input
                      type="text"
                      name="vehicleModel"
                      title="차량 모델 입력"
                      placeholder="차량 모델 입력"
                      className="input-text"
                      style={{ flex: 1 }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>차량번호</th>
                  <td>
                    <input
                      type="text"
                      name="vehicleNumber"
                      title="차량번호 입력"
                      placeholder="차량번호 입력"
                      className="input-text"
                    />
                  </td>
                </tr>
                <tr>
                  <th>차량 연식</th>
                  <td>
                    <input
                      type="number"
                      name="vehicleYear"
                      title="차량 연식 입력"
                      placeholder="차량 제조 년도 입력"
                      className="input-text"
                    />
                  </td>
                </tr>
                <tr>
                  <th>운전 시작일</th>
                  <td>
                    <input type="date" name="drivingStartDate" required />
                  </td>
                </tr>
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
  );
}

export default InsAutoJoinForm;
