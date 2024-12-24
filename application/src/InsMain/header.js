import React, { useState} from 'react';

const Header = () => {
  return (
        <header class="header" >
            
            <div class="headerArea">
                <div class="inner">
                    <h1>
                        <a href="/" class="logoTitle">
                            (주)보험왕
                        </a> 
                        <a href="/" class="logo">
                        </a>    
                            
                        
                    </h1>

                    <div class="headUtil">                      
                        <ul class="util">    
                                    <li><a href="로그인 링크">로그인/회원가입</a></li>
                            <li><a href="고객센터 링크">고객센터</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <nav class="gnbArea">
                <div class="inner">  
                    <ul class="menu">
                        <li ><a href="보럼상품 링크" class="transition hover:bg-gray-100 rounded-full "  >보험상품</a></li>

                        <li class="delivery_icon"><a href="보험가입 링크" class="transition hover:bg-gray-100 rounded-full "  >보험 가입/신청</a></li>
                      
                        
                        <li><a href="청구/납부 링크" class="transition hover:bg-gray-100 rounded-full "  >보험비 청구/납부</a></li>
                      
                        <li><a href="증명서 링크" class="transition hover:bg-gray-100 rounded-full "  >증명서 발급</a></li>

                   
                    </ul>
                    
                </div>
            </nav>
     
  </header>
 );
};

export default Header;
