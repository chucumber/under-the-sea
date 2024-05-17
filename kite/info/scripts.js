const root = document.querySelector('body');

const follower = document.createElement('div');
follower.classList.add('kite');
root.appendChild(follower);

let prevX = 0; // Initialize previous X position
let prevAngle = 20; // Initialize previous rotation angle

document.addEventListener('mousemove', e => {
    setPosition(follower, e);
});

function setPosition(element, e) {
    const angle = (e.clientX > prevX) ? 20 : ((e.clientX < prevX) ? -20 : prevAngle);

    element.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(${angle}deg)`;

    prevX = e.clientX; // Update previous X position
    prevAngle = angle; // Update previous rotation angle
}

let x = -20, y = -20;
const steps = [], delay = 100;

const message = "a  cursor  is  a  kite  is  a  cursor".split("");
const xpos = [], ypos = [];

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

function BackToIndex() {
    if (document.getElementById("checkbox").checked) {
        setTimeout(function() {
            window.location.href = "index.html";
        }, 4500);
    }
}

