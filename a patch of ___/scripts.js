var keyDownFlag = false;
// var originalBackgroundImage = $("body").css("background-image");

$(window).keydown(function(event) {
    // Check if the key is already down
    if (keyDownFlag) {
        return;
    }

    // Set the flag to true
    keyDownFlag = true;

    // Handle different key codes
    if (event.keyCode == 70) {         
        $("#leaf").fadeIn().delay(500).fadeOut("slow");
        $("body").css("background-image", "url('img/leaf.svg')");
    } else if (event.keyCode == 87) {         
        $("#key").fadeIn().delay(500).fadeOut("slow");
        $("body").css("background-image", "url('img/key.svg')");
    } else if (event.keyCode == 65) {         
        $("#usb").fadeIn().delay(500).fadeOut("slow");
        $("body").css("background-image", "url('img/usb.svg')");
    } else if (event.keyCode == 68) {         
        $("#coin").fadeIn().delay(500).fadeOut("slow");
        $("body").css("background-image", "url('img/coin.svg')");
    } else if (event.keyCode == 83) {         
        $("#lid").fadeIn().delay(500).fadeOut("slow");
        $("body").css("background-image", "url('img/lid.svg')");
    }
});

$(window).keyup(function(event) {
    // Reset the flag when the key is released
    keyDownFlag = false;
    // Restore the original background image
    $("body").css("background-image", "url('img/bg.svg')");
});
