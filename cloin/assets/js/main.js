$(function(){

   
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

      $('.testimonials .items').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });

    $(".pricing .items .item").on('click',function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

   
})