import React, { useState} from 'react';
import { Link } from "react-router-dom";



const Header = () => {
	// 로그인/로그아웃 버튼 화면에 보이기/숨기기
	const [logIn_Button, logInButton] = useState(false);
	const [logOut_Button, logOutButton] = useState(false);
    const [logIn_ButtonTop, logInButtonTop] = useState(false);
	const [logOut_ButtonTop, logOutButtonTop] = useState(false);
	const loginButton_Visable = () => {
		logOutButton(false);
		logInButton(true);

        logOutButtonTop(false);
		logInButtonTop(true);
	};
	const loginButton_Hidden = () => {
		logOutButton(true);
		logInButton(false);

        logOutButtonTop(true);
		logInButtonTop(false);
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

	// 세션값 가져오는 문법 추가
	const retrieveSessionItem = (key) => {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    };
     
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
        <header class="header" >
            
            <div class="headerArea">
                <div class="inner">
                    <h1>
                        <a href="/" class="logo" title='(주)보험왕'/>     

                    </h1>

                    <div class="headUtil">                      
                        <ul class="util">    
                            <li>                           
                                    <a  id="logInButtonTop" onClick={() => loginOpen()} class="w-10 hover:bg-slate-400" style={{ display: logIn_Button ?  'none' : 'block' }} >
                                        로그인
                                    </a>

                                    <a  id="logOutButtonTop" onClick={() => loginOpen()}class="w-13 hover:bg-slate-400" style={{ display: logIn_Button ?  'block' : 'none' }} >
                                        로그아웃
                                    </a>
                                    /                                
                                    <a href="//" class="hover:bg-slate-400" >
                                        회원가입
                                    </a>
                   
                            </li>

                            <li>
                                <a href="고객센터 링크" class="hover:bg-slate-400" >
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
								<a  className="btnST btnM action" onClick={() => login()} >
								로그인
								</a>

								<a className="btnST btnM other" style={{ textDecoration: 'none' }}>
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
                            <Link to={"/Ins_SelectProduct"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }}>보험상품조회</Link>
                        </li>

                        <li class="delivery_icon">
                            <Link to={"/Ins_SelectApplicationForm"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }}>보험 가입/신청</Link>
                        </li>
                      
                        
                        <li>
							
							<Link to={"/Ins_RequestMain"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }}>보험비 청구/납부</Link>
						</li>
                      
                        <li>
							
							
							<Link to={"/Ins_MyPageMain"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }}>마이페이지</Link>
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

			<div className="main-top inner-wrap">
				{/* 로그인 */}
				<div className="main-mypage" id="bef_login">

					<div className="btn-area">
						<div id="logInButton"  className="hover:bg-red-400" style={{ display: logIn_Button ?  'none' : 'block' }}  >
							<a  onClick={() => loginOpen()} className="btn-login">
								로그인
							</a>

						</div>

						<div id="logOutButton" className="hover:bg-red-400" style={{ display: logIn_Button ? 'block' : 'none' }} >
							<a  onClick={() => loginOpen()} className="btn-login">
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
            </div>
            </div>
     
        </header>
    );
};

export default Header;
