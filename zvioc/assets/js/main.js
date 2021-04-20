/* Vue js */ 
var App = new Vue({
  el : '#app',
  data : {
    section2 : [
      {
        icon:'fa fa-globe',
        text : 'Consutancy'
      },
      {
        icon:'fa fa-eercast',
        text : 'UI/UX Design'
      },
      {
        icon:'fa fa-grav',
        text : 'Smart Coding'
      },
      {
        icon:'fa fa-bell',
        text : 'Support'
      },
    ],
    feat1: [
      {
        icon:'fa fa-cog',
        title: 'Powerful Performance',
        text : 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.',

      },
      {
        icon:'fa fa-tablet',
        title: 'Responsive Layout',
        text : 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.',

      },
      {
        icon:'fa fa-eye',
        title: 'Retina Ready Graphics',
        text : 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.',

      },
    ],
    feat2 : [
      {
        icon:'fa fa-heart-o',
        title: 'Work With Love',
        text : 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.',
      },
      {
        icon:'fa fa-lightbulb-o',
        title: 'Unique Design',
        text : 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.',
      },
      {
        icon:'fa fa-coffee',
        title: 'Creative Design',
        text : 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.',
      },
    ]
  }
})
/* End Vue js */

$(function(){

   
  $('.parent-text').slick({
    infinite: false,
    autoplay : true,
    arrows : false,
    autoplaySpeed : 1500,
    dots: true,

  })


  /* My Code */ 


  $(".scrolltop").on('click',function(){
    $('html,body').animate({
      scrollTop : 0
    },1000)
  })
   
})