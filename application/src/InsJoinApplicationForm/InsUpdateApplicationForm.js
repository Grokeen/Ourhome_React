import "../InsJoinApplicationForm.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function App() {

    return (


        <div id="contents" class="inner-wrap">
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>


            <div class="tab-area mt30">
                






                <div id="usGdcInfo02"></div>


                <div class="title-wrap">
                    <p class="title-3">(바인딩) 보험 신청서 입력</p>

                    <p class="req-info"><span class="req">*</span> 는 필수 입력 항목입니다.</p>
                </div>

                <div class="board-form">
                    <table id="actxDclrDVO">


                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">취득원인</th>
                                <td colspan="3">
                                    <span class="bg-chk">
                                        <input type="radio" id="actxObjKndDtlCd01" name="actxObjKndDtlCd" value="0102" checked="checked" />
                                        <label for="actxObjKndDtlCd01">유상취득(농지 외)  </label>
                                    </span>

                                

                                    <span class="bg-chk">
                                        <input type="radio" id="actxObjKndDtlCd02" name="actxObjKndDtlCd" value="0105" />
                                        <label for="actxObjKndDtlCd02">유상취득(농지)</label>
                                    </span>
                                </td>
                            </tr>
                            <tr id="tr_0105_01">
                                <th scope="row">
                                    과세표준액(매매가) <span class="req" title="필수 입력 항목">*</span>

                                    
                                </th>
                                <td>
                                    <div class="unit-wrap">
                                        <input type="text" title="과세표준액(매매가) 입력" class="input-text" id="dclrAcqsVal" name="dclrAcqsVal" maxlength="11" data-inputamount="" data-done="DONE" />
                                        <span class="unit">원</span>
                                    </div>
                                </td>
                                <th scope="row">
                                    거래유형

                                  
                                </th>
                                <td>
                                    <select title="거래유형 선택" class="w100pc" id="resDlngTypCd" name="resDlngTypCd" data-appendoption="{'dataFnc':'cfGetCmnCdList',
								 					 'addFirst':'선택',
													 'dataParam':'DLNG_TYP_CD'}" data-done="DONE">
                                            <option value="">선택</option>
                                            <option value="01">전용면적85m2이하주택</option>
                                            <option value="02">일반주택매매</option>
                                            <option value="03">기타</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">조정대상지역 여부</th>
                                <td>
                                    <span class="bg-chk">
                                        <input type="radio" id="adjTrgtRgnYn1" name="adjTrgtRgnYn" value="Y" />
                                        <label for="adjTrgtRgnYn1">해당 </label>
                                    </span>

                                    <span class="bg-chk">
                                        <input type="radio" id="adjTrgtRgnYn2" name="adjTrgtRgnYn" value="N" checked="checked" />
                                        <label for="adjTrgtRgnYn2">해당없음</label>
                                    </span>
                                </td>
                                <th scope="row">고급주택</th>
                                <td>
                                    <span class="bg-chk">
                                        <input type="radio" id="vilLxrhYn1" name="vilLxrhYn" value="Y" />
                                        <label for="vilLxrhYn1">해당 </label>
                                    </span>

                                    <span class="bg-chk">
                                        <input type="radio" id="vilLxrhYn2" name="vilLxrhYn" value="N" checked="checked" />
                                        <label for="vilLxrhYn2">해당없음</label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">소유주택 수</th>
                                <td colspan="3">
                                    <span class="bg-chk">
                                        <input type="radio" id="hh1HosCnt1" name="hh1HosCnt" value="1" checked="checked" />
                                        <label for="hh1HosCnt1">중과제외 </label>
                                    </span>
                                    <span class="bg-chk">
                                        <input type="radio" id="hh1HosCnt2" name="hh1HosCnt" value="2" />
                                        <label for="hh1HosCnt2">2주택 </label>
                                    </span>
                                    <span class="bg-chk">
                                        <input type="radio" id="hh1HosCnt3" name="hh1HosCnt" value="3" />
                                        <label for="hh1HosCnt3">3주택 </label>
                                    </span>

                                    <span class="bg-chk">
                                        <input type="radio" id="hh1HosCnt4" name="hh1HosCnt" value="4" />
                                        <label for="hh1HosCnt4">4주택 이상</label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">중과세 내용</th>
                                <td colspan="3">
                                    <span id="txaAdjDtlNm">해당없음</span>
                                    <input type="hidden" id="txaAdjDtlCd" name="txaAdjDtlCd" value="" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">매매계약일자 <span class="req" title="필수 입력 항목">*</span></th>
                                <td>
                                    <div class="datepicker">
                                        <span>
                                            <input type="text" title="매매계약일자" placeholder="YYYY-MM-DD" name="ctrtYmd" id="ctrtYmd" data-inputcalendar="" required="" maxlength="10" data-done="DONE" numberonly="" class="hasDatepicker" />
                                            <button type="button" class="ui-datepicker-trigger">날짜 선택</button>
                                        </span>
                                    </div>
                                </td>
                                <th scope="row">
                                    취득일자 
                                </th>
                                <td>
                                    <div class="datepicker">
                                        <span>
                                            <input type="text" title="취득일자" id="acqsYmd" name="acqsYmd" placeholder="YYYY-MM-DD" data-inputcalendar="" required="" maxlength="10" data-done="DONE" numberonly="" class="hasDatepicker" />
                                            
                                            <button type="button" class="ui-datepicker-trigger">날짜 선택
                                            </button>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">가산세구분</th>
                                <td>
                                    <span class="bg-chk mr05">
                                        <input type="radio" id="dclrInscAdtxCd1" name="dclrInscAdtxCd" value="0401010" disabled="" />
                                        <label for="dclrInscAdtxCd1">일반무신고가산세 </label>
                                    </span>

                                    <span class="bg-chk mr00">
                                        <input type="radio" id="dclrInscAdtxCd2" name="dclrInscAdtxCd" value="0401020" disabled="" />
                                        <label for="dclrInscAdtxCd2">부정무신고가산세</label>
                                    </span>
                                </td>
                                <th scope="row">부정신고사유</th>
                                <td>
                                    <select title="부정신고사유 선택" class="w100pc" id="ufrDclrRsCd" name="ufrDclrRsCd" data-appendoption="{'dataFnc':'cfGetCmnCdList',
								 					 'addFirst':'선택',
													 'dataParam':'UFR_DCLR_RS_CD'}" disabled="" data-done="DONE">
                                        <option value="">선택</option>
                                        <option value="01">이중장부의 작성 등 장부의 거짓 기장</option>
                                        <option value="02">거짓 증빙 또는 거짓 문서의 작성 및 수취</option>
                                        <option value="03">장부와 기록의 파기</option>
                                        <option value="04">재산의 은닉, 소득ㆍ수익ㆍ행위ㆍ거래의 조작 또는 은폐</option>
                                        <option value="05">고의적으로 장부를 작성하지 아니하거나 비치하지 아니하는 행위</option>
                                        <option value="06">그 밖에 위계(僞計)에 의한 행위</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">납부기한</th>
                                <td>
                                    <span id="txtPayTermYmd">2025-02-24</span>
                                    <input type="hidden" class="input-text w150" title="납부기한" id="payTermYmd" name="payTermYmd" value="20250224" />
                                </td>
                                <th scope="row">납부지연일수</th>
                                <td>
                                    <div class="unit-wrap">
                                        <input type="text" class="input-text" title="납부지연일수" id="payDlyDcn" name="payDlyDcn" readonly="readonly" />
                                        <span class="unit">일</span>
                                        <input type="hidden" title="가산세감면구분" id="adtxRdeClCd" name="adtxRdeClCd" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>  
              
            </div>
            <div class="button-group mt30">
	            <button type="button" class="button navy" id="btnLotxClcResult">
                    신청하기
                </button>
            </div>
        </div>

        

    );
}

export default App;
