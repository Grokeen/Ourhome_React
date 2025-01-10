import "../App.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function InsJoinForm() {
    const navigate = useNavigate();

    // API 호출 후 확인 함수
    const handleNavigation = async (url) => {
        if(sessionStorage.getItem("jwtToken")){
            try {
                const response = await fetch("http://localhost:8080"+url,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem("jwtToken")
                    },
                });
    
                if (response.ok) {
                    // 서버가 OK 응답을 보냈을 때만 이동
                    navigate(url);
                } else {
                    const errorData = await response.json();
                    if (errorData.value){
                        alert(errorData.message || "권한이 없습니다.");
                        navigate(url+"/"+errorData.value); 
                    }
                    else{
                        alert(errorData.message || "권한이 없습니다.");
                    }
                }
            } catch (error) {
                console.error("오류 발생:", error);
                alert("서버와의 통신에 실패했습니다.");
            }
        }
        else{
            alert("로그인이 필요합니다.");
        }
        
    };

    return (
        <div>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            {/* 건강 보험 */}
            <div className="main-prd-wrap">
                <h4 className="navi-title">건강</h4>
                <div className="list-prd-box">
                    <ul>
                        <li className="list-prd">
                            <Link
                                to="#"
                                className="splunk_mainProduct mainProduct dental"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault(); // 기본 이동 방지
                                    handleNavigation("/join/health");
                                }}
                            >
                                <p className="title">
                                    <strong>건강보험가입</strong>
                                </p>
                                <p className="text">
                                    <span className="fc-blue">아프면 개고생이야. 돈이라도 지키자.</span>
                                    <br />
                                    아플 때, 마음 놓고 웃을 수 있도록
                                </p>
                                <p className="text-sub"></p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 화재 보험 */}
            <div className="main-prd-wrap">
                <h4 className="navi-title">화재</h4>
                <div className="list-prd-box">
                    <ul>
                        <li className="list-prd">
                            <Link
                                to="#"
                                className="splunk_mainProduct mainProduct dental"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation("/join/fire");
                                }}
                            >
                                <p className="title">
                                    <strong>화재보험가입</strong>
                                </p>
                                <p className="text">
                                    <span className="fc-blue">넌 웃을 때가 제일 예뻐</span>
                                    <br />
                                    불났을 때, 마음 놓고 웃을 수 있도록
                                </p>
                                <p className="text-sub"></p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 자동차 보험 */}
            <div className="main-prd-wrap">
                <h4 className="navi-title">자동차</h4>
                <div className="list-prd-box">
                    <ul>
                        <li className="list-prd">
                            <Link
                                to="#"
                                className="splunk_mainProduct mainProduct dental"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation("/join/auto");
                                }}
                            >
                                <p className="title">
                                    <strong>자동차보험가입</strong>
                                </p>
                                <p className="text">
                                    <span className="fc-blue">넌 웃을 때가 제일 예뻐</span>
                                    <br />
                                    사고났을 때, 마음 놓고 웃을 수 있도록
                                </p>
                                <p className="text-sub"></p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InsJoinForm;
