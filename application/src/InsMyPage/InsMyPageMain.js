import React, { useState} from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section class="basic-body-main page-padding col-md-9 right-main" >
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
            
{/* <style>
.top_menu_on {
	background: #2b2b37;
}상단메뉴 하이드시(off) 이미지클릭을 위해서
.top_menu_off {
	background: transparent;
	height: 80px !important;
}
</style>
<script> */}

{/* $('.gameStartWrap a').mouseover(function() {
	$(this).find('.image_after').animate({ opacity: 1 }, 300, function() {
		$(this).find('.image_after').attr('src', '/img/renew/btn_start_02.png');
	});
}).mouseleave(function() {
	$(this).find('.image_after').animate({ opacity: 0 }, 300);
});

$('.nav.navbar-nav').mouseover(function() {
	$('#top_menu').removeClass('top_menu_off').addClass('top_menu_on');
	$('#top_menu').animate({ height: 340 }, 300);
	
	$('#top_menu .dropdown-menu').show();
}).mouseleave(function() {
	$('#top_menu').removeClass('top_menu_on').addClass('top_menu_off');	
	//$('#top_menu').animate({ height: 80 }, 300);

	$('#top_menu .dropdown-menu').hide();
}); */}

{/* /*
var pos_page = 0;
var pos_cur = 0;
var pos_total = $('.main_banner li').length;
var pos_total_page = Math.ceil(pos_total / 4) - 1;

function next_btn() {
	//console.log(pos_page + "  " + pos_total_page + " " + pos_cur);
	
	if(pos_page < pos_total_page) {
		pos_page = pos_page + 1;
		$('.pos_move').animate({left : -(1128 * pos_page)}, 300);


		pos_cur = (pos_page * 4);
		
		$('.pos_move dl').removeClass('active');
		$('.pos_move dl').eq(pos_cur).addClass('active');
		
		//$('.main_banner li').removeClass('active').css({ opacity: 0 });
		$('.main_banner li').eq(pos_cur).addClass('active');
		$('.main_banner li').eq(pos_cur).animate({ opacity: 1 }, 300);
	}else {
		//console.log("next_btn " );
		
	}
	
}

function next_page() {
	
}

function prev_btn() {
	var test = $(this).index();
	//console.log("prev = " + pos_page + " pos = " + test);
	if(pos_page > 0) {
		pos_page = pos_page - 1;
		$('.pos_move').animate({left : -(1128 * pos_page)}, 300);


		pos_cur = (pos_page * 4);

		$('.pos_move dl').removeClass('active');
		$('.pos_move dl').eq(pos_cur).addClass('active');
		
		//$('.main_banner li').removeClass('active').css({ opacity: 0 });
		$('.main_banner li').removeClass('active');
		$('.main_banner li').eq(pos_cur).addClass('active');
		$('.main_banner li').eq(pos_cur).animate({ opacity: 1 }, 300);

	}
}

$('.pos_move dl').click(function() {
	var pos = $(this).index();
	//console.log("click = " + pos);
	
	pos_cur = pos;

	$('.pos_move dl').removeClass('active');
	$(this).addClass('active');
	
	//$('.main_banner li').removeClass('active').css({ opacity: 0 });
	$('.main_banner li').removeClass('active');
	$('.main_banner li').eq(pos).addClass('active');

	$('.main_banner li').eq(pos).animate({ opacity: 1 }, 300);

	
}); */}

{/* setInterval(function() {
	//console.log("pos_cur = " + pos_cur + " pos_total = " + pos_total + " setinterval");
	if(pos_cur < pos_total) {
		pos_cur = pos_cur + 1;

		if(pos_cur%4 == 0) {
			next_btn();
		} else {
			$('.pos_move dl').eq(pos_cur).click();
		}

		
	} else {
		pos_page = 0;
		$('.pos_move').animate({left : -(1128 * pos_page)}, 300);


		pos_cur = (pos_page * 4);

		$('.pos_move dl').removeClass('active');
		$('.pos_move dl').eq(pos_cur).addClass('active');
		
		//$('.main_banner li').removeClass('active').css({ opacity: 0 });
		$('.main_banner li').removeClass('active');
		$('.main_banner li').eq(pos_cur).addClass('active');
		$('.main_banner li').eq(pos_cur).animate({ opacity: 1 }, 300);
	}
}, 7000);

function fnMyinfoGameLINK() {
	window.open('https://auth.juneinter.com/mywindy.do?method=myinfo','windyzone');
}
</script> */}

{/* <!--
<style>
.board-list .board-setup {position:relative;border:1px solid #d5d5d5;height:30px;margin-bottom:20px}
.board-list .board-setup .select {position:absolute;top:-1px;left:-1px;display:inline-block;width:200px}
.board-list .board-setup-btn-box {position:absolute;top:-1px;right:-1px;display:inline-block;width:420px}
.board-list .board-setup-btn {float:left;width:25%;height:30px;line-height:30px;color:#fff;text-align:center;font-size:12px}
.board-list .board-setup-btn:nth-child(odd) {background:#59595B}
.board-list .board-setup-btn:nth-child(even) {background:#676769}
.board-list .board-setup-btn:hover {opacity:0.8}
.board-list .eyoom-form .checkbox {padding-left:15px}
.board-list .eyoom-form .checkbox i {top:2px}
.board-list .table-list-eb .table thead > tr > th {border-bottom:1px solid #959595;text-align:center;padding:10px 5px}
.board-list .table-list-eb .table tbody > tr > td {border-top:1px solid #ededed;padding:7px 5px}
.board-list .table-list-eb thead {border-top:2px solid #757575;border-bottom:1px solid #959595}
.board-list .table-list-eb th {color:#000;font-weight:bold;white-space:nowrap;font-size:13px}
.board-list .table-list-eb .td-comment {display:inline-block;white-space:nowrap;vertical-align:baseline;text-align:center;min-width:35px;padding:1px;font-size:10px;line-height:1;color:#fff;background-color:#757575;margin-right:5px}
.board-list .table-list-eb .td-comment .cnt_cmt {margin:0;font-weight:normal}
.board-list .table-list-eb .td-subject {width:300px}
.board-list .table-list-eb .td-subject a {color:#000}
.board-list .table-list-eb .td-subject a:hover {color:#FF4848;text-decoration:underline}
.board-list .table-list-eb .td-subject .fas {color:#FF4848}
.board-list .table-list-eb .td-subject .reply-indication {display:inline-block;width:7px;height:10px;border-left:1px dotted #b5b5b5;border-bottom:1px dotted #b5b5b5}
.board-list .table-list-eb .td-photo {display:inline-block;width:26px;height:26px;margin-right:2px;border:1px solid #e5e5e5;padding:1px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:50% !important;-moz-border-radius:50% !important;border-radius:50% !important}
.board-list .table-list-eb .td-photo img {width:100%;height:auto;-webkit-border-radius:50% !important;-moz-border-radius:50% !important;border-radius:50% !important}
.board-list .table-list-eb .td-photo .td-user-icon {width:22px;height:22px;font-size:12px;line-height:22px;text-align:center;background:#959595;color:#fff;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;white-space:nowrap;vertical-align:baseline;-webkit-border-radius:50% !important;-moz-border-radius:50% !important;border-radius:50% !important}
.board-list .table-list-eb .td-lv-icon {display:inline-block;margin-right:2px}
.board-list .table-list-eb .td-star-icon {display:inline-block;margin-right:2px;margin-bottom:-4px}
.board-list .table-list-eb .td-name b {font-weight:normal;font-size:12px}
.board-list .table-list-eb .td-date {text-align:center;color:#959595;font-size:12px}
.board-list .table-list-eb .td-num {text-align:center;font-size:12px}
.board-list .table-list-eb .table tbody > tr.td-mobile > td {border-top:1px solid #fff;padding:0 0 5px !important;font-size:11px;color:#959595}
.board-list .table-list-eb .td-mobile td {position:relative}
.board-list .table-list-eb .td-mobile td > span {margin-right:5px}
.board-list .table-list-eb .td-mobile td .td-mobile-name b {font-weight:normal}
.board-list .table-list-eb .td-mobile td .td-mobile-time {position:absolute;top:5px;right:0;margin-right:0}
.board-list .star-ratings-list {width:60px;margin:0 auto}
.board-list .star-ratings-list li {padding:0;float:left;margin-right:0}
.board-list .star-ratings-list li .rating {color:#a5a5a5;font-size:10px;line-height:normal}
.board-list .star-ratings-list li .rating-selected {color:#FF4848;font-size:10px}
.board-list .bo_current {color:#FF4848}
.board-list .board-notice {background:#FFF8EC}
.board-list .board-notice .td-subject a {color:#AA3510}
.board-list .board-notice .td-subject a:hover {color:#AA3510}
.board-list .board-btn-adm li {float:left;margin-right:5px}
.board-list .favorite-setup {display:inline-block;width:100px;margin-left:15px}
.board-list .favorite-setup .toggle {padding-right:37px}
@media (max-width:1199px) {
    .board-list .table-list-eb .td-subject {width:240px}
}
@media (max-width:767px) {
    .board-list .table-list-eb .table tbody > tr > td {padding:10px 0}
    .board-list .table-list-eb .table tbody > tr > td.td-subj-wrap {padding:10px 0}
    .board-list .table-list-eb .td-subject {width:300px}
    .board-list .table-list-eb .td-subject .subject {font-size:13px;font-weight:bold}
}
</style>
-->
<style>
.board-list .comments {
	position: absolute;
	top: 10px;
	right: 10px;
	width: 3.0rem;
	height: 3.0rem;
	text-align: center;
	vertical-align: middle;
	border: 1px solid #fe6c00;
	background: #fff;
	border-radius: 3px !important;
	line-height: 31px;
	color: #000;
}

select.bbs-title {
    height: 3.0rem;
    margin-left: 1.3rem;
    padding-right: 3.3rem;
    border: 0;
    background-size: 2.5rem 0.6rem;
    color: #1a1a1a;
    font-size: 1.5rem;
    font-weight: bold;
}

.btn-search {
    color: #6d6d6d;
    font-size: 16px;
    line-height: 40px;
    margin-right: 15px;
}

.info .writer {
	position: relative;
	color: #fe6c00;
	    padding-left: 20px;
}
.admin img {
    position: absolute;
    top: -2px;
    left: -4px;
    width: 2.0rem;
    height: 2.0rem;
}
.board-list .board-setup {position:relative;border:1px solid #d5d5d5;height:30px;margin-bottom:20px}
.board-list .board-setup .select {position:absolute;top:-1px;left:-1px;display:inline-block;width:200px}
.board-list .board-setup-btn-box {position:absolute;top:-1px;right:-1px;display:inline-block;width:420px}
.board-list .board-setup-btn {float:left;width:25%;height:30px;line-height:30px;color:#fff;text-align:center;font-size:12px}
.board-list .board-setup-btn:nth-child(odd) {background:#59595B}
.board-list .board-setup-btn:nth-child(even) {background:#676769}
.board-list .board-setup-btn:hover {opacity:0.8}
.board-list .eyoom-form .checkbox {padding-left:15px}
.board-list .eyoom-form .checkbox i {top:2px}
.board-list .table-list-eb .table thead > tr > th {border-bottom:1px solid #959595;text-align:center;padding:10px 5px}
.board-list .table-list-eb .table tbody > tr > td {
    padding: 1.6rem 1.5rem 1.7rem;
    border-top: 1px solid #eaeaea;
}
.board-list .table-list-eb thead {border-top:2px solid #757575;border-bottom:1px solid #959595}
.board-list .table-list-eb th {color:#000;font-weight:bold;white-space:nowrap;font-size:13px}
.board-list .table-list-eb .td-comment {display:inline-block;white-space:nowrap;vertical-align:baseline;text-align:center;min-width:35px;padding:1px;font-size:10px;line-height:1;color:#fff;background-color:#757575;margin-right:5px}
.board-list .table-list-eb .td-comment .cnt_cmt {margin:0;font-weight:normal}
.board-list .table-list-eb .td-subject {
	font-size: 16px;
	color: #333;
	float: left;
}
.board-list .table-list-eb .td-subject a {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Roboto,"Droid Sans","Helvetica Neue", "Apple SD Gothic Neo",Dotum,sans-serif;
    font-size: 1.4rem;
    color: #1a1a1a;
	display: inline-block; width: 320px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.board-list .table-list-eb .td-subject a:hover {color:#FF4848;text-decoration:underline}
.board-list .table-list-eb .td-subject .fas {color:#FF4848}
.board-list .table-list-eb .td-subject .reply-indication {display:inline-block;width:7px;height:10px;border-left:1px dotted #b5b5b5;border-bottom:1px dotted #b5b5b5}
.board-list .table-list-eb .td-photo {display:inline-block;width:26px;height:26px;margin-right:2px;border:1px solid #e5e5e5;padding:1px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:50% !important;-moz-border-radius:50% !important;border-radius:50% !important}
.board-list .table-list-eb .td-photo img {width:100%;height:auto;-webkit-border-radius:50% !important;-moz-border-radius:50% !important;border-radius:50% !important}
.board-list .table-list-eb .td-photo .td-user-icon {width:22px;height:22px;font-size:12px;line-height:22px;text-align:center;background:#959595;color:#fff;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;white-space:nowrap;vertical-align:baseline;-webkit-border-radius:50% !important;-moz-border-radius:50% !important;border-radius:50% !important}
.board-list .table-list-eb .td-lv-icon {display:inline-block;margin-right:2px}
.board-list .table-list-eb .td-star-icon {display:inline-block;margin-right:2px;margin-bottom:-4px}
.board-list .table-list-eb .td-name b {font-weight:normal;font-size:12px}
.board-list .table-list-eb .td-date {text-align:center;color:#959595;font-size:12px}
.board-list .table-list-eb .td-num {text-align:center;font-size:12px}
.board-list .table-list-eb .table tbody > tr.td-mobile > td {border-top:1px solid #fff;padding:0 0 5px !important;font-size:11px;color:#959595}
.board-list .table-list-eb .td-mobile td {position:relative}
.board-list .table-list-eb .td-mobile td > span {margin-right:5px}
.board-list .table-list-eb .td-mobile td .td-mobile-name b {font-weight:normal}
.board-list .table-list-eb .td-mobile td .td-mobile-time {position:absolute;top:5px;right:0;margin-right:0}
.board-list .star-ratings-list {width:60px;margin:0 auto}
.board-list .star-ratings-list li {padding:0;float:left;margin-right:0}
.board-list .star-ratings-list li .rating {color:#a5a5a5;font-size:10px;line-height:normal}
.board-list .star-ratings-list li .rating-selected {color:#FF4848;font-size:10px}
.board-list .bo_current {color:#FF4848}
.board-list .board-notice td {background: #f9f9f9 !important;}
.board-list .board-notice .td-subject a {color:#AA3510}
.board-list .board-notice .td-subject a:hover {color:#AA3510}
.board-list .board-btn-adm li {float:left;margin-right:5px}
.board-list .favorite-setup {display:inline-block;width:100px;margin-left:15px}
.board-list .favorite-setup .toggle {padding-right:37px}
@media (max-width:1199px) {
    .board-list .table-list-eb .td-subject {width:240px}
}
@media (max-width:767px) {
    .board-list .table-list-eb .table tbody > tr > td {position: relative; padding:10px 0}
    .board-list .table-list-eb .table tbody > tr > td.td-subj-wrap {padding:10px 0}
    .board-list .table-list-eb .td-subject {width:300px}
    .board-list .table-list-eb .td-subject .subject {font-size:13px;font-weight:bold}
}

.board-list .info {
    float: right;
    font-family: "Tahoma";
    color: #aaaaaa;
    font-size: 12px;
    margin-right: 0;
    margin-top: 5px;
    min-width: 324px;
}
</style> */}

<div class="board-list">
    
        <div class="board-info">
        <div class="pull-left margin-top-5 font-size-12 color-grey">
			<select class="bbs-title">
								<option value="/bbs/board.php?bo_table=gm">GM소식</option>
								<option value="/bbs/board.php?bo_table=notice">공지사항</option>
								<option selected="" value="/bbs/board.php?bo_table=update">업데이트</option>
								<option value="/bbs/board.php?bo_table=percentage">확률 게시판</option>
						</select>
			{/* <script>
				$(function () {
					$("select.bbs-title").change(function (e) {
						location.href = this.value;
					});
				});
			</script> */}
        </div>
       
        <div class="pull-right">
            <a href="/" class="btn-search" data-toggle="modal" data-target=".search-modal">
			<i class="fas fa-search"></i></a>
        </div>
       
        <div class="clearfix"></div>
    </div>
    
                
            
        <div class="table-list-eb margin-bottom-20">
        <div class="board-list-body">
            <table class="table table-hover">
                
                <tbody>
                                        <tr class="">
                        <td class="td-num hidden-md hidden-sm">
                                                        <span >1,275</span>
                                                    </td>
                                                <td class="td-subj-wrap">
                            <p class="td-subject ellipsis">
                                                                <a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;wr_id=1297">
                                                                                                                                                                                    <span class="subject">크리스마스 플레일/디바인 위자드 출시!</span>
                                                                    </a>
                            </p>
							<div class="info">
								<span class="writer admin" >
									<img src="/img/master_icon.png" alt=""/>관리자								
								</span>
								{/* <!-- 예전 리스트
								<span class="date" style="margin-left: 55px;color: #9a9a9a">
									<i class="far fa-clock" style=""></i>
																		2024.12.23																	</span>
								
								<span class="date" style="margin-left: 55px;color: #9a9a9a">
									<i class="far fa-eye" style=""></i>
									1733								</span>
								--> */}
								<span class="date" >
									<i class="far fa-clock" ></i>
																		2024.12.23																	</span>
								
								<span class="date" >
									<i class="far fa-eye">

                                    </i>
									1733								</span>
							</div>

														
                        </td>
                        
                    </tr>
                    
                    
                                                        </tbody>
            </table>
        </div>
    </div>

    <div class="board-list-footer">
        <div class="pull-left">
                        <span class="pull-left">
                                <a class="btn-e btn-e-dark" type="button" data-toggle="modal" data-target="#smodal"><i class="fas fa-search"></i></a>
            </span>
        </div>
        <div class="pull-right">
                    </div>
        <div class="clearfix"></div>
    </div>

    </div>

<div class="modal fade search-modal" data-backdrop="false" aria-hidden="true" id="smodal">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                <h5 class="modal-title"><i class="fas fa-search color-grey"></i> <strong>업데이트 검색</strong></h5>
            </div>
            <div class="modal-body">
                                <fieldset id="bo_sch" class="eyoom-form">
                    {/* <form name="fsearch" method="get">
                    <input type="hidden" name="bo_table" value="update">
                    <input type="hidden" name="sca" value="">
                    <input type="hidden" name="sop" value="and">
                    <label for="sfl" class="sound_only">검색대상</label>
                    <section class="margin-top-10">
                        <label class="select">
                            <select name="sfl" id="sfl" class="form-control">
                                <option value="wr_subject">제목</option>
                                <option value="wr_content">내용</option>
                                <option value="wr_subject||wr_content">제목+내용</option>
                               
                            
                                <option value="wr_name,1">글쓴이</option>
                             
                                                            </select>
                            <i></i>
                        </label>
                    </section>
                    <section>
                        <label for="stx" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
                        <div class="input input-button">
                            <input type="text" name="stx" value="" required="" id="stx"/>
                            <div class="button"><input type="submit" value="검색"/>검색</div>
                        </div>
                    </section>
                    </form> */}
                </fieldset>
                            </div>
            <div class="modal-footer">
                <button data-dismiss="modal" class="btn-e btn-e-lg btn-e-dark" type="button"><i class="fas fa-times"></i> 닫기</button>
            </div>
        </div>
    </div>
</div>
{/* <iframe name="photoframe" id="photoframe" style="display:none;"></iframe> */}



<style>
{/* .eb-pagination-wrap {position:relative;text-align:center;padding:7px;margin-top:30px}
.eb-pagination {position:relative;list-style:none;display:inline-block;padding:0;margin:0}
.eb-pagination li {display:inline}
.eb-pagination a {display:inline-block;font-size:12px;text-decoration:none;min-width:28px;height:28px;padding:0 5px;color:#fff;border:1px solid transparent;line-height:26px;text-align:center;color:#757575;position:relative;z-index:1}
.eb-pagination a:active {outline:none}
.eb-pagination a:hover {color:#000;background:#e5e5e5}
.eb-pagination a.active {cursor:default;background:#4B4B4D;color:#fff}
.eb-pagination a.active:hover {color:#fff;background:#4B4B4D}
.eb-pagination a.next,.eb-pagination a.prev {color:#959595}
.eb-pagination a.next:hover,.eb-pagination a.prev:hover {color:#000} */}
</style>

{/* <div class="eb-pagination-wrap">
    <ul class="eb-pagination">
        <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=1"><i class="fas fa-angle-double-left"></i></a></li>
        <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=1" class="prev"><i class="fas fa-angle-left"></i></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=1" class="active">1<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=2">2<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=3">3<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=4">4<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=5">5<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=6">6<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=7">7<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=8">8<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=9">9<span class="sound_only">페이지</span></a></li>
                <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=10">10<span class="sound_only">페이지</span></a></li>
                        <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=2" class="next"><i class="fas fa-angle-right"></i></a></li>
        <li><a href="https://getamped.juneinter.com/bbs/board.php?bo_table=update&amp;page=85"><i class="fas fa-angle-double-right"></i></a></li>
    </ul>
</div> */}
{/* <script src="https://getamped.juneinter.com/theme/eb4_basic/plugins/sweetalert/sweetalert.min.js"></script> */}


							 
                </section>
  );
};

export default Footer;