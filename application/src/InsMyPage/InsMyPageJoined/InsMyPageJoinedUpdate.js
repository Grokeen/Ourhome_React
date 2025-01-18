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
        const response = await fetch("http://localhost:8080/mypage/joined/"+id, {
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
        console.error("보험 가입 중 오류 발생:", error);
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
    

    try {
      const response = await fetch("http://localhost:8080/mypage/joined/"+id+"/update", {
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
        alert("수정 되었습니다.")
        navigate("/mypage/joined/" +productName+"/"+ id);
      } else {
        if (response.status === 403) {
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          sessionStorage.removeItem("jwtToken");
          navigate("/");
        } else {
          const errorData = await response.json();
          alert(errorData.message || "계좌 변경에 실패했습니다.");
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
          <p className="title-3">계좌 수정</p>
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
              </tbody>
            </table>
          </div>
          <div className="button-group mt30">
            <button type="submit" className="button navy" id="btnSubmit">
              수정하기
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default InsMyPageJoinedUpdateForm;
