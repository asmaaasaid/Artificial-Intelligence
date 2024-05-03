let aboutOffset=$('.scroll-nice').offset().top;
$(window).scroll(function(){
    let windowScroll=$(window).scrollTop();
    if(windowScroll > aboutOffset-70){
        $("#mainNav").css('backgroundColor' , 'rgba(1, 12, 35,1)')
    }
    else
    {
        $("#mainNav").css('backgroundColor' , 'transparent')
    }
})


// -------naigate to pages---------


$('.about-page').click(()=>{
    window.location.href='about.html'
})
$(".home-page").click(function(){
    window.location.href='index.html'
})
$(".project-page").click(function(){
    window.location.href='projects.html'
})
$(".service-page").click(function(){
    window.location.href='services.html'
})
$(".contact-page").click(function(){
    window.location.href='contact.html'
})
$("#teamPage").click(function(){
    window.location.href='teams.html'
})
$("#faqPage").click(function(){
    window.location.href="faq's.html"
})


// --------------section counter
let numbers = document.querySelectorAll('.num')
// console.log(numbers);

let pageSection = document.querySelector('.about-counter');
// console.log(pageSection)

function startCount(element){
    let goal = element.dataset.goal;
    let count = setInterval(()=>{
        element.textContent++;
        if(element.textContent == goal){
            clearInterval(count)
        }
    }, 100/goal)
}

let started = false;
window.onscroll=function(){
    if(window.scrollY >= pageSection.offsetTop-150){
        if(!started){
            numbers.forEach((num)=> startCount(num))
        }
        started = true;
    }
};

// ---------video show
$('.video-img').click(function(){
    $('.video-play').css("display","block")
})
$('.close-mark').click(function(){
    $('.video-play').css('display','none')
})

// -----------height increase

$('.click-btn-1').click(()=>{
    if($('.ask-contain-1').css('height') == "62px"){
        $('.ask-contain-1').animate({height:'+=50'},400);
        $('.click-btn-1').removeClass('fa-circle-plus');
        $('.click-btn-1').addClass('fa-circle-minus');
        $('.ask-contain-1 .hide-text ').show(400);
        $('.ask-contain-1').addClass('border-style')
    }
    else{
        $('.ask-contain-1').animate({height:'-=50'},400);
        $('.click-btn-1').removeClass('fa-circle-minus');
        $('.click-btn-1').addClass('fa-circle-plus');
        $('.ask-contain-1 .hide-text ').hide(400);
        $('.ask-contain-1').removeClass('border-style')
    }
})
$('.click-btn-2').click(()=>{
    if($('.ask-contain-2').css('height') == "62px"){
        $('.ask-contain-2').animate({height:'+=50'},400);
        $('.click-btn-2').removeClass('fa-circle-plus');
        $('.click-btn-2').addClass('fa-circle-minus');
        $('.ask-contain-2 .hide-text ').show(400);
        $('.ask-contain-2').addClass('border-style')
    }
    else{
        $('.ask-contain-2').animate({height:'-=50'},400);
        $('.click-btn-2').removeClass('fa-circle-minus');
        $('.click-btn-2').addClass('fa-circle-plus');
        $('.ask-contain-2 .hide-text ').hide(400);
        $('.ask-contain-2').removeClass('border-style')
    }
})
$('.click-btn-3').click(()=>{
    if($('.ask-contain-3').css('height') == "62px"){
        $('.ask-contain-3').animate({height:'+=50'},400);
        $('.click-btn-3').removeClass('fa-circle-plus');
        $('.click-btn-3').addClass('fa-circle-minus');
        $('.ask-contain-3 .hide-text ').show(400);
        $('.ask-contain-3').addClass('border-style')
    }
    else{
        $('.ask-contain-3').animate({height:'-=50'},400);
        $('.click-btn-3').removeClass('fa-circle-minus');
        $('.click-btn-3').addClass('fa-circle-plus');
        $('.ask-contain-3 .hide-text ').hide(400);
        $('.ask-contain-3').removeClass('border-style')
    }
})
$('.click-btn-4').click(()=>{
    if($('.ask-contain-4').css('height') == "62px"){
        $('.ask-contain-4').animate({height:'+=50'},400);
        $('.click-btn-4').removeClass('fa-circle-plus');
        $('.click-btn-4').addClass('fa-circle-minus');
        $('.ask-contain-4 .hide-text ').show(400);
        $('.ask-contain-4').addClass('border-style')
    }
    else{
        $('.ask-contain-4').animate({height:'-=50'},400);
        $('.click-btn-4').removeClass('fa-circle-minus');
        $('.click-btn-4').addClass('fa-circle-plus');
        $('.ask-contain-4 .hide-text ').hide(400);
        $('.ask-contain-4').removeClass('border-style')
    }
})

// owl carousel
$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel({
        slideSpeed : 600,
    items : 1,
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
    navigation : true,
    navigationText : ["prev","next"],
    });
   
  });


  $('.click-btn-one').click(()=>{
    if($('.ask-contain-one').css('height') == "62px"){
        $('.ask-contain-one').animate({height:'+=100'},400);
        $('.click-btn-one').removeClass('fa-circle-plus');
        $('.click-btn-one').addClass('fa-circle-minus');
        $('.ask-contain-one .hide-text ').show(400);
        $('.ask-contain-one').addClass('border-style')
    }
    else{
        $('.ask-contain-one').animate({height:'-=100'},400);
        $('.click-btn-one').removeClass('fa-circle-minus');
        $('.click-btn-one').addClass('fa-circle-plus');
        $('.ask-contain-one .hide-text ').hide(400);
        $('.ask-contain-one').removeClass('border-style')
    }
})
$('.click-btn-two').click(()=>{
    if($('.ask-contain-two').css('height') == "62px"){
        $('.ask-contain-two').animate({height:'+=100'},400);
        $('.click-btn-two').removeClass('fa-circle-plus');
        $('.click-btn-two').addClass('fa-circle-minus');
        $('.ask-contain-two .hide-text ').show(400);
        $('.ask-contain-two').addClass('border-style')
    }
    else{
        $('.ask-contain-two').animate({height:'-=100'},400);
        $('.click-btn-two').removeClass('fa-circle-minus');
        $('.click-btn-two').addClass('fa-circle-plus');
        $('.ask-contain-two .hide-text ').hide(400);
        $('.ask-contain-two').removeClass('border-style')
    }
})
$('.click-btn-three').click(()=>{
    if($('.ask-contain-three').css('height') == "62px"){
        $('.ask-contain-three').animate({height:'+=100'},400);
        $('.click-btn-three').removeClass('fa-circle-plus');
        $('.click-btn-three').addClass('fa-circle-minus');
        $('.ask-contain-three .hide-text ').show(400);
        $('.ask-contain-three').addClass('border-style')
    }
    else{
        $('.ask-contain-three').animate({height:'-=100'},400);
        $('.click-btn-three').removeClass('fa-circle-minus');
        $('.click-btn-three').addClass('fa-circle-plus');
        $('.ask-contain-three .hide-text ').hide(400);
        $('.ask-contain-three').removeClass('border-style')
    }
})
$('.click-btn-four').click(()=>{
    if($('.ask-contain-four').css('height') == "62px"){
        $('.ask-contain-four').animate({height:'+=100'},400);
        $('.click-btn-four').removeClass('fa-circle-plus');
        $('.click-btn-four').addClass('fa-circle-minus');
        $('.ask-contain-four .hide-text ').show(400);
        $('.ask-contain-four').addClass('border-style')
    }
    else{
        $('.ask-contain-four').animate({height:'-=100'},400);
        $('.click-btn-four').removeClass('fa-circle-minus');
        $('.click-btn-four').addClass('fa-circle-plus');
        $('.ask-contain-four .hide-text ').hide(400);
        $('.ask-contain-four').removeClass('border-style')
    }
})
$('.click-btn-five').click(()=>{
    if($('.ask-contain-five').css('height') == "62px"){
        $('.ask-contain-five').animate({height:'+=100'},400);
        $('.click-btn-five').removeClass('fa-circle-plus');
        $('.click-btn-five').addClass('fa-circle-minus');
        $('.ask-contain-five .hide-text ').show(400);
        $('.ask-contain-five').addClass('border-style')
    }
    else{
        $('.ask-contain-five').animate({height:'-=100'},400);
        $('.click-btn-five').removeClass('fa-circle-minus');
        $('.click-btn-five').addClass('fa-circle-plus');
        $('.ask-contain-five .hide-text ').hide(400);
        $('.ask-contain-five').removeClass('border-style')
    }
})

 