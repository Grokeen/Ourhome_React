

import "../App.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function App() {

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
                        <a href="/" className="btn-login">
                            로그인
                        </a>
                        <a href="/" className="btn-join">
                            회원가입
                         </a>
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




            <div>


                
            </div>
        </div>

    );
}

export default App;
