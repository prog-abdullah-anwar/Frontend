$(function(){
    $(window).on('scroll',function(){
        if($(this).scrollTop() >= 50)
        {
            $(".top .navbar").css({"background-color":"#0984E3"});
        }else{
            $(".top .navbar").css("background-color","transparent");
        }
    })

    $(".show-links").on('click',function(){
        $('.menu').slideToggle();
    })

    $(window).on('resize',function(){
        if($(this).innerWidth() > 768){
            $(".show-links").hide();
        }else{
            $(".show-links").show();

        }
    })

    $(".top").on('click',function(){
        $('html,body').animate({
            scrollTop : 0
        },1500)
    })
})