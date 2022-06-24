

// preloader
$(".preloader").delay(2000).fadeOut();

$(window).scroll(function(){
    var scrolloing= $(this).scrollTop();
  if(scrolloing>300){
      $("#nav_main").addClass("menu_fix")
  }
  else{
    $("#nav_main").removeClass("menu_fix")
  }

//   scrolling
    if(scrolloing > 300){
        $(".scroll_top").fadeIn();
}
    else
    {
        $(".scroll_top").fadeOut();
    }
})

$(".scroll_top").click(function(){
    $("body, html").animate({
        scrollTop:"0px",
    },3000)
})


// slick slider

// images

$('.images').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
    arrows:false,
})

$('.slider_details').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

    arrows:false,
    asNavFor:".img_slider",
})
$('.img_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode:true,
    centerPadding:"0px",
    arrows:false,
    asNavFor:".slider_details"

})
  