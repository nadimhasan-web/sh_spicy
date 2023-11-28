//offer card slider

$('.offer_card_main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1500,
    dots:true,
  });

//menu slider
 
$('.menu_one').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 3000,
  dots:false,
  centerMode:true,
  centerPadding:0,
});

//menu fixed

let main_menu=document.querySelector('.main_menu');

window.addEventListener('scroll',function(){
    let scrolling =this.scrollY

    if(scrolling>300){
      main_menu.classList.add('fixed_menu')
    }else{
      main_menu.classList.remove('fixed_menu')
    }
    
})

      
          