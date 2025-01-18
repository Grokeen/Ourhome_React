import "../../InsJoinForm.css";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

function InsMyPageJoinedUpdateForm() {
  const [hasOtherVehicleUsage, setHasOtherVehicleUsage] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { productName  } = useParams();
  useEffect(() => {
    if (!sessionStorage.getItem("jwtToken")) {
      console.error("접근 권한이 없습니다.");
      alert("로그인이 필요합니다.");
      navigate("/");
    }

    const checkJoined = async () => {
      try {
        const response = await fetch("http://localhost:8080/mypage/renewable/health/"+id, {
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
            alert(errorData.message || "해당 보험이 존재하지 않습니다.")
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
    formObject.family = formData.getAll("family");
    formObject.pre_existing_conditions = formData.getAll(
      "pre_existing_conditions"
    );

    try {
      const response = await fetch("http://localhost:8080/mypage/renewable/health/"+id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("jwtToken"),
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        const data = await response.json();
        const id = data.insuranceId;
        navigate("/mypage/renewable" + id);
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
                  <th>흡연 여부를 체크해 주세요.</th>
                  <td>
                    <div className="checkbox-group">
                      <label>
                        <input type="radio" name="smoke" value="true" /> 예
                      </label>
                      <label>
                        <input type="radio" name="smoke" value="false" /> 아니오
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>일주일 당 음주 횟수</th>
                  <td>
                    <div className="checkbox-group">
                      <label>
                        <input type="radio" name="drink" value="0" /> 0회
                      </label>
                      <label>
                        <input type="radio" name="drink" value="1" /> 1회
                      </label>
                      <label>
                        <input type="radio" name="drink" value="2" /> 2회
                      </label>
                      <label>
                        <input type="radio" name="drink" value="3" /> 3회 이상
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>일주일 당 운동 시간</th>
                  <td>
                    <div className="checkbox-group">
                      <label>
                        <input type="radio" name="exercise" value="0" /> 0시간
                      </label>
                      <label>
                        <input type="radio" name="exercise" value="1" /> 1시간
                      </label>
                      <label>
                        <input type="radio" name="exercise" value="2" /> 2시간
                      </label>
                      <label>
                        <input type="radio" name="exercise" value="3" /> 3시간
                        이상
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>가족 중 유전질환이 있으면 체크해주세요.</th>
                  <td>
                    <div className="checkbox-group">
                      <label>
                        <input
                          type="checkbox"
                          name="family"
                          value="심혈관 질환"
                        />{" "}
                        심혈관 질환
                      </label>
                      <label>
                        <input type="checkbox" name="family" value="당뇨병" />{" "}
                        당뇨병
                      </label>
                      <label>
                        <input type="checkbox" name="family" value="고혈압" />{" "}
                        고혈압
                      </label>
                      <label>
                        <input type="checkbox" name="family" value="암" /> 암
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="기타"
                          onChange={(e) =>
                            setHasOtherGeneticDiseases(e.target.checked)
                          }
                        />{" "}
                        기타
                      </label>
                      {hasOtherGeneticDiseases && (
                        <input
                          type="text"
                          name="family"
                          placeholder="기타 유전질환 입력"
                          className="input-text"
                          style={{ marginTop: "10px", display: "block" }}
                        />
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>기존 병력을 체크해 주세요.</th>
                  <td>
                    <div className="checkbox-group">
                      <label>
                        <input
                          type="checkbox"
                          name="pre_existing_conditions"
                          value="심혈관 질환"
                        />{" "}
                        심혈관 질환
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="pre_existing_conditions"
                          value="당뇨병"
                        />{" "}
                        당뇨병
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="pre_existing_conditions"
                          value="고혈압"
                        />{" "}
                        고혈압
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="pre_existing_conditions"
                          value="암"
                        />{" "}
                        암
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="기타"
                          onChange={(e) =>
                            setHasOtherPastDiseases(e.target.checked)
                          }
                        />{" "}
                        기타
                      </label>
                      {hasOtherPastDiseases && (
                        <input
                          type="text"
                          placeholder="기타 병력 입력"
                          name="pre_existing_conditions"
                          className="input-text"
                          style={{ marginTop: "10px", display: "block" }}
                        />
                      )}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>최근 수술 여부를 체크 해주세요.</th>
                  <td>
                    <div className="checkbox-group">
                      <label>
                        <input type="radio" name="surgery" value="true" /> 예
                      </label>
                      <label>
                        <input type="radio" name="surgery" value="false" />{" "}
                        아니오
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="button-group mt30">
            <button type="submit" className="button navy" id="btnSubmit">
              갱신하기
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default InsMyPageJoinedUpdateForm;
