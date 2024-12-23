import React, { useState} from 'react';


const Footer = () => {
  return (
    <footer class="footer">
        <br/>
        <br/>
        <br/>
        <br/>   
            <div class="siteInfo">
                <div class="inner">
                    <ul class="site-local">
                        <li><a href="/" class="hover:bg-gray-300 rounded-full" >회사소개</a></li>
                        <li><a href="/" class="hover:bg-gray-300 rounded-full" >이용약관</a></li>
                        <li><a href="/" class="hover:bg-gray-300 rounded-full" ><b>개인정보처리방침</b></a></li>
                        <li><a href="/" class="hover:bg-gray-300 rounded-full" >혜택</a></li>
                        <li><a href="/" class="hover:bg-gray-300 rounded-full" >SITEMAP</a></li>
                        <li><a href="/" class="hover:bg-gray-300 rounded-full" >판매전시관</a></li>
                    </ul>
                    <div class="site-other">
                       
                        <div class="family">
                            <a href="#" class="btn" aria-expanded="true">FAMILY SITE</a>
                            <ul class="box">
                                <li><a href="/" >조환열</a></li>
                                <li><a href="/" >김용록</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="corpInfo">
                <div class="inner">
                    <p><a href="https://github.com/chohwanyeol" class="logo">(주)보험왕 대표이사 : 조환열</a></p>
                    <p class="cpr">사업자관리번호 : 102-45871-22</p>

                    <p class="cpr">COPYRIGHT (주)보험왕 All Rights Reserved.</p>
                     
                    <p class="partner">2024년 소비자가 뽑은 가장 신뢰하는 보험 브랜드 대상 </p>
                </div>
            </div>
        </footer>
  );
};

export default Footer;