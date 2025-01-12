import React, { useEffect, useState } from 'react'
import '../css/InsMyPage.css'
import { Link,useNavigate } from 'react-router-dom'



const InsMyPageUserInfo = () => {
    const [content, setContent] = useState('');
    useEffect(() => {
        fetch('/InsSignUp.js') // JavaScript 파일 경로
          .then(response => response.text())
          .then(data => setContent(data));
          
    }, []);

    

    return (

      <div class='sub_wrap'>
          <br/>
          <br/>
          <br/>
          <br/>
    


        <div class='inner inner_hidden'>

          {/* 좌측 카테고리 */}
          <div class='left_nav' id='left_nav'>
            <h2>
              마이페이지<p>Site Information</p>
            </h2>
            <ul class='sub_nav_ul'>
               <li >
                <Link to={"/Ins_MyPageProduct"}  style={{ textDecoration: 'none' }} class="transition hover:bg-gray-100 rounded-full ">가입상품</Link>
              </li>
              <li>
                <Link to={"/Ins_MyPageRequest"}  style={{ textDecoration: 'none' }} class="transition hover:bg-gray-100 rounded-full ">보험청구</Link>
              </li>
              <li class='on'>

                <Link to={"/Ins_MyPageUserInfo"}  style={{ textDecoration: 'none' }} class="transition hover:bg-gray-100 rounded-full ">개인정보변경</Link>
              </li>

              <li >

                <Link to={"/Ins_MyPageUserInfo"}  style={{ textDecoration: 'none' }} class="transition hover:bg-gray-100 rounded-full " >조환열자지3센치</Link>
              </li>
            </ul>

          </div>




          {/* 메인 콘텐츠 호출해서 비동기로 사용 */}
          <div class='sub_cont'>
              
                <div className="main-prd-wrap">
                                  <h4 className="navi-title">건강</h4>
                                  <div className="list-prd-box">
                                      <ul>
                                          <li className="list-prd">
                                              <Link
                                                  
                                              >
                                                  <p className="title">
                                                      <strong>건강보험가입</strong>
                                                  </p>
                                                  <p className="text">
                                                      <span className="fc-blue">아프면 개고생이야. 돈이라도 지키자.</span>
                                                      <br />
                                                      아플 때, 마음 놓고 웃을 수 있도록
                                                  </p>
                                                  <p className="text-sub"></p>
                                              </Link>
                                          </li>
                
                                          {/* 가로 배치 */}
                                          <li className="list-prd">
                                              <Link>
                                                  <p className="title">
                                                      <strong>건강보험가입</strong>
                                                  </p>
                                                  <p className="text">
                                                      <span className="fc-blue">아프면 개고생이야. 돈이라도 지키자.</span>
                                                      <br />
                                                      아플 때, 마음 놓고 웃을 수 있도록
                                                  </p>
                                                  <p className="text-sub"></p>
                                              </Link>
                                          </li>
                                      </ul>
                                  </div>
                
                                  {/* 세로 배치 */}
                                  <div className="list-prd-box">
                                      <ul>
                                          <li className="list-prd">
                                              <Link>
                                                  <p className="title">
                                                      <strong>건강보험가입</strong>
                                                  </p>
                                                  <p className="text">
                                                      <span className="fc-blue">아프면 개고생이야. 돈이라도 지키자.</span>
                                                      <br />
                                                      아플 때, 마음 놓고 웃을 수 있도록
                                                  </p>
                                                  <p className="text-sub"></p>
                                              </Link>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
          </div>
        </div>
      </div>
    )
}   

export default InsMyPageUserInfo;