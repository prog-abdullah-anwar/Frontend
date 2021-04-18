$(function(){

   
  $('.slick').slick({
    infinite: false,
    autoplay : true,
    arrows : false,
    autoplaySpeed : 1500
  })


  /* My Code */ 

  $(".questions .title").on('click',function(){
    $(this).next().slideToggle('fast');
    if($(this).find('i').hasClass('fa fa-plus'))
    {
      $(this).find('i').removeClass('fa fa-plus');
      $(this).find('i').addClass('fa fa-minus')
    }else{
      $(this).find('i').removeClass('fa fa-minus');
      $(this).find('i').addClass('fa fa-plus')
    }
  })

  $(".navbar li a").on('click',function(e){
    e.preventDefault();
      $("html,body").animate({
        scrollTop : $("#"+$(this).data('id')).offset().top - 20
      },500)
  })

  $(window).on('scroll',function(){
    if($(this).scrollTop() > 600)
    {
     $(".scrolltop").fadeIn();
    }else{
      $(".scrolltop").fadeOut();
    }
  })

  $(".scrolltop").on('click',function(){
    $('html,body').animate({
      scrollTop : 0
    })
  })
   
})