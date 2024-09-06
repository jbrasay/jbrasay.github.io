/**********************
  Initialized TypedJS
 **********************/
var typed = new Typed('.typewriter span', {
    strings: ['Hello! I\'m John'],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
});



$(function(){

    //ADD Bounce animation class from Animate CSS Library when element is hovered
    $(".animate-container-jump").hover(function(){
      //alert("Hello");
      $("img", this).addClass("animate__animated animate__bounce animate__infinite");
    }, function() {
      $("img", this).removeClass("animate__animated animate__bounce animate__infinite");
    });

    //ADD rubberBand animation class from Animate CSS Library when element is hovered
    $(".animate-container-rubberband").hover(function(){
      //alert("Hello");
      $("img", this).addClass("animate__animated animate__rubberBand animate__infinite");
    }, function() {
      $("img", this).removeClass("animate__animated animate__rubberBand animate__infinite");
    });

    //ADD Pulse animation class from Animate CSS Library when element is hovered
    $(".animate-container-pulse").hover(function(){
      //alert("Hello");
      $("img", this).addClass("animate__animated animate__pulse animate__infinite");
    }, function() {
      $("img", this).removeClass("animate__animated animate__pulse animate__infinite");
    });

    //RESUME BUTTON ANIMATION
    //ADD headShake animation class from Animate CSS Library when element is hovered
    $(".animate-container-headshake").hover(function(){
      //alert("Hello");
      $(this).addClass("animate__animated animate__headShake animate__infinite");
    }, function() {
      $(this).removeClass("animate__animated animate__headShake animate__infinite");
    });
});