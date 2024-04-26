const root = document.querySelector('body');

// Following extra cursor element
const follower = document.createElement('div');
follower.classList.add('kite');
root.appendChild(follower);

root.addEventListener('mousemove', e => {
    setPosition(follower, e);
});

let prevX = 0; // Initialize previous X position
let prevAngle = 20; // Initialize previous rotation angle

function setPosition(element, e) {
    const angle = (e.clientX > prevX) ? 20 : ((e.clientX < prevX) ? -20 : prevAngle); // Determine rotation angle based on mouse movement

    element.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(${angle}deg)`;

    prevX = e.clientX; // Update previous X position
    prevAngle = angle; // Update previous rotation angle
}



let x, y = -20;
const steps = [], delay = 100;

const
    message = "how's  the  ground  today,  flyer?".split(""),
    xpos = [], ypos = [];

window.addEventListener("mousemove", e => {
    x = pageXOffset + event.clientX + 18;
    y = pageYOffset + event.clientY + 26;
});

function kitetail() {
    const amplitude = 6; // Adjust this value to control the height of the wave
    const frequency = 0.06; // Adjust this value to control the frequency of the wave

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
            el.style.top = ypos[i] + waveOffset + "px"; // Adjust the ypos with waveOffset
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
        el.style.animationDelay = `${i * 0.1}s`; // Adjust delay for each letter
    });

    setInterval(kitetail, delay);

    // Call setRandomPositions() after the buttons are created
    setRandomPositions();
});

function setRandomPositions() {
    var buttons = document.querySelectorAll('.button');
    var buttonPositions = [];

    // Get the width and height of the window
    var windowWidth = window.innerWidth - 200; // Subtracting 200px (100px on each side) from the window width
    var windowHeight = window.innerHeight - 200; // Subtracting 200px (100px on top and bottom) from the window height

    buttons.forEach(function(button) {
        var randomLeft, randomTop;
        var conflicts;

        do {
            conflicts = false;
            randomLeft = Math.floor(Math.random() * (windowWidth - button.offsetWidth)) + 100; // Adding 100px margin to the left
            randomTop = Math.floor(Math.random() * (windowHeight - button.offsetHeight)) + 100; // Adding 100px margin to the top

            // Check if the new position conflicts with existing button positions
            for (var i = 0; i < buttonPositions.length; i++) {
                var pos = buttonPositions[i];
                if (isOverlap(randomLeft, randomTop, button.offsetWidth, button.offsetHeight, pos.left, pos.top, button.offsetWidth, button.offsetHeight)) {
                    conflicts = true;
                    break;
                }
            }
        } while (conflicts);

        // Set the button's position
        button.style.left = randomLeft + 'px';
        button.style.top = randomTop + 'px';

        // Store the button's position for checking conflicts
        buttonPositions.push({ left: randomLeft, top: randomTop });
    });
}

// Function to check if two rectangles overlap
function isOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
}


