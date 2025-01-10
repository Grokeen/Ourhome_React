import "../InsJoinForm.css";
import React, { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";

function InsHealthRequestForm() {
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
                const response = await fetch("http://localhost:8080/request/health/"+id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem("jwtToken")
                    },
                });
    
                if (!response.ok) {
                    const errorData = await response.json();
                    if (errorData.value){
                        alert(errorData.message || "가입되지 않은 보험입니다.");
                        navigate("/request"); 
                    }
                    else{
                        alert(errorData.message || "가입되지 않은 보험입니다.");
                        navigate("/request"); 
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

        console.log(formObject)
        try {
            const response = await fetch("http://localhost:8080/request/health/"+id, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem("jwtToken")
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
                const errorData = await response.json();
                alert(errorData.message || "가입 신청에 실패했습니다.");
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
                    <p className="title-3">건강보험 청구</p>
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
                                    <th>비용 날짜</th>
                                    <td>
                                        <input
                                            name="date"
                                            type="date"
                                            title="비용 날짜 입력"
                                            required
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>청구 내용</th>
                                    <td>
                                        <input
                                            name="content"
                                            type="text"
                                            title="청구 내용 입력"
                                            placeholder="청구 내용을 입력해주세요."
                                            required
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>발생 비용</th>
                                    <td>
                                        <input
                                            name="price"
                                            type="number"
                                            title="비용 입력"
                                            placeholder="발생 비용을 입력해주세요."
                                            required
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>영수증 이미지 첨부</th>
                                    <td>
                                        <input
                                            name="receiptImages"
                                            type="file"
                                            title="영수증 첨부"
                                            accept="image/*"
                                            multiple
                                            required
                                            className="input-file"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>청구 유형</th>
                                    <td>
                                        <select
                                            name="claimType"
                                            required
                                            className="input-select"
                                            title="청구 유형 선택"
                                        >
                                            <option value="">선택해주세요</option>
                                            <option value="입원">입원</option>
                                            <option value="수술">수술</option>
                                            <option value="진료">진료</option>
                                            <option value="약제비">약제비</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>병원명</th>
                                    <td>
                                        <input
                                            name="hospitalName"
                                            type="text"
                                            title="병원명 입력"
                                            placeholder="병원명을 입력해주세요."
                                            required
                                            className="input-text"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>추가 서류 이미지 첨부</th>
                                    <td>
                                        <input
                                            name="additionalDocuments"
                                            type="file"
                                            title="추가 서류 이미지 첨부"
                                            accept="image/*"
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
                            다음
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InsHealthRequestForm;
