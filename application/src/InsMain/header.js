import React, { useState,Component, useRef, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

// import React, { Component } from "react";


const Header = () => {

	//250108 조환열
	const location = useLocation(); // 현재 경로 가져오기
	

	// -------------------------------------------------------------------------------
	// desc    :    2025-01-05 김용록 : 카테고리 클릭 시, 로그인 버튼 가리기
	// -------------------------------------------------------------------------------
	const [lginAndJoin_space, lginAndJoinSpace] = useState(false);
	// 로그인 버튼 숨기기
	const hiddenLoginButton = () => {
		lginAndJoinSpace(true);
	};

	// 로그인 버튼 보이기
	const showLoginButton = () => {
		lginAndJoinSpace(false);
	};

	// -------------------------------------------------------------------------------
	// desc    :    로그인 창 화면에 보이기/숨기기
	// -------------------------------------------------------------------------------
	const [login_div, loginView] = useState(false);
	const documentNone = () => {
		loginView(true);
	};
	const documentBlock = () => {
		loginView(false);
	};
	function loginOpen(){
		documentNone();
	};

	// -------------------------------------------------------------------------------
	// desc    :    2025-01-05 김용록 : 로그인 창 닫는 용도
	// -------------------------------------------------------------------------------
	const closeLogin = (e) => {
		documentBlock();
	}
	



	// -------------------------------------------------------------------------------
	// desc    :    2025-01-07 조환열 : 로그인 상태 관리
	// -------------------------------------------------------------------------------
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// 로그인 성공 시 상태 업데이트
	const handleLoginSuccess = (token) => {
		sessionStorage.setItem("jwtToken", token);
		setIsLoggedIn(true);
	};

	// 로그아웃 시 상태 초기화
	const handleLogout = async() => {
		// API 호출
		try{
			const response = await fetch("http://localhost:8080/user/logout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + sessionStorage.getItem("jwtToken")
				},
				body: JSON.stringify(),
			});
			if (response.ok) {
				sessionStorage.removeItem("jwtToken");
				setIsLoggedIn(false);
			}
			else{
				alert("로그아웃에 실패하였습니다.");
			}
		}catch(error){
			console.error("오류 발생:", error);
            alert("서버와의 통신에 실패했습니다.");
		}
		
	};

	
	// 로그인 상태 확인
	useEffect(() => {

		if (sessionStorage.getItem("jwtToken")) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
		
		// 현재 경로가 "/"일 경우에만 로그인 버튼 표시
        if (location.pathname === "/") {
            lginAndJoinSpace(false);
        } else {
            lginAndJoinSpace(true);
        }
	}, [location.pathname]);



	// -------------------------------------------------------------------------------
	// desc    :    2024-12-28 김용록 : 로그인 기능 추가
	// -------------------------------------------------------------------------------
    const [user_ID, userID] = useState('');
    const [user_PW, userPW] = useState('');

	const createLoginDTO = (id, password) => ({
		username: id,
		password: password,
	});

	//250106 조환열 async로 변경(await 사용)
    const login = async (id_val, passward_val) => {
		try {
			alert("id : " + id_val + " / pass : " + passward_val);
	
			documentNone();
	
			// 2025-01-11 김용록 : 프론트엔드 테스트용
			if(id_val === "master2"){
				handleLoginSuccess("1111111111");
			}


			// 유효성 검사
			if (!id_val || id_val.length < 3) {
				alert("아이디는 최소 3자 이상이어야 합니다.");
				return;
			}
			if (!passward_val || passward_val.length < 6) {
				alert("비밀번호는 최소 6자 이상이어야 합니다.");
				return;
			}
	
			const loginDTO = createLoginDTO(id_val, passward_val);

	
			// API 호출
			const response = await fetch("http://localhost:8080/user/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(loginDTO),
			});
	
			// 응답 처리
			if (response.ok) {
				const data = await response.json();
	
				// JWT 토큰 추출 및 저장
				const token = data.token; // 서버에서 토큰을 JSON 형식으로 반환한다고 가정
				handleLoginSuccess(token);
				alert("로그인 성공!");

				// 로그인 상태 업데이트
				documentBlock();

			} else {
				const data = await response.json();
				console.log(data);
				const errorMessage = data.message;
				alert("로그인 실패 : " + errorMessage);
			}
		} catch (error) {
			console.error("로그인 중 오류 발생:", error);
			alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
		}
	};
	// -------------------------------------------------------------------------------
	// desc    :    2024-01-07 조환열 : 로그아웃 기능 추가
	// -------------------------------------------------------------------------------
	const Logout = () => {
		const confirmLogout = window.confirm("로그아웃 하시겠습니까?"); // 확인 창 표시
		if (confirmLogout) {
			handleLogout(); // 로그아웃 처리
			alert("로그아웃 되었습니다.");
		}
	};
	
	
	// -------------------------------------------------------------------------------
	// desc    :    form 형식 백엔드에 전송하기 위해 추가(미완성) -> 이런 방법도 있길래 추가 만 해놈
	// -------------------------------------------------------------------------------
	const loginSubmit = (e) => {
		
	}
	


	// -------------------------------------------------------------------------------
	// desc    :    2025-01-05 김용록 : 로그인 창에서 입력값 변경
	// -------------------------------------------------------------------------------
	const handleChange_ID = (getValue ) => {
		userID(getValue.target.value)
	}
	const handleChange_PW = (getValue ) => {
		userPW(getValue.target.value)
	}

/*
	// -------------------------------------------------------------------------------
	// desc    :    2024-12-28 김용록 : 세션값 가져오는 문법 추가(미완성)        //이거 필요없을듯
	// -------------------------------------------------------------------------------
	const retrieveSessionItem = (key) => {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    };
     

    // 2024-12-28 김용록 : react에서 생성자가 뭐냐 시벌
	// 생성자로 세션 확인하고 화면 및 데이터 초기화
	const sessionUserInfo = retrieveSessionItem('user_Info');
    if( sessionUserInfo != null){
        loginButton_Hidden();
		// alert("세션 안 유저 정보 : "+sessionUserInfo);
    }
    else{
        // 세션 초기화
        sessionStorage.clear();
    };
*/



    return (
        <header class="header" >
            
            <div class="headerArea">
                <div class="inner">
                    <h1>
                        <a href="/" onClick={() => showLoginButton()} class="logo" title='(주)보험왕'/>     
                    </h1>
					<div className="headUtil">                      
						<ul className="util">    
							<li>                           
								{/* 로그인 버튼 */}
								{!isLoggedIn && (
									<a 
										id="logInButtonTop" 
										onClick={loginOpen} 
										className="w-10 hover:bg-slate-400"
									>
										로그인
									</a>
								)}

								{/* 로그아웃 버튼 */}
								{isLoggedIn && (
									<a 
										id="logOutButtonTop" 
										onClick={Logout} 
										className="w-13 hover:bg-slate-400"
									>
										로그아웃
									</a>
								)}

								{/* 회원가입 버튼 */}
								{!isLoggedIn && (
								<a href="/user/signup" className="hover:bg-slate-400">
									 	회원가입
								</a>
								)}
							</li>

							<li>
								<a href="고객센터 링크" className="hover:bg-slate-400">
									고객센터
								</a>
							</li>
						</ul>
					</div>
                </div>
            </div>


            

            {/* 로그인 창 */}
			<div>
				<div id="login_div" style={{ display: login_div ? 'block' : 'none' }} >

					<div id="L1" className="layerPop" >

						<div className="layTop">
							<h3 className="laytit">로그인</h3>
							{/* <button type="button" className="close" onClick={(documentBlock)}>닫기</button> */}
						</div>

						<div className="layCon">
							<div className="txtAlert">
								<form onSubmit={loginSubmit}>
									<p className="txt1">				
										아이디 : <input id="user_ID"  onChange={handleChange_ID}  type="text" className="left-2 h-5 top-6 border-black hover:bg-slate-100" placeholder="your account"/>
									</p>
									<p >
										<span className="txt1"  >
											비밀번호 : 
										</span>
										<span className="txt2" >

											<input id="user_PW" type="password" onChange={handleChange_PW} className="left-2 h-5 top-6 border-black hover:bg-slate-100" placeholder="*******"/>
										</span>

									</p>
								</form>
							</div>
							<div className="btnArea">
								{/* '/' 하면 F5 랑 같아서 바꿔야 함 */}
								<a  className="btnST btnM action" onClick={() => login(user_ID,user_PW)} >
								로그인
								</a>

								<a className="btnST btnM other" onClick={() => closeLogin()} >
								{/* <a className="btnST btnM other" onclick={() => closeLogin('close')} style={{ textDecoration: 'none' }}> */}
								닫기
								</a>	
							</div>
						</div>
					</div>
					<div className="dimmed" style={{ display: 'block' }}>
					</div>

				</div>


			</div>
            
            <nav class="gnbArea">
                <div class="inner">  
                    <ul class="menu">
                        <li >
                            <Link to={"/product"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }}  onClick={() => hiddenLoginButton()} >보험상품조회</Link>
                        </li>

                        <li class="delivery_icon">
                            <Link to={"/join"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }} onClick={() => hiddenLoginButton()} >보험 가입/신청</Link>
                        </li>
                      
                        
                        <li>
							
							<Link to={"/request"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }} onClick={() => hiddenLoginButton()} >보험비 청구/납부</Link>
						</li>
                      
                        <li>
							
							
							<Link to={"/Ins_MyPageMain"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }} onClick={() => hiddenLoginButton()} >마이페이지</Link>
						</li>

                   
                    </ul>
                    
                </div>
            </nav>



            <div className="main-wrap">
			<div> 	
				<br/>
				<br/>
				<br/>
				<br/>
			</div>

			<div id="lginAndJoinSpace" style={{ display: lginAndJoin_space ?  'none': 'block'  }} className="main-top inner-wrap">
				{/* 로그인 */}
				<div className="main-mypage" id="bef_login">
					<div className="btn-area">
					{/* 로그인 버튼 */}
					{!isLoggedIn && (
						<div id="logInButton" className="hover:bg-red-400">
							<a onClick={() => loginOpen()} className="btn-login">
								로그인
							</a>
						</div>
					)}

					{/* 로그아웃 버튼 */}
					{isLoggedIn && (
						<div id="logOutButton" className="hover:bg-red-400">
							<a onClick={Logout} className="btn-login">
								로그아웃
							</a>
						</div>
					)}

					{/* 회원가입 버튼 */}
					{!isLoggedIn && (
					<div id="joinButton" className="hover:bg-orange-300">
						<a href="/user/signup" onClick={() => hiddenLoginButton()} className="btn-join">
							회원가입
						</a>
					</div>
					)}
				</div>

				</div>
            </div>
            </div>
     
        </header>
    );
};

export default Header;
