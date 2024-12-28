
import "../shop.css";
import React, { useState} from 'react';
// , useEffect,  useRef 

// 2401031626 경로 설정할 때 사용
import { Link } from "react-router-dom";




// 메인 페이지. index.js로 인해 public/index.html에 넣어짐.
// 데이터 바인딩이 쉽다? function으로 값 쏴주는 걸 말하는 듯.
function App() {
    // 2401031432 장바구니 js show/hide
    const [inBasket, setInBasket] = useState(false);
    const documentNone = () => {
        setInBasket(true);
    };
    const documentBlock = () => {
        setInBasket(false);
    };
    // $('#basketScreen').hide; // 와 이게 안되네




    // 장바구니에 담기
    const fnCartBtn = (productId, operationType, conditionFlag, moneyValue , itemTitle) => {
        if (operationType === 'NORMAL' && conditionFlag === 'N') {
            // 2401030920 세션에 저장, 기능 분할
            addToCart(productId, moneyValue,itemTitle);
        }
    }
    const addToCart = (productId, moneyValue,itemTitle) => {
        // 2401030946 세션에는 문자열 만 저장할 수 있으므로 객체나 배열은 JSON.stringify를 사용해야 한다.
        const productCart = { Id: productId, price: moneyValue ,name:itemTitle};
        sessionStorage.setItem(productId+'inBasket', JSON.stringify(productCart));

        // 테스트용
        console.log(sessionStorage);

        // 장바구니 js 보이게
        documentNone();
    }
    

  
    // 2401022304 사진 가져오는 방식 변경 
    function importAll(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const imagesJPGALL = importAll(require.context('../pic', false, /\.jpg$/));
    
    // 테스트용 세션 클리어
    function restartTimer(){
        sessionStorage.clear();
    }

    // 2401031621 장바구니로 이동
    // const movePage = useNavigate();
    // function goBarsket(event){ // event로 goBarsket ​​함수에서 기본 작업을 방지
    // 	console.log('goBarsket 실행');
    // 	event.preventDefault();
    // 	movePage('/basket.js');
    // }


    // 2401022237 jsx에서는 class를 사용하지 않는다고 한다. className로 전체 변경
    return (// JSX 문법, 하드코딩 너무 아쉽다.

        <div className="wrap">

            <div> 	
                <br/>	
                <br/>
                <br/>	
            </div>


            <section className="mainBest">
                <div className="inner">
                    <h1 className="text-3xl">
                        우린 이런 상품을 팔아요.
                    </h1>
                    <br/>
                    <div className="tabCont tabON">
                        <ol className="itemList" id="HIGH_SALE">

                            <li>
                                {/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
                                <Link to="/" className="iLink" style={{ textDecoration: 'none' }}>

                                    {/* 사진 */}
                                    <div className="thum">
                                        {/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
                                        <img src={imagesJPGALL['1ad.jpg']} alt="imFile1" />
                                    </div>


                                    {/* 본문 */}
                                    <div className="cont">
                                        <div className="txtFlag">
                                        </div>
                                        <strong className="tit">진한 사골곰탕 300g</strong>
                                        <p className="txt">100% 사골로 고은 진한 사골곰탕</p>
                                        <div className="txtPrice">
                                            <span className="cost1" title="할인가"><b>1,590</b>원</span>
                                            <del className="cost2" title="판매가"><b>1,750</b>원</del>
                                            <em className="rate" title="할인율"><b>10</b>%</em>
                                        </div>
                                        <div className="txtOption">
                                            <span className="option temp3">실온</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
                                <div className="iHover">
                                    {/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
                                    <button type="button" className="cart" onClick={() => fnCartBtn('1ad', 'NORMAL', 'N', '1,950', '진한 사골곰탕 300g')}>장바구니</button>
                                    <button type="button" className="favor">쇼핑찜</button>
                                    <button type="button" className="compare">상품비교</button>

                                </div>
                            </li>
                            {/* ------------------------ */}



                            <li>
                                {/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
                                <Link to="/" className="iLink" style={{ textDecoration: 'none' }}>

                                    {/* 사진 */}
                                    <div className="thum">
                                        {/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
                                        <img src={imagesJPGALL['2ad.jpg']} alt="imFile2" />
                                    </div>


                                    {/* 본문 */}
                                    <div className="cont">
                                        <div className="txtFlag">
                                        </div>
                                        <strong className="tit">[온더고] 전주식 소고기 오색비빔밥 310g</strong>
                                        <p className="txt">오색 가득 토핑 듬뿍, 소고기, 한국의 맛</p>
                                        <div className="txtPrice">
                                            <span className="cost1" title="판매가"><b>5,980</b>원</span>
                                        </div>
                                        <div className="txtOption">
                                            <span className="option temp1">냉동</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
                                <div className="iHover">
                                    {/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
                                    <button type="button" className="cart" onClick={() => fnCartBtn('2ad', 'NORMAL', 'N', '5,980','[온더고] 전주식 소고기 오색비빔밥 310g')}>장바구니</button>
                                    <button type="button" className="favor">쇼핑찜</button>
                                    <button type="button" className="compare">상품비교</button>
                                </div>
                            </li>
                            {/* ------------------------ */}


                            <li>
                                {/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
                                <Link to="/" className="iLink" style={{ textDecoration: 'none' }}>

                                    {/* 사진 */}
                                    <div className="thum">
                                        {/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
                                        <img src={imagesJPGALL['3ad.jpg']} alt="imFile3" />
                                    </div>


                                    {/* 본문 */}
                                    <div className="cont">
                                        <div className="txtFlag">
                                        </div>
                                        {/* 2401021517 css 수정 필요 -> App.js에 css 추가 */}
                                        <strong className="tit">[온더고] 더블치즈 차돌깍두기 300g</strong>
                                        <p className="txt">치즈 듬뿍,모짜렐라, 통차돌, 국내산 깍두기</p>
                                        <div className="txtPrice">
                                            <span className="cost1" title="할인가"><b>5,680</b>원</span>
                                            <del className="cost2" title="판매가"><b>5,980</b>원</del>
                                            <em className="rate" title="할인율"><b>5</b>%</em>
                                        </div>
                                        <div className="txtOption">
                                            {/* 2401021517 css 수정 필요 -> App.js에 css 추가 */}
                                            <span className="option temp1">냉동</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
                                <div className="iHover">
                                    {/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
                                    <button type="button" className="cart" onClick={() => fnCartBtn('3ad', 'NORMAL', 'N', '5,680','[온더고] 더블치즈 차돌깍두기 300g')}>장바구니</button>
                                    <button type="button" className="favor">쇼핑찜</button>
                                    <button type="button" className="compare">상품비교</button>
                                </div>
                            </li>
                            {/* ------------------------ */}


                            <li>
                                {/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
                                <Link to="/" className="iLink" style={{ textDecoration: 'none' }}>

                                    {/* 사진 */}
                                    <div className="thum">
                                        {/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
                                        <img src={imagesJPGALL['4ad.jpg']} alt="imFile4" />
                                    </div>


                                    {/* 본문 */}
                                    <div className="cont">
                                        <div className="txtFlag">
                                        </div>
                                        <strong className="tit">[온더고] 숯불향 우삼겹불고기덮밥 290g</strong>
                                        <p className="txt">저온 숙성 불고기, 오븐 구이 야채, 한국의 맛</p>
                                        <div className="txtPrice">
                                            <span className="cost1" title="판매가"><b>5,980</b>원</span>
                                        </div>
                                        <div className="txtOption">
                                            <span className="option temp1">냉동</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
                                <div className="iHover">
                                    {/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
                                    <button type="button" className="cart" onClick={() => fnCartBtn('4ad', 'NORMAL', 'N', '5,980','[온더고] 숯불향 우삼겹불고기덮밥 290g')}>장바구니</button>
                                    <button type="button" className="favor">쇼핑찜</button>
                                    <button type="button" className="compare">상품비교</button>
                                </div>
                            </li>
                            {/* ------------------------ */}



                        </ol>
                    </div>
                </div>


                {/* 장바구니 js */}
                {/* 2401031044 버튼 선택시, 화면 위에 띄우기 */}
                <div id="basketScreen" style={{ display: inBasket ? 'block' : 'none' }} >

                    <div id="L1" className="layerPop" >
                        <div className="layTop">
                            <h3 className="laytit">장바구니</h3>
                            <button type="button" className="close" onClick={(documentBlock)}>닫기</button>
                        </div>
                        <div className="layCon">
                            <div className="txtAlert">
                                <p className="txt1">선택한 상품이 장바구니에 담겼습니다.</p>
                                <p className="txt2">장바구니로 이동 하겠습니까?</p>
                            </div>
                            <div className="btnArea">

                                <Link to={"/barsketPage"} className="btnST btnM other" style={{ textDecoration: 'none' }}>장바구니 확인하기</Link>
                                <a href="/" className="btnST btnM action" style={{ textDecoration: 'none' }}>계속 쇼핑하기</a>
                            </div>
                        </div>
                    </div>
                    <div className="dimmed" style={{ display: 'block' }}>
                    </div>

                </div>

            </section>
        </div>
        
    );
}

export default App;
