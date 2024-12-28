
import "../App.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function App() {

	// 세션값 가져오는 문법 추가
	const retrieveSessionItem = (key) => {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    };


	// 로그인 창 화면에 보이기/숨기기
	const [login_div, loginView] = useState(false);
	const documentNone = () => {
		loginView(true);
	};
	const documentBlock = () => {
		loginView(false);
	};
	function loginOpen(){
		documentNone();
	}

	
	// 로그인/로그아웃 버튼 화면에 보이기/숨기기
	const [logIn_Button, logInButton] = useState(false);
	const [logOut_Button, logOutButton] = useState(false);
	const loginButton_Visable = () => {
		logOutButton(false);
		logInButton(true);
	};
	const loginButton_Hidden = () => {
		logOutButton(true);
		logInButton(false);
	};



	// 2024-12-28 김용록 : 로그인 기능 추가
	const [user_ID, userID] = useState('');
  	const [user_PW, userPW] = useState('');
	const login = Event => {
		
		if(userID === "admin" && 
			userPW === "admin"
		  ){
			const user_Info = { Id: user_ID, pw: user_PW };
			sessionStorage.setItem( user_Info , JSON.stringify( user_Info));
			loginButton_Hidden();
			documentBlock();
		}else{
			loginButton_Visable();
			documentBlock();
		}
	}

	// 2024-12-28 김용록 : react에서 생성자가 뭐냐 시벌
	// 생성자로 세션 확인하고 화면 및 데이터 초기화
	const sessionUserInfo = retrieveSessionItem('user_Info');
		if( sessionUserInfo != null){
			loginButton_Hidden();

		}
		else{
			// 세션 초기화
			sessionStorage.clear();
	}


	return (

		<div className="main-wrap">
			<div> 	
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
			</div>

			<div className="main-top inner-wrap">
				{/* 로그인 */}
				<div className="main-mypage" id="bef_login">

					<div className="btn-area">
						<div id="logInButton"  className="hover:bg-red-400" style={{ display: logIn_Button ?  'none' : 'block' }}  >
							<a onClick={() => loginOpen()} className="btn-login">
								로그인
							</a>

						</div>

						<div id="logOutButton" className="hover:bg-red-400" style={{ display: logIn_Button ? 'block' : 'none' }} >
							<a onClick={() => loginOpen()} className="btn-login">
								로그아웃
							</a>

						</div>
						

						<div className="hover:bg-orange-300">
							<a href="/" className="btn-join">
								회원가입
							</a>
						</div>
						
					</div>
				</div>


				{/* 배너 */}
				<div className="slick main-top-banner">
					<div className="wrap slick-initialized slick-slider" id="div_mainTopBanner">
						<div className="slick-list draggable">							
							<div className="slick-track" >
								<div className="slide slick-slide slick-cloned" data-slick-index="-1" tabindex="-1" id="" aria-hidden="true" >
									<a href="/" tabindex="-1">
										<p className="tit">
											보험은 보험왕에서,
											<br />
											클릭으로 간편하게 받자!
										</p>
										<span className="txt">
											보험을 신청해보세요!
										</span>
									</a>
								</div>

							
							</div>
						</div>
					</div>
					
					<div className="slide-nav">
						<span className="slick-page">
							<em>01</em> / 02
						</span>
						
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
								
								<p className="txt1">				
									아이디 : <input id="user_ID" type="text" className="left-2 h-5 top-6 border-black hover:bg-slate-100" placeholder="your account"/>
								</p>
								<p >
									<span className="txt1"  >
										비밀번호 : 
									</span>
									<span className="txt2" >

										<input id="user_PW" type="password"  className="left-2 h-5 top-6 border-black hover:bg-slate-100" placeholder="*******"/>
									</span>
									
								</p>
							</div>
							<div className="btnArea">
								{/* '/' 하면 F5 랑 같아서 바꿔야 함 */}
								<a className="btnST btnM action" onClick={() => login()} >
								로그인
								</a>

								<a href="/" className="btnST btnM other" style={{ textDecoration: 'none' }}>
								닫기
								</a>

								
							</div>
						</div>
					</div>
					<div className="dimmed" style={{ display: 'block' }}>
					</div>

				</div>


			</div>
		</div>

	);
}

export default App;
