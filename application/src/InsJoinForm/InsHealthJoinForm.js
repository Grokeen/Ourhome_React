import "../InsJoinForm.css";
import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";

function InsHealthJoinForm() {
    const navigate = useNavigate();
    const [hasOtherGeneticDiseases, setHasOtherGeneticDiseases] = useState(false);
    const [hasOtherPastDiseases, setHasOtherPastDiseases] = useState(false);

    // 로그인 상태 확인
    useEffect(() => {
        if (!sessionStorage.getItem("jwtToken")) {
            console.error("접근 권한이 없습니다.");
            alert("로그인이 필요합니다.");
            navigate("/join"); 
        }

        const alreadyJoin = async () => {
            try {
                const response = await fetch("http://localhost:8080/join/health", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem("jwtToken")
                    },
                });
    
                if (!response.ok) {
                    const errorData = await response.json();
                    if (errorData.value){
                        alert(errorData.message || "이미 가입되어 있습니다.");
                        navigate("/join/health/"+errorData.value); 
                    }
                    else{
                        alert(errorData.message || "이미 가입되어 있습니다.");
                        navigate("/join"); 
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
        formObject.family = formData.getAll("family");
        formObject.pre_existing_conditions = formData.getAll("pre_existing_conditions");

        try {
            const response = await fetch("http://localhost:8080/join/health", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + sessionStorage.getItem("jwtToken")
                },
                body: JSON.stringify(formObject),
            });

            if (response.ok) {
                const data = await response.json();
                const id = data.insuranceId;
                navigate("/join/health/"+id); 
            } else {
                const errorData = await response.json();
                alert(errorData.message || "가입 신청에 실패했습니다.");
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
                    <p className="title-3">건강보험 가입</p>
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
                                    <th>보험비를 지급받을 은행</th>
                                    <td>
                                        <input
                                            name="bank"
                                            type="text"
                                            title="은행명 입력"
                                            placeholder="보험비를 지급받을 은행명을 입력해주세요."
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>계좌번호</th>
                                    <td>
                                        <input
                                            name="account"
                                            type="text"
                                            title="계좌번호 입력"
                                            placeholder="보험료를 지급받을 계좌번호를 입력해주세요."
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>보험 가입 기간</th>
                                    <td>
                                        <input
                                            name="duration"
                                            type="number"
                                            title="가입기간 입력"
                                            placeholder="가입기간(년)"
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
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
                                                <input type="radio" name="exercise" value="3" /> 3시간 이상
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>가족 중 유전질환이 있으면 체크해주세요.</th>
                                    <td>
                                        <div className="checkbox-group">
                                            <label>
                                                <input type="checkbox" name="family" value="심혈관 질환" /> 심혈관 질환
                                            </label>
                                            <label>
                                                <input type="checkbox" name="family" value="당뇨병" /> 당뇨병
                                            </label>
                                            <label>
                                                <input type="checkbox" name="family" value="고혈압" /> 고혈압
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
                                                    placeholder="기타 유전질환을 입력해주세요."
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
                                                <input type="checkbox" name="pre_existing_conditions" value="심혈관 질환" /> 심혈관 질환
                                            </label>
                                            <label>
                                                <input type="checkbox" name="pre_existing_conditions" value="당뇨병" /> 당뇨병
                                            </label>
                                            <label>
                                                <input type="checkbox" name="pre_existing_conditions" value="고혈압" /> 고혈압
                                            </label>
                                            <label>
                                                <input type="checkbox" name="pre_existing_conditions" value="암" /> 암
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
                                                    placeholder="기타 병력을 입력해주세요."
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
                                                <input type="radio" name="surgery" value="false" /> 아니오
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="button-group mt30">
                        <button type="submit" className="button navy" id="btnSubmit">
                            다음
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InsHealthJoinForm;
