import React, { useEffect, useState } from 'react'
import '../css/InsMyPage.css'
import Sidebar from "./Sidebar";
import { Link,useNavigate } from 'react-router-dom'



const InsMyPageProduct = () => {
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

          {/* 사이드바 */}
          <Sidebar />




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

export default InsMyPageProduct;