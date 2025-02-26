import "../InsJoinForm.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function InsFireRequestForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 ID 가져오기
  const [hasOtherGeneticDiseases, setHasOtherGeneticDiseases] = useState(false);
  const [hasOtherPastDiseases, setHasOtherPastDiseases] = useState(false);

  // 로그인 상태 확인
  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/request");
    }

    const checkJoined = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/request/fire/" + id,
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
            if (errorData.value) {
              alert(errorData.message || "가입되지 않은 보험입니다.");
              navigate("/request");
            } else {
              alert(errorData.message || "가입되지 않은 보험입니다.");
              navigate("/request");
            }
          }
        }
      } catch (error) {
        console.error("보험 청구 중 오류 발생:", error);
        alert("서버와의 통신에 실패했습니다.");
        navigate("/request");
      }
    };

    checkJoined();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);

    try {
      const response = await fetch("http://localhost:8080/request/fire/" + id, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const id = data.insuranceId;
        alert("청구 신청이 완료되었습니다.");
        navigate("/request");
        return;
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
      console.error("보험 청구 중 오류 발생:", error);
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
          <p className="title-3">화재보험 청구</p>
          <p className="req-info">
            <span style={{ color: "red" }}>*</span> 는 필수 입력 항목입니다.
          </p>
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
                  <th>
                    사고 발생 날짜<span style={{ color: "red" }}>*</span>
                  </th>
                  <td>
                    <input
                      name="date"
                      type="date"
                      title="사고 발생 날짜 입력"
                      min="1970-01-01"
                      max={new Date().toISOString().split("T")[0]}
                      required
                      className="input-text"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    발생 비용<span style={{ color: "red" }}>*</span>
                  </th>
                  <td>
                    <input
                      name="price"
                      type="number"
                      title="비용 입력"
                      placeholder="발생 비용 입력(원)"
                      required
                      className="input-text"
                      min="0"
                      style={{ width: 150 }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    영수증 첨부<span style={{ color: "red" }}>*</span>
                  </th>
                  <td>
                    <input
                      name="receiptImages"
                      type="file"
                      title="영수증 첨부"
                      accept="image/*,application/pdf"
                      multiple
                      required
                      className="input-file"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    손해 유형<span style={{ color: "red" }}>*</span>
                  </th>
                  <td>
                    <select
                      name="damageType"
                      required
                      className="input-select"
                      title="손해 유형 선택"
                    >
                      <option value="">선택해주세요</option>
                      <option value="주택">주택</option>
                      <option value="상업시설">상업시설</option>
                      <option value="가재도구">가재도구</option>
                      <option value="생명구조">생명구조</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>청구 내용<span style={{ color: "red" }}>*</span></th>
                  <td>
                    <div style={{ display: "flex" }}>
                      <textarea
                        name="content"
                        type="text"
                        title="청구 내용 입력"
                        placeholder="청구 내용을 입력해주세요."
                        required
                        className="input-textarea"
                        style={{
                          flex: 1,
                          padding: "8px 8px" /* 여백 */,
                          height: "200px" /* 높이 */,
                          resize: "none" /* 크기 조절 비활성화 */,
                          border: "1px solid #ccc" /* 테두리 스타일 */,
                          borderRadius: "4px" /* 모서리 둥글게 */,
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>화재 사고 보고서 첨부</th>
                  <td>
                    <input
                      name="incidentReports"
                      type="file"
                      title="화재 사고 보고서 첨부"
                      accept="image/*,application/pdf"
                      multiple
                      className="input-file"
                    />
                  </td>
                </tr>
                <tr>
                  <th>추가 서류 첨부</th>
                  <td>
                    <input
                      name="additionalDocuments"
                      type="file"
                      title="추가 서류 첨부"
                      accept="image/*,application/pdf"
                      multiple
                      className="input-file"
                    />
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

export default InsFireRequestForm;
