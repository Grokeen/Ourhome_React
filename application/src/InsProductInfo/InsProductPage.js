import "../css/InsProductPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const { type } = useParams(); // URL에서 type 값을 가져옵니다.
    // 상품 정보 상태 관리
    const [product, setProduct] = useState({
        title: "알 수 없는 상품",
        description: "해당 상품에 대한 정보를 찾을 수 없습니다.",
    });

    // API 호출 함수
    const fetchProductDetails = async (type) => {
        try {
            const response = await fetch(`http://localhost:8080/product/${type}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                const data = await response.json();
                // 상품 정보 업데이트
                setProduct({
                    title: data.title || "상품 이름 없음",
                    description: data.description || "상품 설명 없음",
                });
            } else {
                const errorData = await response.json();
                alert("조회 실패: " + errorData.message);
            }
        } catch (error) {
            console.error("상품 정보 조회 중 오류 발생:", error);
            alert("상품 정보를 가져오는 데 실패했습니다.");
        }
    };

    // 컴포넌트가 렌더링될 때 API 호출
    useEffect(() => {
        console.log("타입 : "+ type);
        if (type) {
            fetchProductDetails(type);
        }
    }, [type]);

    return (
        <div className="InsProductPage_wrap">
        

            <div className="InsProductPage_title">
                <h1 >{product.title}</h1>
                
            </div>
            <div className="InsProductPage_content">

                <p >{product.description}</p>
            </div>
                
        
        </div>
    );
};

export default ProductDetail;
