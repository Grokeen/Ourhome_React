import "../App.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function App() {

    return (


           <div id="contents" class="inner-wrap">
	<h2 class="title-2">지방세 미리계산</h2>

	<div class="tab-area mt30">
		<div class="tab-list mb30" role="tablist">
			<div class="table">
				<div class="tr">
					<a href="/" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" class="active"><span>취득세<br/>(부동산)</span></a>
					{/* <a href="" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2"><span>자동차세<br/>(소유)</span></a>
					<a href="" role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3"><span>등록면허세<br/>(등록분)</span></a>
					<a href="" role="tab" aria-selected="false" aria-controls="panel-4" id="tab-4"><span>지방소득세<br/>(특별징수)</span></a>
					<a href="" role="tab" aria-selected="false" aria-controls="panel-5" id="tab-5"><span>지방소득세<br/>(법인소득분)</span></a>
					<a href="" role="tab" aria-selected="false" aria-controls="panel-6" id="tab-6"><span>주민세<br/>(종업원분)</span></a>
					<a href="" role="tab" aria-selected="false" aria-controls="panel-7" id="tab-7"><span>주민세<br/>(사업소분)</span></a>
					<a href="" role="tab" aria-selected="false" aria-controls="panel-8" id="tab-8"><span>지역자원시설세</span></a> */}
				</div>
			</div>
		</div>
				

		<div id="panel-1" class="tab-cont active" role="tabpanel" aria-labelledby="tab-1"/>







<div id="usGdcInfo02"></div>


<div class="title-wrap">
	<p class="title-3">취득세정보 입력</p>
	
	<p class="req-info"><span class="req">*</span> 는 필수 입력 항목입니다.</p>
</div>

<div class="board-form">
	<table id="actxDclrDVO">		
	
		<caption>
			취등록원인 구분, 과세표준액(매매가), 거래유형, 매매계약일자, 취득일자, 가산세구분, 부정신고사유
			취득 주택 수, 조정대상지역 여부, 납부기한, 납부지연일수, 취득세율, 주택거래감면율
			항목을 가진 취득세정보 입력 표
		</caption>
		{/* <colgroup>
			<col style="width:200px;">
			<col>
			<col style="width:200px;">
			<col>
		</colgroup> */}
		<tbody>
			<tr>
				<th scope="row">취득원인</th>
				<td colspan="3">
					<span class="bg-chk">
						{/* <Text type="radio" id="actxObjKndDtlCd01" name="actxObjKndDtlCd" value="0102" checked="checked"/> */}
						<label for="actxObjKndDtlCd01">유상취득(농지 외)</label>
					</span>
					
					<span class="bg-chk">
						{/* <Text type="radio" id="actxObjKndDtlCd02" name="actxObjKndDtlCd" value="0105" /> */}
						<label for="actxObjKndDtlCd02">유상취득(농지)</label>
					</span>
				</td>
			</tr>
			<tr id="tr_0105_01">
				<th scope="row">
					과세표준액(매매가) <span class="req" title="필수 입력 항목">*</span>
					
					<a href="/" class="tool-tip click tooltipstered" data-tooltip-content="#tooltip-cont-1"><i class="iconset ico-tooltip">툴팁 레이어 열기</i></a>
 
					<div class="tooltip-contents">
						<div id="tooltip-cont-1" class="pop-over">
							<div class="cont-tool" tabindex="0">
								취득 당시의 금액을 입력합니다.<br/>
								신고 시 취득금액과 시가표준액 중 많은 금액이 과세표준이 됩니다.
							</div>
							
							<button type="button" class="tooltip-close">툴팁 닫기</button>
						</div>
					</div>
				</th>
				<td>
					<div class="unit-wrap">
						{/* <Text type="text" title="과세표준액(매매가) 입력" class="input-text" id="dclrAcqsVal" name="dclrAcqsVal" maxlength="11" data-inputamount="" data-done="DONE" /> */}
						<span class="unit">원</span>
					</div>
				</td>
				<th scope="row">
					거래유형
					
					<a href="/" class="tool-tip click tooltipstered" data-tooltip-content="#tooltip-cont-2"><i class="iconset ico-tooltip">툴팁 레이어 열기</i></a>
 
					<div class="tooltip-contents">
						<div id="tooltip-cont-2" class="pop-over">
							<div class="cont-tool" tabindex="0">
								전용면적 85㎡ 이하주택(서민/농가주택),<br/>전용면적 85㎡ 초과주택(일반주택), 주택외로 나누어 집니다.
							</div>
							
							<button type="button" class="tooltip-close">툴팁 닫기</button>
						</div>
					</div>
				</th>
				<td>
					<select title="거래유형 선택" class="w100pc" id="resDlngTypCd" name="resDlngTypCd" data-appendoption="{'dataFnc':'cfGetCmnCdList',
								 					 'addFirst':'선택',
													 'dataParam':'DLNG_TYP_CD'}" data-done="DONE"><option value="">선택</option><option value="01">전용면적85m2이하주택</option><option value="02">일반주택매매</option><option value="03">기타</option></select>
				</td>
			</tr>
			<tr>
				<th scope="row">조정대상지역 여부</th>				
				<td>						
					<span class="bg-chk">
						{/* <Text type="radio" id="adjTrgtRgnYn1" name="adjTrgtRgnYn" value="Y"/> */}
						<label for="adjTrgtRgnYn1">해당</label>
					</span>
						
					<span class="bg-chk">
						{/* <Text type="radio" id="adjTrgtRgnYn2" name="adjTrgtRgnYn" value="N" checked="checked"/> */}
						<label for="adjTrgtRgnYn2">해당없음</label>
					</span>
				</td>
				<th scope="row">고급주택</th>
				<td>
					<span class="bg-chk">
						{/* <Text type="radio" id="vilLxrhYn1" name="vilLxrhYn" value="Y"/> */}
						<label for="vilLxrhYn1">해당</label>
					</span>
					 
					<span class="bg-chk">
						{/* <Text type="radio" id="vilLxrhYn2" name="vilLxrhYn" value="N" checked="checked"/> */}
						<label for="vilLxrhYn2">해당없음</label>
					</span>
				</td>
			</tr>
			<tr>
				<th scope="row">소유주택 수</th>
				<td colspan="3">
					<span class="bg-chk">
						{/* <Text type="radio" id="hh1HosCnt1" name="hh1HosCnt" value="1" checked="checked"/> */}
						<label for="hh1HosCnt1">중과제외</label>
					</span>
					<span class="bg-chk">
						{/* <Text type="radio" id="hh1HosCnt2" name="hh1HosCnt" value="2"/> */}
						<label for="hh1HosCnt2">2주택</label>
					</span>					
					<span class="bg-chk">
						{/* <Text type="radio" id="hh1HosCnt3" name="hh1HosCnt" value="3"/> */}
						<label for="hh1HosCnt3">3주택</label>
					</span>
					
					<span class="bg-chk">
						{/* <Text type="radio" id="hh1HosCnt4" name="hh1HosCnt" value="4"/> */}
						<label for="hh1HosCnt4">4주택 이상</label>
					</span>					
				</td>
			</tr>
			<tr>
				<th scope="row">중과세 내용</th>
				<td colspan="3">
					<span id="txaAdjDtlNm">해당없음</span>
					{/* <Text type="hidden" id="txaAdjDtlCd" name="txaAdjDtlCd" value=""/> */}
				</td>
			</tr>
			<tr>
				<th scope="row">매매계약일자 <span class="req" title="필수 입력 항목">*</span></th>
				<td>
					<div class="datepicker">
						<span>
							{/* <Text type="text" title="매매계약일자" placeholder="YYYY-MM-DD" name="ctrtYmd" id="ctrtYmd" data-inputcalendar="" required="" maxlength="10" data-done="DONE" numberonly="" class="hasDatepicker"/> */}
                            <button type="button" class="ui-datepicker-trigger">날짜 선택</button>
						</span> 
					</div>					
				</td>
				<th scope="row">
					취득일자 <span class="req" title="필수 입력 항목">*</span>
					<a href="/" class="tool-tip click tooltipstered" ><i class="iconset ico-tooltip">툴팁 레이어 열기</i></a>
 
					<div class="tooltip-contents">
						<div id="tooltip-cont-4" class="pop-over">
							<div class="cont-tool" tabindex="0">
								잔금지급이 완료되는 날짜입니다.
							</div>
							
							<button type="button" class="tooltip-close">툴팁 닫기</button>
						</div>
					</div>
				</th>
				<td>
					<div class="datepicker">
						<span>
                            {/* <Text type="text" title="취득일자" id="acqsYmd" name="acqsYmd" placeholder="YYYY-MM-DD" data-inputcalendar="" required="" maxlength="10" data-done="DONE" numberonly="" class="hasDatepicker"/> */}
                            <button type="button" class="ui-datepicker-trigger">날짜 선택</button></span> 
					</div>
				</td>
			</tr>			
			<tr>				
				<th scope="row">가산세구분</th>
				<td>
					<span class="bg-chk mr05">
						{/* <Text type="radio" id="dclrInscAdtxCd1" name="dclrInscAdtxCd" value="0401010" disabled=""/> */}
						<label for="dclrInscAdtxCd1">일반무신고가산세</label>
					</span>
					
					<span class="bg-chk mr00">
						{/* <Text type="radio" id="dclrInscAdtxCd2" name="dclrInscAdtxCd" value="0401020" disabled=""/> */}
						<label for="dclrInscAdtxCd2">부정무신고가산세</label>
					</span>
				</td>
				<th scope="row">부정신고사유</th>
				<td>
					<select title="부정신고사유 선택" class="w100pc" id="ufrDclrRsCd" name="ufrDclrRsCd" data-appendoption="{'dataFnc':'cfGetCmnCdList',
								 					 'addFirst':'선택',
													 'dataParam':'UFR_DCLR_RS_CD'}" disabled="" data-done="DONE"><option value="">선택</option><option value="01">이중장부의 작성 등 장부의 거짓 기장</option><option value="02">거짓 증빙 또는 거짓 문서의 작성 및 수취</option><option value="03">장부와 기록의 파기</option><option value="04">재산의 은닉, 소득ㆍ수익ㆍ행위ㆍ거래의 조작 또는 은폐</option><option value="05">고의적으로 장부를 작성하지 아니하거나 비치하지 아니하는 행위</option><option value="06">그 밖에 위계(僞計)에 의한 행위</option></select>
				</td>
			</tr>
			<tr>
				<th scope="row">납부기한</th>
				<td>
					<span id="txtPayTermYmd">2025-02-24</span>					
					{/* <Text type="hidden" class="input-text w150" title="납부기한" id="payTermYmd" name="payTermYmd" value="20250224"/> */}
				</td>
				<th scope="row">납부지연일수</th>
				<td>
					<div class="unit-wrap">
						{/* <Text type="text" class="input-text" title="납부지연일수" id="payDlyDcn" name="payDlyDcn" readonly="readonly"/>						
						<span class="unit">일</span>
						<Text type="hidden" title="가산세감면구분" id="adtxRdeClCd" name="adtxRdeClCd"/> */}
					</div>
				</td>
			</tr>		
		</tbody>
	</table>
</div>

<div class="button-group mt30">
	<button type="button" class="button navy" id="btnLotxClcResult">세액미리계산하기</button>
</div>

<div id="divTxaResult" style="display: none;">
	<p class="title-3">취득세액</p>
	<div class="board-list scroll-x">
		<table id="tblTxaList">
			<caption>세목, 과세표준액, 세율, 산출세액 ①, 감면세액 ②, 가산세(신고 불성실, 납부 불성실, 계 ③, 가산세 감면세액④), 신고세액 합계( ①-②+③-④ ) 항목을 가진 신고세액 목록 표</caption>
				<colgroup>
					<col span="10"/>
				</colgroup>
			<thead>
				<tr>
					<th scope="col" rowspan="2">세목</th>
					<th scope="col" rowspan="2" id="txbUseTxt">과세표준액</th>
					<th scope="col" rowspan="2">세율</th>
					<th scope="col" rowspan="2">산출세액 ①</th>
					<th scope="col" rowspan="2">감면세액 ②</th>
					<th scope="colgroup" colspan="4">가산세</th>
					<th scope="col" rowspan="2">신고세액 합계<br/>( ①-②+③-④ )</th>
				</tr>
				<tr>
					<th scope="col">무신고</th>
					<th scope="col">납부지연</th>
					<th scope="col">계 ③</th>
					<th scope="col">가산세<br/>감면세액④</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="a-r">취득세</td>
					<td class="a-r roboto" id="actx_txbAmt"></td>
					<td class="a-r roboto" id="actx_rprsAplcnTxr"></td>
					<td class="a-r roboto" id="actx_cmpuTxa"></td>
					<td class="a-r roboto" id="actx_rdeTxa"></td>
					<td class="a-r roboto" id="actx_dclrInscAdtnTxa"></td>
					<td class="a-r roboto" id="actx_payInscAdtnTxa"></td>
					<td class="a-r roboto" id="actx_adtnSumTxa"></td>
					<td class="a-r">0 원</td>
					<td class="a-r" id="actx_payPargTxa"></td>
				</tr>
				<tr>
					<td class="a-r">지방교육세</td>
					<td class="a-r roboto" id="letx_txbAmt"></td>
					<td class="a-r roboto" id="letx_rprsAplcnTxr"></td>
					<td class="a-r roboto" id="letx_cmpuTxa"></td>
					<td class="a-r roboto" id="letx_rdeTxa"></td>
					<td class="a-r roboto" id="letx_dclrInscAdtnTxa"></td>
					<td class="a-r roboto" id="letx_payInscAdtnTxa"></td>
					<td class="a-r roboto" id="letx_adtnSumTxa"></td>
					<td class="a-r">0 원</td>
					<td class="a-r" id="letx_payPargTxa"></td>
				</tr>
				<tr>
					<td class="a-r">농어촌특별세<br/>부과분</td>
					<td class="a-r roboto" id="aftx1_txbAmt"></td>
					<td class="a-r roboto" id="aftx1_rprsAplcnTxr"></td>
					<td class="a-r roboto" id="aftx1_cmpuTxa"></td>
					<td class="a-r roboto" id="aftx1_rdeTxa"></td>
					<td class="a-r roboto" id="aftx1_dclrInscAdtnTxa"></td>
					<td class="a-r roboto" id="aftx1_payInscAdtnTxa"></td>
					<td class="a-r roboto" id="aftx1_adtnSumTxa"></td>
					<td class="a-r">0 원</td>
					<td class="a-r" id="aftx1_payPargTxa"></td>
				</tr>
				<tr>
					<td class="a-r">농어촌특별세<br/>감면분</td>
					<td class="a-r roboto" id="aftx2_txbAmt"></td>
					<td class="a-r roboto" id="aftx2_rprsAplcnTxr"></td>
					<td class="a-r roboto" id="aftx2_cmpuTxa"></td>
					<td class="a-r roboto" id="aftx2_rdeTxa"></td>
					<td class="a-r roboto" id="aftx2_dclrInscAdtnTxa"></td>
					<td class="a-r roboto" id="aftx2_payInscAdtnTxa"></td>
					<td class="a-r roboto" id="aftx2_adtnSumTxa"></td>
					<td class="a-r">0 원</td>
					<td class="a-r" id="aftx2_payPargTxa"></td>
				</tr>
			</tbody>					
			<tfoot>
				<tr>
					<td class="a-r">합계</td>
					<td> - </td>
					<td> - </td>
					<td class="a-r" id="cmpuTxa"></td>
					<td class="a-r" id="rdeTxa"></td>
					<td class="a-r" id="dclrInscAdtnTxa"></td>
					<td class="a-r" id="payInscAdtnTxa"></td>
					<td class="a-r" id="adtnSumTxa"></td>
					<td class="a-r">0 원</td>
					<td class="a-r" id="payPargTxa"></td>
				</tr>
			</tfoot>
		</table>
	</div>
	<div class="board-list-result">
		<div class="right-area w100pc">
			<div class="block w100pc">
				<p class="tit">총납부세액</p>
				<p class="cont">
					<em id="totPayTxa">0</em>
					<span>원</span>
				</p>
			</div>
		</div>
	</div>
</div>


{/* 이용안내 */}
<div id="usGdcInfo01" class="box-toggle on mt30"><div class="tit"><button type="button" class="toggle"><i class="iconset ico-info mr05"></i><span>이용안내</span></button></div><div class="cont" id="usGdcCnDiv" ><div class="user-guide">
<div class="line">
<h4>유의사항</h4>

<ul class="dot-list">
	<li>계산된 납부세액은 물건의 종류 및 감면, 납부기한 경과시 가산세 적용 등의 사유로 실제세액과 다소 차이가 있을수 있습니다.</li>
	<li>정확한 세액은 해당 시군구 담당자에게 문의하여 주십시오.</li>
	<li>“개인대개인”의 유상거래인 경우에만 자동계산이 가능합니다.</li>
</ul>
</div>

<div class="line">
<h4>입력방법</h4>

<ul class="dot-list">
	<li>취득원인 : 자동계산 대상이 농지일때만 [유상취득(농지)]를 선택하고 나머지 (주택,건물,토지등)는 [유상취득(농지외)]를 선택하시기 바랍니다.</li>
	<li>과세표준액 : 취득 당시의 금액을 입력합니다.</li>
	<li>취득일자 : 잔금지급이 완료되는 날짜입니다.</li>
	<li>거래유형 : 전용면적 85㎡ 이하주택(서민/농가주택), 전용면적 85㎡ 초과주택(일반주택), 주택외로 나누어 집니다.</li>
	<li>서민/농가주택 : 주택거래 전용면적 85㎡ 이하(수도권외 도시지역외 읍면지역 100㎡ 이하) 주택(농특세법시행령 제4조제4항, 주택법 제2조제3호)</li>
</ul>
</div>

<div class="line">
<h4>취득세액계산</h4>

<ul class="dot-list">
	<li>취득세 = 과세표준액(매매가) x 취득세율*</li>
	<li>취득세 무신고가산세 = 취득세 x 0.2</li>
	<li>취득세 납부지연가산세 = 취득세 x 납부지연일수(지연일 2019.01.01 이전) x 0.03%(이자율)</li>
	<li>취득세 납부지연가산세 = 취득세 x 납부지연일수(지연일 2019.01.01 이후) x 0.025%(이자율)</li>
	<li>취득세 납부지연가산세 = 취득세 x 납부지연일수(지연일 2022.06.07 이후) x 0.022%(이자율)</li>
	<li>농어촌특별세 = 과세표준액(매매가) x 0.2%
	<ul class="dash-list">
		<li>조정대상지역 1세대 2주택, 조정대상지역 외 지역 1세대 3주택 : 과세표준액(매매가) x 0.6%</li>
		<li>조정대상지역 1세대 3주택이상, 조정대상지역 외 지역 1세대 4주택이상 : 과세표준액(매매가) x 1.0%</li>
	</ul>
	</li>
	<li>농어촌특별세 무신고가산세 = 농어촌특별세 x 0.2</li>
	<li>농어촌특별세 납부지연가산세 = 농어촌특별세 x 납부지연일수(지연일 2019.02.12 이전) x 0.03%(이자율)</li>
	<li>농어촌특별세 납부지연가산세 = 농어촌특별세 x 납부지연일수(지연일 2019.02.12 이후) x 0.025%(이자율)</li>
	<li>농어촌특별세 납부지연가산세 = 농어촌특별세 x 납부지연일수(지연일 2022.02.15 이후) x 0.022%(이자율)</li>
	<li>지방교육세 = 과세표준액(매매가) x (취득세율 x 0.5) x 0.2 (*단. 취득세율은 중과기준세율을 뺀 세율)</li>
	<li>지방교육세 무신고가산세 = 지방교육세 x 0.2</li>
	<li>지방교육세 납부지연가산세 = 지방교육세 x 납부지연일수(지연일 2019.01.01 이전) x 0.03%(이자율)</li>
	<li>지방교육세 납부지연가산세 = 지방교육세 x 납부지연일수(지연일 2019.01.01 이후) x 0.025%(이자율)</li>
	<li>지방교육세 납부지연가산세 = 지방교육세 x 납부지연일수(지연일 2022.06.07 이후) x 0.022%(이자율)</li>
	<li>세액합계액 = 본세합계액 + 무신고가산세합계액 + 납부지연가산세합계액(가산세는 납부경과일수가 0보다 크면 부과됩니다.)</li>
</ul>
</div>

<div class="line">
<h4>가산세안내</h4>

<ul class="dot-list">
	<li>2013년 이후 신고납부기간이 경과하여 신고할 경우 무신고가산세(20%), 부정무신고가산세(40%)가 부과됩니다.</li>
	<li>지방교육세, 농특세에 대한 무신고가산세는 2013년 1월 신고부터는 부과되지 않습니다.
	<ul class="dash-list">
		<li>1개월 이내 : 50% 감면</li>
		<li>1개월~3개월 이내 : 30% 감면</li>
		<li>3개월~6개월 이내 : 20% 감면</li>
	</ul>
	</li>
</ul>
</div>

<div class="line">
<h4>취득세율</h4>

<ul class="dot-list">
	<li>지방세법 개정(2020년 1월 1일 시행)에 따라 개정된 세율
	<ul class="dash-list">
		<li>취득당시가액이 6억원 이하인 주택 : 1 % (1천분의 10)</li>
		<li>취득당시가액이 6억원을 초과하고 9억원 이하인 주택 : (주택 취득당시가액 × 2/3억원 - 3) / 100 (소수점이하 다섯째자리에서 반올림하여 소수점 넷째자리까지 계산)</li>
		<li>취득당시가액이 9억원을 초과하는 주택 : 3 % (1천분의 30)</li>
		<li>1세대 4주택이상 : 4 % (1천분의 40)</li>
	</ul>
	</li>
	<li class="mt05">지방세법 개정(2020년 8월 12일 시행)에 따라 개정된 세율</li>
</ul>

<div class="board-form">
<table>
	<caption>취득세율</caption>
	{/* <colgroup>
		<col style="width:10%">
		<col style="width:10%">
		<col style="width:10%">
		<col style="width:10%">
		<col style="width:10%">
		<col style="width:10%">
	</colgroup> */}
	<tbody>
		<tr>
			<th class="a-c" colspan="3" scope="colgroup">조정대상지역</th>
			<th class="a-c" colspan="3" scope="colgroup">조정대상지역 외 지역</th>
		</tr>
		<tr>
			<td class="a-c">1주택 / 일시적 2주택</td>
			<td class="a-c">2주택</td>
			<td class="a-c">3주택이상</td>
			<td class="a-c">2주택이하</td>
			<td class="a-c">3주택</td>
			<td class="a-c">4주택이상</td>
		</tr>
		<tr>
			<td class="a-c">1 ~ 3 %</td>
			<td class="a-c">8 %</td>
			<td class="a-c">12 %</td>
			<td class="a-c">1 ~ 3 %</td>
			<td class="a-c">8 %</td>
			<td class="a-c">12 %</td>
		</tr>
	</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    );
}

export default App;
