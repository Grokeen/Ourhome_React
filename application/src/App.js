// import { useState } from "react";
import "./App.css";

// 메인 페이지. index.js로 인해 public/index.html에 넣어짐.
// JSX 문법
// 데이터 바인딩이 쉽다?
function App() {
	function fnCartBtn(productId, operationType, conditionFlag, moneyValue) {
		if (operationType === 'NORMAL' && conditionFlag === 'N') {
			addToCart(productId, moneyValue);
		}
	}
	function addToCart(productId, moneyValue) {
		console.log(`Product with ID ${productId}, ${moneyValue} added to the cart.`);
		//선택한 상품이 장바구니에 담겼습니다. 장바구니로 이동 하겠습니까?
		// 상품명,구매가,수량,금액
		// 총금액+배송비=결제금액

	}


	// 2401022304 사진 가져오는 방식 변경 
	function importAll(r) {
		let images = {};
		r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
		return images;
	}
	const imagesJPGALL = importAll(require.context('./pic', false, /\.jpg$/));



	// 2401022237 jsx에서는 class를 사용하지 않는다고 한다. className로 전체 변경
	return (
		// 아워홈 파일 copy
		<div className="wrap">
			<section className="mainBest">
				<div className="inner">
					<div className="tabCont tabON">
						<ol className="itemList" id="HIGH_SALE">


							<li>
								{/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
								<a href="@" className="iLink" style={{ textDecoration: 'none' }}>

									{/* 사진 */}
									<div className="thum">
										{/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
										<img src={imagesJPGALL['1ad.jpg']} alt="image_File_001" />
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
								</a>

								{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
								<div className="iHover">
									{/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
									<button type="button" className="cart" onClick={() => fnCartBtn('image_File_001', 'NORMAL', 'N', 1950)}>장바구니</button>
									<button type="button" className="favor">쇼핑찜</button>
									<button type="button" className="compare">상품비교</button>
								</div>
							</li>
							{/* ------------------------ */}



							<li>
								{/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
								<a href="@" className="iLink" style={{ textDecoration: 'none' }}>

									{/* 사진 */}
									<div className="thum">
										{/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
										<img src={imagesJPGALL['2ad.jpg']} alt="image_File_002" />
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
								</a>

								{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
								<div className="iHover">
									{/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
									<button type="button" className="cart" onClick={() => fnCartBtn('image_File_002', 'NORMAL', 'N', 5980)}>장바구니</button>
									<button type="button" className="favor">쇼핑찜</button>
									<button type="button" className="compare">상품비교</button>
								</div>
							</li>
							{/* ------------------------ */}


							<li>
								{/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
								<a href="@" className="iLink" style={{ textDecoration: 'none' }}>

									{/* 사진 */}
									<div className="thum">
										{/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
										<img src={imagesJPGALL['3ad.jpg']} alt="image_File_003" />
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
								</a>

								{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
								<div className="iHover">
									{/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
									<button type="button" className="cart" onClick={() => fnCartBtn('image_File_003', 'NORMAL', 'N', 5680)}>장바구니</button>
									<button type="button" className="favor">쇼핑찜</button>
									<button type="button" className="compare">상품비교</button>
								</div>
							</li>
							{/* ------------------------ */}


							<li>
								{/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
								<a href="@" className="iLink" style={{ textDecoration: 'none' }}>

									{/* 사진 */}
									<div className="thum">
										{/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
										<img src={imagesJPGALL['4ad.jpg']} alt="image_File_004" />
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
								</a>

								{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
								<div className="iHover">
									{/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
									<button type="button" className="cart" onClick={() => fnCartBtn('image_File_004', 'NORMAL', 'N', 5980)}>장바구니</button>
									<button type="button" className="favor">쇼핑찜</button>
									<button type="button" className="compare">상품비교</button>
								</div>
							</li>
							{/* ------------------------ */}


							<li>
								{/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
								<a href="@" className="iLink" style={{ textDecoration: 'none' }}>

									{/* 사진 */}
									<div className="thum">
										{/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
										<img src={imagesJPGALL['5ad.jpg']} alt="image_File_005" />
									</div>


									{/* 본문 */}
									<div className="cont">
										<div className="txtFlag">
										</div>
										<strong className="tit">[온더고] 이탈리아식 페퍼라구 볼로네제 파스타 300g</strong>
										<p className="txt">매콤달콤, 고기 듬뿍, 라구 소스, 펜네파스타</p>
										<div className="txtPrice">
											<span className="cost1" title="판매가"><b>5,980</b>원</span>
										</div>
										<div className="txtOption">
											<span className="option temp1">냉동</span>
										</div>
									</div>
								</a>

								{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
								<div className="iHover">
									{/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
									<button type="button" className="cart" onClick={() => fnCartBtn('image_File_005', 'NORMAL', 'N', 5980)}>장바구니</button>
									<button type="button" className="favor">쇼핑찜</button>
									<button type="button" className="compare">상품비교</button>
								</div>
							</li>
							{/* ------------------------ */}


							<li>
								{/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
								<a href="@" className="iLink" style={{ textDecoration: 'none' }}>

									{/* 사진 */}
									<div className="thum">
										{/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
										<img src={imagesJPGALL['6ad.jpg']} alt="image_File_006" />
									</div>


									{/* 본문 */}
									<div className="cont">
										<div className="txtFlag">
										</div>
										<strong className="tit">[온더고] 육즙 가득 미니함박 &amp; 로제파스타 310g</strong>
										<p className="txt">육즙 가득 함박, 토마토 로제, 파스타</p>
										<div className="txtPrice">
											<span className="cost1" title="판매가"><b>5,980</b>원</span>
										</div>
										<div className="txtOption">
											<span className="option temp1">냉동</span>
										</div>
									</div>
								</a>

								{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
								<div className="iHover">
									{/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
									<button type="button" className="cart" onClick={() => fnCartBtn('image_File_006', 'NORMAL', 'N', 5980)}>장바구니</button>
									<button type="button" className="favor">쇼핑찜</button>
									<button type="button" className="compare">상품비교</button>
								</div>
							</li>
							{/* ------------------------ */}


							<li>
								{/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
								<a href="@" className="iLink" style={{ textDecoration: 'none' }}>

									{/* 사진 */}
									<div className="thum">
										{/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
										<img src={imagesJPGALL['7ad.jpg']} alt="image_File_007" />
									</div>


									{/* 본문 */}
									<div className="cont">
										<div className="txtFlag">
										</div>
										<strong className="tit">[온더고] 통모짜 로제 떡볶이 with 파스타 320g</strong>
										<p className="txt">치즈 듬뿍, 떡볶이, 로제 소스, 생크림, 퓨전한식</p>
										<div className="txtPrice">
											<span className="cost1" title="판매가"><b>5,980</b>원</span>
										</div>
										<div className="txtOption">
											<span className="option temp1">냉동</span>
										</div>
									</div>
								</a>

								{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
								<div className="iHover">
									{/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
									<button type="button" className="cart" onClick={() => fnCartBtn('image_File_007', 'NORMAL', 'N', 5980)}>장바구니</button>
									<button type="button" className="favor">쇼핑찜</button>
									<button type="button" className="compare">상품비교</button>
								</div>
							</li>
							{/* ------------------------ */}



							<li>
								{/* 2401021944 밑줄 제거를 위해 style={{ textDecoration: 'none' }} 추가 */}
								<a href="@" className="iLink" style={{ textDecoration: 'none' }}>

									{/* 사진 */}
									<div className="thum">
										{/* 2401020149 img 태그 에러 -> 마지막에 '/' 추가하여 해결. */}
										<img src={imagesJPGALL['8ad.jpg']} alt="image_File_008" />
									</div>


									{/* 본문 */}
									<div className="cont">
										<div className="txtFlag">
										</div>
										<strong className="tit">[온더고] 중화식 첨면장 불향 덮밥 290g</strong>
										<p className="txt">첨면장, 짜장, 계란 후라이, 고추 잡채, 중화식</p>
										<div className="txtPrice">
											<span className="cost1" title="판매가"><b>6,480</b>원</span>
										</div>
										<div className="txtOption">
											<span className="option temp1">냉동</span>
										</div>
									</div>
								</a>

								{/* 장바구니, 찜, 비교 등 가려져 있는데, 커서를 대면 나오네 */}
								<div className="iHover">
									{/* 2401022235 onClick 문법이 다르다. {() => fnCartBtn('S000000002900', 'NORMAL', 'N')} 방식으로 변경 */}
									<button type="button" className="cart" onClick={() => fnCartBtn('image_File_008', 'NORMAL', 'N', 6480)}>장바구니</button>
									<button type="button" className="favor">쇼핑찜</button>
									<button type="button" className="compare">상품비교</button>
								</div>
							</li>
							
						</ol>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
