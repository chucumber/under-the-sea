const root = document.querySelector('body');

const follower = document.createElement('div');
follower.classList.add('kite');
root.appendChild(follower);

let mouseX = 0;
let mouseY = 0; 
let prevX = 0;
let prevY = 0;
let lagFactor = 0.8; // lower values mean more lag

setInterval(updateKitePosition, 500); // Update kite position every 500 milliseconds

root.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateKitePosition() {
    const dx = mouseX - prevX;
    const dy = mouseY - prevY;

    const newX = prevX + dx * lagFactor;
    const newY = prevY + dy * lagFactor;

    follower.style.transform = `translate(${newX}px, ${newY}px)`;

    // Update previous kite positions
    prevX = newX;
    prevY = newY;
}

let x = -20, y = -20;
const steps = [], delay = 500;

const
    message = "the  wind  is  the  progress  is  the  wind".split(""),
    xpos = [], ypos = [];

document.addEventListener("mousemove", e => {
    x = e.pageX + 18;
    y = e.pageY + 26;
});

function kitetail() {
    const amplitude = 6; // the height of the wave
    const frequency = 0.06; // the frequency of the wave

    for (let i = message.length - 1; i > 0; i--) {
        xpos[i] = xpos[i - 1] + steps[i - 1];
        ypos[i] = ypos[i - 1];
    }
    xpos[0] = x + steps[0];
    ypos[0] = y;

    for (let i = 0; i < message.length; i++) {
        const el = document.getElementById("s" + i);
        const waveOffset = amplitude * Math.sin(frequency * xpos[i]);
        if (xpos[i] + steps[i] > document.documentElement.clientWidth)
            el.style.display = "none";
        else {
            el.style.display = "block";
            el.style.left = xpos[i] + "px";
            el.style.top = ypos[i] + waveOffset + "px"; // the ypos with waveOffset
        }
    }
}

setTimeout(() => {
    follower.style.opacity = '1';
}, 1000);


document.addEventListener("DOMContentLoaded", () => {
    message.forEach((word, i) => {
        const el = document.createElement("div");
        el.id = "s" + i;
        el.classList.add("kitetail_letter");
        el.innerText = word;
        document.body.appendChild(el);
        steps.push(el.getBoundingClientRect().width + 3);
        el.style.animationDelay = `${i * 0.1}s`; // delay for each letter
    });

    setInterval(kitetail, delay);

});

$(document).ready(function () {
    $(document).on('contextmenu', function (e) {
        // e.preventDefault();

        var notification = $('<div>', {
            class: 'notification',
            text: 'An arrow-like Sprite presents itself and a list of services. Hum...these options seem unnecessary for your flight...'
        });

        $('body').append(notification);

        notification.delay(9000).fadeOut(1000, function () {
            $(this).remove(); // Remove the notification from the DOM
        });
    });
});

i = 0;
setInterval(function () {
    i = ++i % 4;
    $(".loading").text("until it's too much" + Array(i + 1).join("."));
}, 800);