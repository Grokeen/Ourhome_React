import React, { useEffect, useState } from "react";
import "../InsJoinForm.css";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
    const navigate = useNavigate(); 
    const [isAddressSelected, setIsAddressSelected] = useState(false); // 주소 선택 상태 관리

    // 카카오 주소 검색 API 로드
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"; // 주소 검색 API
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleAddressSearch = () => {
        if (!window.daum) {
            alert("카카오 주소 검색 API가 로드되지 않았습니다.");
            return;
        }

        new window.daum.Postcode({
            oncomplete: (data) => {
                const roadAddress = data.roadAddress || data.jibunAddress;
                const addressInput = document.querySelector("input[name='location']");
                if (addressInput) {
                    addressInput.value = roadAddress; // 주소 필드에 값 설정
                    setIsAddressSelected(true); // 상세 주소 입력 활성화
                }
            },
        }).open();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addressInput = document.querySelector("input[name='location']");
        addressInput.disabled = false;
        const formData = new FormData(e.target); 
        const formObject = Object.fromEntries(formData.entries()); 
        addressInput.disabled = true;
        if (formObject.password !== formObject.checkPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formObject),
            });

            if (response.ok) {
                alert("회원가입이 성공적으로 완료되었습니다!");
                navigate("/"); 
            } else {
                const errorData = await response.json();
                alert(errorData.message || "회원가입에 실패했습니다.");
            }
        } catch (error) {
            console.error("회원가입 중 오류 발생:", error);
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
                <div className="title-wrap">
                    <p className="title-3">회원가입</p>
                    <p className="req-info">
                        <span className="req">*</span> 는 필수 입력 항목입니다.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="board-form">
                        <table>
                            <tbody>
                                <tr>
                                    <th>아이디</th>
                                    <td>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="아이디를 입력하세요"
                                            required
                                            minLength="3"
                                            maxLength="12"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>비밀번호</th>
                                    <td>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="비밀번호를 입력하세요"
                                            required
                                            minLength="8"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>비밀번호 확인</th>
                                    <td>
                                        <input
                                            type="password"
                                            name="checkPassword"
                                            placeholder="비밀번호 확인을 입력하세요"
                                            required
                                            minLength="8"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="이메일 주소를 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>이름</th>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="이름을 입력하세요"
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>생년월일</th>
                                    <td>
                                        <input
                                            type="date"
                                            name="birthDay"
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>주소</th>
                                    <td>
                                        <div style={{ display: "flex" }}>
                                            <input
                                                type="text"
                                                name="location"
                                                placeholder="주소를 검색하세요"
                                                required
                                                disabled // 읽기 전용
                                                style={{ flex: 1 }}
                                            />
                                            <button
                                                type="button"
                                                className="button navy"
                                                onClick={handleAddressSearch}
                                                style={{ marginLeft: "10px" }}
                                            >
                                                주소 검색
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>상세 주소</th>
                                    <td>
                                        <input
                                            type="text"
                                            name="detailLocation"
                                            placeholder="상세 주소를 입력하세요"
                                            required
                                            disabled={!isAddressSelected} // 주소 선택 후 활성화
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="button-group mt30">
                        <button type="submit" className="button navy">
                            회원가입
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
