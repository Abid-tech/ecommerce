$(function(){
   
$('.pro-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:false,
  dots:true,
  autoplaySpeed: 2000,
});    
    
$('.slide-main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed:1000,
  arrows:true,
  dots:false,
  autoplaySpeed: 2000,
  nextArrow : ".right",
  prevArrow : ".left",
    responsive: [
                 {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    },
          {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }  
  ]
});      
$('.client-main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  arrows:false,
  dots:false,
  autoplaySpeed: 300,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    },
          {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        dots: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    }  
  ]
});
$('.blog-main').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  speed:2000,
  vertical:true,
  autoplaySpeed: 2000,
  nextArrow : ".up",
  prevArrow : ".down",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    },
          {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }  
  ]
}); 	    
    
    
    
    
// FILTER    
var containerEl = document.querySelector('.deal-main');

var mixer = mixitup(containerEl);   
    
    
//ANIMATION SCROLL START
var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 110
            }, 1500);
            return false;
        }
    }
}); 
    
//BACK-TOP PART START    
$('.back-btn').on('click',function(){
    $('html,body').animate({scrollTop:0},1500);
}) 
//BACK-TOP PART END
    
    
    
//BACK-TOP PART END
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    //BACK-TOP FADE START
    if(scrolling > 200){
       $('.back-btn').fadeIn();
    }
    else{
        $('.back-btn').fadeOut();
    }
    //BACK-TOP FADE END
    
    
    //BG-ADD FADE START
    if(scrolling > 100){
        $('.navbar').addClass('bg');
    }
    else{
        $('.navbar').removeClass('bg');
    }
    //BG-ADD FADE END
    
});        
    
    
    
    
});