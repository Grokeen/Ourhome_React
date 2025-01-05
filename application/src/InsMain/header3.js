import React, { useState,Component, useRef} from 'react';
import { Link } from "react-router-dom";

class Header extends Component{

    state = {
        message : '',
        logIn_Button : false,
        logOut_Button : false,
        logIn_ButtonTop : false,
        logOut_ButtonTop : false,
        lginAndJoin_space : false,
        login_div : false,

        user_ID : '',
        user_PW : '',

    }

    render(){

        
            
        const handleChange = () => {
            
        }
        
            // const inputFocus = useRef(null);
            // if(!values.name){
        
            // }
        
            // 로그인/로그아웃 버튼 화면에 보이기/숨기기
            const [logIn_Button, logInButton] = this.state.logIn_Button;
            const [logOut_Button, logOutButton] = this.state.logOut_Button;
            const [logIn_ButtonTop, logInButtonTop] = this.state.logIn_ButtonTop;
            const [logOut_ButtonTop, logOutButtonTop] = this.state.logOut_ButtonTop;
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
        
        
        
            // 2025-01-05 김용록 : 카테고리 클릭 시, 로그인 버튼 가리기
            const [lginAndJoin_space, lginAndJoinSpace] = this.state.lginAndJoin_space;
            const hiddenLoginButton = () => {
                lginAndJoinSpace(true);
            };
        
        
            
            // 로그인 창 화면에 보이기/숨기기
            const [login_div, loginView] = this.state.login_div;
            const documentNone = () => {
                loginView(true);
            };
            const documentBlock = () => {
                loginView(false);
            };
            function loginOpen(){
                documentNone();
            };
        
        
        
            // 2024-12-28 김용록 : 로그인 기능 추가
            const [user_ID, userID] = this.state.user_ID,[user_PW, userPW] = this.state.user_PW;
            const login = (id_val , passward_val) => {
                alert("sss : " + id_val + " / "+ passward_val );
            
        
                // 202401030946 세션에는 문자열 만 저장할 수 있으므로 객체나 배열은 JSON.stringify를 사용해야 한다.
                // const productCart = { Id: id_val, pass: passward_val };
                // sessionStorage.setItem(user_Info+'user_Info', JSON.stringify(productCart));
        
        
                // 테스트용
                console.log(sessionStorage);
        
                // 장바구니 js 보이게
                documentNone();
        
                if(userID === "admin" && 
                    userPW === "admin"
                  ){
                    const user_Info = { Id: user_ID, pw: user_PW };
        
                    alert(userID +"ss");
        
                    sessionStorage.setItem( user_Info , JSON.stringify( user_Info));
                    loginButton_Hidden();
                    documentBlock();
                }else{
                    loginButton_Visable();
                    documentBlock();
                }
            };
        
        
        
        
        
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
                // alert("세션 안 유저 정보 : "+sessionUserInfo);
            }
            else{
                // 세션 초기화
                sessionStorage.clear();
            };
        
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
                                                아이디 : <input id="user_ID"  onChange={() => handleChange()}  type="text" className="left-2 h-5 top-6 border-black hover:bg-slate-100" placeholder="your account"/>
                                            </p>
                                            <p >
                                                <span className="txt1"  >
                                                    비밀번호 : 
                                                </span>
                                                <span className="txt2" >
            
                                                    <input id="user_PW" value="" type="password"  className="left-2 h-5 top-6 border-black hover:bg-slate-100" placeholder="*******"/>
                                                </span>
                                                
                                            </p>
                                        </div>
                                        <div className="btnArea">
                                            {/* '/' 하면 F5 랑 같아서 바꿔야 함 */}
                                            <a  className="btnST btnM action" onClick={() => login(user_ID,user_PW)} >
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
                                        <Link to={"/Ins_SelectProduct"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }}  onClick={() => hiddenLoginButton()} >보험상품조회</Link>
                                    </li>
            
                                    <li class="delivery_icon">
                                        <Link to={"/Ins_SelectApplicationForm"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }} onClick={() => hiddenLoginButton()} >보험 가입/신청</Link>
                                    </li>
                                  
                                    
                                    <li>
                                        
                                        <Link to={"/Ins_RequestMain"} class="transition hover:bg-gray-100 rounded-full "  style={{ textDecoration: 'none' }} onClick={() => hiddenLoginButton()} >보험비 청구/납부</Link>
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
                                    
            
                                    <div id="joinButton" className="hover:bg-orange-300">
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

    }
}
export default Header;