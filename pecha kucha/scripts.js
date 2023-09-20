$("#start").click(function(){
    $(".first").fadeIn("slow");
    $(this).fadeOut("slow");
});

$("#kai").click(function(){
    $(".sea").fadeIn(4000);
    $("#step_two").fadeIn("slow");
    $(".first").fadeOut("slow");
});

$("#step_two").click(function(){
    $(".third").fadeIn("slow");
    $(this).fadeOut("slow");
});

$("#taiwan").click(function(){
    $("#step_four_0").fadeIn("slow");
    $("#step_four_1").delay(2500).fadeIn("4000");
    $("#nessie").delay(2000).fadeIn(7000);
    $(".third").fadeOut("slow");
});

$("#nessie").click(function(){
    $(".fifth").fadeIn("slow");
    $(".forth").fadeOut("slow");
});

$("#coastline").click(function(){
    $(".sixth").fadeIn("slow");
    $(".fifth").fadeOut("slow");
});

$("#coastline_a").click(function(){
    $(".seventh").fadeIn("slow");
    $(".sixth").fadeOut("slow");
    $(".sea").fadeOut(5000);
});

$("#kai_a").click(function(){
    $(".eighth").fadeIn("slow");
    $(".seventh").fadeOut("slow");
});

$("#cichlid").click(function(){
    $(".ninth").fadeIn("slow");
    $(".eighth").fadeOut("slow");
    $("#cichlid_a").toggleClass("dying");
});

$("#cichlid_a").click(function(){
    $(".tenth").fadeIn("slow");
    $(".ninth").fadeOut("slow");
    $(".sea").fadeIn(4000);
});

$("#step_ten").click(function(){
    $("#step_eleven_0").fadeIn("slow");
    $("#step_eleven_1").delay(5000).fadeIn("slow");
    $("#container").fadeIn(7000);
    $(".tenth").fadeOut("slow");
});

$("#step_eleven").click(function(){
    $(".twelveth").fadeIn("slow");
    $(".eleventh").fadeOut("slow");
    $(".sea").fadeOut(5000);
});

$("#step_twelve").click(function(){
    $(".thirteenth").fadeIn("slow");
    $(".twelveth").fadeOut("slow");
});

$("#et").click(function(){
    $(".forteenth").fadeIn("slow");
    $(".thirteenth").fadeOut("slow");
});

$("#kirby").click(function(){
    $(".deep_sea").fadeIn(3000);
    $("#step_fifteen_0").fadeIn("slow");
    $("#step_fifteen_1").delay(5000).fadeIn("3000");
    $(".forteenth").fadeOut("slow");
});

$("#step_fifteen").click(function(){
    $(".sixteenth").fadeIn("slow");
    $("#step_fifteen").fadeOut("slow");
});

$("#step_sixteen").click(function(){
    $(".seventeenth").fadeIn("slow");
    $(".sixteenth").fadeOut("slow");
});

$("#step_seventeen").click(function(){
    $(".eighteenth").fadeIn("slow");
    $(".seventeenth").fadeOut("slow");
    $(".deep_sea").fadeOut(3000);
});

$("#step_eighteen").click(function(){
    $(".ninteenth").fadeIn("slow");
    $(".eighteenth").fadeOut("slow");
});

$("#step_ninteen").click(function(){
    $(".twentieth").fadeIn("slow");
    $(".ninteenth").fadeOut("slow");
});

$("#kai_b").click(function(){
    $(".twenty_one").fadeIn("3000");
    $(".twentieth").fadeOut("slow");
});






// $("#dark-btn").click(function(){

//     $(".box").toggleClass("dark");
//     $("body").toggleClass("dark");
    
//   });

// $("#glow-btn").click(function(){

//     $(".box").toggleClass("glow");
    
// });

// $("#spin-btn").click(function(){

//     $(".box").toggleClass("spin");
    
// });

// $("#reveal-btn").click(function(){

//     $(".fish").css('opacity','1');
//     $(this).hide();
// });

// $(".box").click(function(){

//     $(this).hide();
// });

// $( function() {
//     $( ".draggable" ).draggable();
//   } );