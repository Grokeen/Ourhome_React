

import "../App.css";
import React, { useState, useEffect } from 'react';



function App() {
    
    const retrieveSessionItem = (key) => {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    };

    const imFile1inBasket = retrieveSessionItem('1adinBasket');
    const imFile2inBasket = retrieveSessionItem('2adinBasket');
    const imFile3inBasket = retrieveSessionItem('3adinBasket');
    const imFile4inBasket = retrieveSessionItem('4adinBasket');
    const imFile5inBasket = retrieveSessionItem('5adinBasket');
    const imFile6inBasket = retrieveSessionItem('6adinBasket');
    const imFile7inBasket = retrieveSessionItem('7adinBasket');
    const imFile8inBasket = retrieveSessionItem('8adinBasket');

    const arrayVal = [
        imFile1inBasket,
        imFile2inBasket,
        imFile3inBasket,
        imFile4inBasket,
        imFile5inBasket,
        imFile6inBasket,
        imFile7inBasket,
        imFile8inBasket
    ];



    console.log(arrayVal);



    // 2138 문자형을 인트형으로 바꿔주는 애

    let sumVal = 0;

    const [sum, setSumVal] = useState(0);
    useEffect(() => {
        let count = 0;
        
        arrayVal.forEach((item) => {
            try {
                console.log(arrayVal[count].price + '');
                const priceStrings = arrayVal[count].price;
                const numericString=priceStrings.replace(/\D/g, '');
                const number = parseInt(numericString, 10);

                sumVal += number;
                console.log(sumVal);
            } catch (error) {
            }
            count++;
            
        });
        setSumVal(sumVal);
    },[sum]);
    let deliPrice=3000;

    let totalPrice = deliPrice+sum;

    // 이미지 파일
    function importAll(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const imagesJPGALL = importAll(require.context('../pic', false, /\.jpg$/));



    return (
        <div className="wrap">
            <div className="container">
                <div className="contents">
                    {/* cartArea 이거 없는데? */}
                    <div className="cartArea">
                        <div className="cartBoard">
                            <table className="tblForm">

                                <colgroup>
                                    {/* 2401030301 style 방식이 다르네 */}

                                    <col style={{ width: '25px' }} />
                                    <col style={{ width: '10%' }} />
                                    <col style={{ width: '11%' }} />
                                    <col style={{ width: '10%' }} />

                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">상품명</th>
                                        <th scope="col">구매가</th>
                                        <th scope="col">수량</th>
                                        <th scope="col">금액</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {/* -------------------------------------------------------------------- */}
                                    {/* 2401032021 렌더링 반복문 */}
                                    {arrayVal.map((item, index) => {
                                        // Check if the item is not null
                                        if (item) {
                                            return (
                                                <tr key={item.Id || index}> {/* Moved key to <tr> */}
                                                    <td className="itmTarget">

                                                        <div className="thum">
                                                            <img src={imagesJPGALL[item.Id + '.jpg']} alt="" />
                                                        </div>
                                                        <div className="cont">
                                                            {/* 상품명 */}
                                                            <strong className="tit">{item.name}</strong>
                                                        </div>


                                                    </td>


                                                    <td className="tdPrice">{/* 구매가 */}
                                                        <span className="cost1" title="판매가" ><b>{item.price}</b>원</span></td>


                                                    <td >{/* 수량 */}
                                                        <span className="frmAmount">
                                                            <button type="button" className="minus"
                                                                onmousedown="">수량 감소</button>
                                                            <input type="text" title="수량 직접입력" name="qty"
                                                                data-sell-mon="9450"
                                                                data-delivery-type="Y" data-each-delivery="N" value="1" data-delivery-amt="3000"
                                                                data-delivery-free="30000" data-delivery-gubun="O" className="numeric" data-jirisansoo-yn="N"
                                                                maxlength="5" />
                                                            {/* <input type="text" title="수량 직접입력" name="qty"
                                                                onChange="" data-sell-mon="9450"
                                                                data-delivery-type="Y" data-each-delivery="N" value="1" data-delivery-amt="3000"
                                                                data-delivery-free="30000" data-delivery-gubun="O" className="numeric" data-jirisansoo-yn="N"
                                                                maxlength="5" /> */}
                                                            <button type="button" className="plus"
                                                                onmousedown="">수량 증가</button>
                                                        </span></td>
                                                    <td className="tdPrice">
                                                        {/* 금액 */}
                                                        <span className="cost1" title="금액"><b>{item.price}</b>원</span>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                        return null; // It's a good practice to return null for non-rendering cases
                                    })}




                                    {/* -------------------------------------------------------------------- */}
                                </tbody>


                                <tfoot>
                                    <tr>
                                        <td colSpan="8" className="tdTotal">
                                            <span className="txt">청구 금액</span>
                                            <span className="cost"><b>{sum}</b>원</span>
                                            

                                            <span className="symbol plus">+</span>
                                            {/* <span className="txt">배송비</span> */}
                                            <span className="cost"><b>{deliPrice}</b>원</span>
                                            {/* <span className="txt2">(3만원이상 구매 시 무료배송)</span> */}
                                            <span className="symbol equal">=</span>
                                            <span className="txt">결제 금액</span>
                                            <span className="cost"><b>{totalPrice}</b>원</span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div></div></div></div></div>
    );


}
export default App;