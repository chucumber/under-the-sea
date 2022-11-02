$(function() {
    $( ".draggable" ).draggable();
    $( ".droppable" ).droppable({
        drop: function(){
            $(this).addClass("found"); 
            $(this).css('opacity','1');
        },
        out: function(){
            $(this).removeClass("found"); 
            $(this).css('opacity','0');
        }
    });
});

