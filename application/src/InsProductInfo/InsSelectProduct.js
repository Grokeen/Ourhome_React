
import "../shop.css";
import React, { useState} from 'react';
// , useEffect,  useRef 

// 2401031626 경로 설정할 때 사용
import { Link } from "react-router-dom";




// 메인 페이지. index.js로 인해 public/index.html에 넣어짐.
// 데이터 바인딩이 쉽다? function으로 값 쏴주는 걸 말하는 듯.
function App() {
    // 이미지 가져오기
    const imagesJPGALL = importAll(require.context('../image/InsProductPic', false, /\.png$/));
    function importAll(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }


    
    return (
        <div className="wrap">
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

            <section className="mainBest">
                <div className="inner">
                    <h1 className="text-3xl">우린 이런 상품을 팔아요.</h1>
                    <br />
                    <div className="tabCont tabON">
                        <ol className="itemList" id="HIGH_SALE">
                            <li>
                                <Link to="/product/health" className="iLink" style={{ textDecoration: 'none' }}>
                                    <div className="thum">
                                        <img src={imagesJPGALL['img_mv_health.png']} alt="imFile1" />
                                    </div>
                                    <div className="cont">
                                        <div className="txtFlag"></div>
                                        <strong className="tit">건강보험</strong>
                                        <p className="txt">인당 하나 들어야 너도 살고 나도 돈 벌고.</p>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to="/product/fire" className="iLink" style={{ textDecoration: 'none' }}>
                                    <div className="thum">
                                        <img src={imagesJPGALL['img_mv_home.png']} alt="imFile3" />
                                    </div>
                                    <div className="cont">
                                        <div className="txtFlag"></div>
                                        <strong className="tit">화재보험</strong>
                                        <p className="txt">불났을 때, 웃을 수 있게 도와준다.</p>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to="/product/auto" className="iLink" style={{ textDecoration: 'none' }}>
                                    <div className="thum">
                                        <img src={imagesJPGALL['img_mv_car.png']} alt="imFile2" />
                                    </div>
                                    <div className="cont">
                                        <div className="txtFlag"></div>
                                        <strong className="tit">자동차보험</strong>
                                        <p className="txt">자동차 면허 쉽게 땄으면 들어.</p>
                                    </div>
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
