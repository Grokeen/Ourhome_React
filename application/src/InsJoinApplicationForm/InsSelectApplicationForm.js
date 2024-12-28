import "../App.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function App() {

    return (
        <div>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            {/* 건강 보험 */}
            <div class="main-prd-wrap">

                    <h4 class="navi-title">
                        건강
                    </h4>
                <div class="top-prd-box" id="prd_box_6">
                    <div class="top-prd-left">
                        <div class="top-prd-title mgb15">
                            <p class="cate-title mgb15">
                                건강
                            </p>
                            <p class="large-title mgb10">
                                나도 항상 건강할 줄 알랐다.
                                
                                <br/>
                                
                                아프기 전에 미리 준비 필수.
                                </p>
                            <p class="small-title">
                            </p>
                        </div>

                        <div class="top-prd-sub-title">
                        </div>
                    </div>

                    <div class="top-prd-right">
                        <div class="top-prd-img">   

                        </div>
                    </div>
                </div>

                <div class="list-prd-box">
                    <ul>
                       
                        <li class="list-prd">   
                             <Link to={"/Ins_UpdateApplicationForm"} class="splunk_mainProduct mainProduct dental"  style={{ textDecoration: 'none' }}>
                                <p class="title">
                                    <strong>
                                        건강보험
                                    </strong>
                                </p>       
                                <p class="text">
                                    <span class="fc-blue">
                                        아프면 개고생이야. 돈이라도 지키자.
                                    </span>
                                    <br/>
                                    아플 때, 마음 놓고 웃을 수 있도록
                                </p>       

                                <p class="text-sub">
                                </p>           
                            </Link>      
                        </li>   
                    </ul>
                </div>
            </div>



            {/* 화재 보험 */}
            <div class="main-prd-wrap">

                <h4 class="navi-title">
                    화재
                </h4>
                <div class="top-prd-box" id="prd_box_6">
                <div class="top-prd-left">
                    <div class="top-prd-title mgb15">
                        <p class="cate-title mgb15">
                            화재
                        </p>
                        <p class="large-title mgb10">
                            화재는 방심할 때, 집 안 어디서나 발생합니다.

                            </p>
                        <p class="small-title">
                        </p>
                    </div>

                    <div class="top-prd-sub-title">
                    </div>
                </div>

                <div class="top-prd-right">
                    <div class="top-prd-img">   

                    </div>
                </div>
                </div>

                <div class="list-prd-box">
                <ul>
                    <li class="list-prd">   
                         <Link to={"/Ins_UpdateApplicationForm"} class="splunk_mainProduct mainProduct dental"  style={{ textDecoration: 'none' }}>
                            <p class="title">
                                <strong>
                                    일반화재보험
                                </strong>
                            </p>       
                            <p class="text">
                                <span class="fc-blue">
                                    넌 웃을 때가 제일 예뻐
                                </span>
                                <br/>
                                불났을 때, 마음 놓고 웃을 수 있도록
                            </p>       

                            <p class="text-sub">
                            </p>           
                        </Link>      
                    </li>   
                    <li class="list-prd">   
                         <Link to={"/Ins_UpdateApplicationForm"} class="splunk_mainProduct mainProduct dental"  style={{ textDecoration: 'none' }}>
                            <p class="title">
                                <strong>
                                    주택화재보험
                                </strong>
                            </p>       
                            <p class="text">
                                <span class="fc-blue">
                                    임대 준 상가에서 불 나면, 어떡할래?
                                </span>
                                <br/>
                                불났을 때, 마음 놓고 웃을 수 있도록
                            </p>       

                            <p class="text-sub">
                            </p>           
                        </Link>      
                    </li>   
                    <li class="list-prd">   
                         <Link to={"/Ins_UpdateApplicationForm"} class="splunk_mainProduct mainProduct dental"  style={{ textDecoration: 'none' }}>
                            <p class="title">
                                <strong>
                                    공장화재보험
                                </strong>
                            </p>       
                            <p class="text">
                                <span class="fc-blue">
                                    공장 주인들 마음에 행복의 불씨를
                                </span>
                                <br/>
                                불났을 때, 마음 놓고 웃을 수 있도록
                            </p>       

                            <p class="text-sub">
                            </p>           
                        </Link>      
                    </li>   
                </ul>
                
                </div>
            </div>

            {/* 자동차 보험 */}
            <div class="main-prd-wrap">

                    <h4 class="navi-title">
                        자동차
                    </h4>
                <div class="top-prd-box" id="prd_box_6">
                    <div class="top-prd-left">
                        <div class="top-prd-title mgb15">
                            <p class="cate-title mgb15">
                                자동차
                            </p>
                            <p class="large-title mgb10">
                                큰 돈 드는 자동차 견적,
                                
                                <br/>
                                
                                사고나기 전에 준비 필수.
                                </p>
                            <p class="small-title">
                            </p>
                        </div>

                        <div class="top-prd-sub-title">
                        </div>
                    </div>

                    <div class="top-prd-right">
                        <div class="top-prd-img">   

                        </div>
                    </div>
                </div>

                <div class="list-prd-box">
                    <ul>
                        <li class="list-prd">   
                             <Link to={"/Ins_UpdateApplicationForm"} class="splunk_mainProduct mainProduct dental"  style={{ textDecoration: 'none' }}>
                                <p class="title">
                                    <strong>
                                        자동차보험
                                    </strong>
                                </p>       
                                <p class="text">
                                    <span class="fc-blue">
                                        넌 웃을 때가 제일 예뻐
                                    </span>
                                    <br/>
                                    사고났을 때, 마음 놓고 웃을 수 있도록
                                </p>       

                                <p class="text-sub">
                                </p>           
                            </Link>      
                        </li>   
                        <li class="list-prd">   
                             <Link to={"/Ins_UpdateApplicationForm"} class="splunk_mainProduct mainProduct dental"  style={{ textDecoration: 'none' }}>
                                <p class="title">
                                    <strong>
                                        이륜차보험
                                    </strong>
                                </p>       
                                <p class="text">
                                    <span class="fc-blue">
                                        배달 아져씨들 항상 마음 놓고 타세요.
                                    </span>
                                    <br/>
                                    사고났을 때, 마음 놓고 웃을 수 있도록
                                </p>       

                                <p class="text-sub">
                                </p>           
                            </Link>      
                        </li>   
                    </ul>
                </div>
            </div>
        </div>




    );
}

export default App;
