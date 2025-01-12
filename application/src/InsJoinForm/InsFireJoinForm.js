import "../InsJoinForm.css";
import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

function InsFireJoinForm() {
    const [hasOtherBuildingType, setHasOtherBuildingType] = useState(false);
    const [isAddressSelected, setIsAddressSelected] = useState(false); // 주소 선택 상태 관리
    const navigate = useNavigate();
    // 카카오 주소 검색 API 로드
    useEffect(() => {

        if (!sessionStorage.getItem("jwtToken")) {
            console.error("접근 권한이 없습니다.");
            alert("로그인이 필요합니다.");
            navigate("/join"); 
        }

        const alreadyJoin = async () => {
            try {
                const response = await fetch("http://localhost:8080/join/fire", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem("jwtToken")
                    },
                });
    
                if (!response.ok) {
                    const errorData = await response.json();
                    alert(errorData.message || "신청중인 보험이 있습니다.");
                    navigate("/join/fire/"+errorData.value);
                    
                }
            } catch (error) {
                console.error("보험 가입 중 오류 발생:", error);
                alert("서버와의 통신에 실패했습니다.");
                navigate("/join"); 
            }
        };
        alreadyJoin();


        const script = document.createElement("script");
        script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [navigate]);

    const handleAddressSearch = () => {
        if (!window.daum) {
            alert("카카오 주소 검색 API가 로드되지 않았습니다.");
            return;
        }

        new window.daum.Postcode({
            oncomplete: (data) => {
                const roadAddress = data.roadAddress || data.jibunAddress;
                const addressInput = document.querySelector("input[name='propertyAddress']");
                if (addressInput) {
                    addressInput.value = roadAddress; // 주소 필드에 값 설정
                    setIsAddressSelected(true); // 상세 주소 입력 활성화
                }
            },
        }).open();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addressInput = document.querySelector("input[name='propertyAddress']");
        addressInput.disabled = false;
        const formData = new FormData(e.target); 
        const formObject = Object.fromEntries(formData.entries());
        addressInput.disabled = true;

            // buildingType이 '기타'라면 입력된 값으로 덮어쓰기
        if (formObject.buildingType === "기타") {
            if (formObject.buildingTypeOther){
                formObject.buildingType = formObject.buildingTypeOther;
            }
            else{
                alert("건물 유형의 기타 칸을 입력하세요.");
                return;
            }
        }

        console.log(formObject);

        try {
            const response = await fetch("http://localhost:8080/join/fire", {
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
                navigate("/join/fire/"+id); 
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
                <br />d
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
                    <p className="title-3">화재보험 가입</p>
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
                                        <input
                                            id="bank"
                                            name="bank"
                                            type="text"
                                            title="은행명 입력"
                                            placeholder="계좌가 개설된 은행명을 입력해주세요."
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>계좌번호</th>
                                    <td>
                                        <input
                                            id="account"
                                            name="account"
                                            type="text"
                                            title="계좌번호 입력"
                                            placeholder="보험료 납부 계좌번호를 입력해주세요."
                                            className="input-text"
                                        />
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
                                            placeholder="가입기간(년)"
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>건물 주소</th>
                                    <td>
                                        <div style={{ display: "flex" }}>
                                            <input
                                                id="propertyAddress"
                                                name="propertyAddress"
                                                type="text"
                                                title="건물 주소 입력"
                                                placeholder="보험 가입 건물의 주소를 입력해주세요."
                                                className="input-text"
                                                required
                                                disabled // 읽기 전용
                                                style={{ flex: 1 }}
                                            />

                                            {/* 2025-01-11 김용록 : 주소버튼 설정 변경 */}
                                            <div className="button_Address_div">
                                                <button
                                                    type="button"
                                                    className="button_Address blue"
                                                    onClick={handleAddressSearch}
                                                    style={{ marginLeft: "10px" }}
                                                >
                                                    주소 검색
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>상세 주소</th>
                                    <td>
                                        <input
                                            id="propertyDetailAddress"
                                            name="propertyDetailAddress"
                                            type="text"
                                            title="상세 주소 입력"
                                            placeholder="상세 주소를 입력해주세요."
                                            className="input-text"
                                            required
                                            disabled={!isAddressSelected} // 주소 선택 후 활성화
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>보장받을 건물 유형</th>
                                    <td>
                                        <div className="checkbox-group" id="building-type">
                                            <label>
                                                <input type="radio" name="buildingType" value="아파트" onChange={() => setHasOtherBuildingType(false)} /> 아파트
                                            </label>
                                            <label>
                                                <input type="radio" name="buildingType" value="단독주택" onChange={() => setHasOtherBuildingType(false)}/> 단독주택
                                            </label>
                                            <label>
                                                <input type="radio" name="buildingType" value="상업시설" onChange={() => setHasOtherBuildingType(false)}/> 상업시설
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="기타"
                                                    name = "buildingType"
                                                    onChange={(e) =>
                                                        setHasOtherBuildingType(true)
                                                    }
                                                />{" "}
                                                기타
                                            </label>
                                            {hasOtherBuildingType && (
                                                <input
                                                    type="text"
                                                    name="buildingTypeOther"
                                                    placeholder="기타 유형을 입력해주세요."
                                                    className="input-text"
                                                    style={{ marginTop: "10px", display: "block" }}
                                                />
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>건물 연식</th>
                                    <td>
                                        <input
                                            id="buildingYear"
                                            name="buildingYear"
                                            type="number"
                                            title="건물 연식 입력"
                                            placeholder="건물이 지어진 연도를 입력해주세요."
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>과거 화재 여부</th>
                                    <td>
                                        <div className="checkbox-group" id="previousFire">
                                            <label>
                                                <input type="radio" name="previousFire" value="true" /> 예
                                            </label>
                                            <label>
                                                <input type="radio" name="previousFire" value="false" /> 아니오
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>건물 내 평균 인원</th>
                                    <td>
                                        <input
                                            id="occupants"
                                            name="occupants"
                                            type="number"
                                            title="평균 인원 입력"
                                            placeholder="해당 건물에 평균적으로 몇 명이 거주하거나 상주하나요?"
                                            className="input-text"
                                        />
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

export default InsFireJoinForm;
