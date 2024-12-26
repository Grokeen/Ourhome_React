import React, { useState} from 'react';
import { Link } from "react-router-dom";

const Header = () => {

     

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
                                        
                                        <a href="로그인 링크">로그인/회원가입</a></li>
                            <li><a href="고객센터 링크">고객센터</a></li>
                        </ul>
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
                      
                        
                        <li><a href="청구/납부 링크" class="transition hover:bg-gray-100 rounded-full "  >보험비 청구/납부</a></li>
                      
                        <li><a href="증명서 링크" class="transition hover:bg-gray-100 rounded-full "  >마이페이지</a></li>

                   
                    </ul>
                    
                </div>
            </nav>
     
  </header>
 );
};

export default Header;
