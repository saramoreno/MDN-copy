function moveScroller(){var o=function(){var o=$(window).scrollTop(),n=$("#scroller-anchor").offset().top,i=$(".right-column");i.css(o>n?{position:"fixed",top:"0px"}:{position:"relative",top:""})};$(window).scroll(o),o()}$(function(){function o(){$(".dropdown-menu").slideToggle()}$(".drop-bar i").on("click",o)}),$(function(){function o(){$(".drop-content").slideToggle()}$(".drop-bar-aside").on("click",o)}),$(function(){moveScroller()});