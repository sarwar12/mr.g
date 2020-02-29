// Themeforest Approved Method
(function ($) {
	"use strict";
// Case Study Carousel Code
	jQuery(document).ready(function($){
		$(".case-studies-carousel").owlCarousel({
			margin: 30,
			loop: true,
			autoplay: false,
			nav: false,
			dots:true,
			reponsiveClass: true,
			responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		  }
		});
// Testimonial Carousel Code
		$(".testimonial-carousel").owlCarousel({
			items:1,
			loop: true,
			autoplay: false,
			nav: false,
			dots:true
		});
// Logo Carousel Code
		$(".logo-carousel").owlCarousel({
			loop: true,
			autoplay: false,
			nav: false,
			dots:false,
			reponsiveClass: true,
			responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		  }
		});
// Homepage slides Code
		$(".homepage-slides").owlCarousel({
			items:1,
			loop: true,
			autoplay: false,
			nav: true,
			navText: ["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"],
			dots:false
		});
// Offcanvas Menu Code
	$('.menu-trigger').on('click', function(){
		$('.offcanvas-menu').addClass('show-offcanvas-menu');
		$('.offvanvas-menu-shade').addClass('active');
	});
	$('.menu-close, .offvanvas-menu-shade').on('click', function(){
		$('.offcanvas-menu').removeClass('show-offcanvas-menu');
		$('.offvanvas-menu-shade').removeClass('active');
	});
// Dynamic Search Menu Code
	$('.search-trigger').on('click', function(){
		$('.search-bar-wrap').addClass('active');
	});
	$('.search-close').on('click', function(){
		$('.search-bar-wrap').removeClass('active');
	});
// Colornip Layout Code
	$('.boxed-layout').on('click', function(){
		$('body').addClass('boxed-layout').removeClass('wide-layout');
		$('.layout-changer span').removeClass('active');
		$(this).addClass('active');
	});
	$('.wide-layout').on('click', function(){
		$('body').addClass('wide-layout').removeClass('boxed-layout');
		$('.layout-changer span').removeClass('active');
		$(this).addClass('active');
	});
// Textimonial Hover Active Code
	$(".single-testimonial-box").hover(function(){
		$(".single-testimonial-box").removeClass('active');
		$(this).addClass('active');
	});
// Magnific Popup Code
	$(".video-play-btn").magnificPopup({
		type: 'video'
	});
// Slick_Nav Code
	$("#mrg-menu").slicknav({
		prependTo: '#mobile-menu-wrap',
		allowParentLinks: true
	});
		
		
	});
	
	
	jQuery(window).load(function(){
		
	});
}(jQuery));