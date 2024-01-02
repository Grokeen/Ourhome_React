// import { useState } from "react";
import "./App.css";
// 2401020147 이미지 추가
import MyImage from './pic/1ad.jpg'

// 메인 페이지. index.js로 인해 public/index.html에 넣어짐.
// JSX 문법
// 데이터 바인딩이 쉽다?
function App() {
	function fnCartBtn(productId, operationType, conditionFlag){
		let myCartBasket =['','',''];

		if (operationType === 'NORMAL' && conditionFlag === 'N') {
			// Add the product to the cart
			addToCart(productId);
		}
	}
	function addToCart(productId) {
		// Logic to add the product to the shopping cart
		console.log(`Product with ID ${productId} added to the cart.`);
	}

	return (
		// 아워홈 파일 copy
		<div class="wrap">
	    	<section class="mainBest">
	    	  <div class="inner">
				<div class="tabCont tabON">
			        <div className="itemList">
						::before
						
			          	<li>
			          		<a href="@" class="iLink">
			            		{/* 사진 */}
			          			<div class="thum">	
			            	    {/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
			          				<img src={MyImage} alt="image_File_001" size="284px"/>
			          			</div>


			            		{/* 본문 */}
			          			<div class="cont">
			          				<div class="txtFlag">				
			          				</div>
									{/* 2401021517 css 수정 필요 -> App.js에 css 추가 */}
			          				<strong class="tit">[온더고] 더블치즈 차돌깍두기 300g</strong>
			          				<p class="txt">치즈 듬뿍,모짜렐라, 통차돌, 국내산 깍두기</p>
			          			    <div class="txtPrice">
			          					<span class="cost1" title="할인가"><b>5,680</b>원</span>
			          					<del class="cost2" title="판매가"><b>5,980</b>원</del>				
			          					<em class="rate" title="할인율"><b>5</b>%</em> 
			          				</div>
			          				<div class="txtOption">
										{/* 2401021517 css 수정 필요 -> App.js에 css 추가 */}
			          					<span class="option temp1">냉동</span>
			          				</div>
			          			</div>
			          		</a>

			            	{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
			          		<div class="iHover">
			          			<button type="button" class="cart" onclick="fnCartBtn('S000000002900', 'NORMAL', 'N');">장바구니</button>
			          			<button type="button" onclick="fnGoodsAddLike('S000000002900');" class="favor">쇼핑찜</button>
			          			<button type="button" onclick="fnGoodsAddCompare('S000000002900');" class="compare">상품비교</button>
			          		</div>
			          	</li>


						::after
					</div>
	    	    </div>
	    	  </div>
	    	</section>
		</div>
	);
}

export default App;
