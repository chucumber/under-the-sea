const root = document.querySelector('body');

const follower = document.createElement('div');
follower.classList.add('kite');
root.appendChild(follower);

let mouseX = 0; // Initialize mouse X position
let mouseY = 0; // Initialize mouse Y position
let prevX = 0; // Initialize previous kite X position
let prevY = 0; // Initialize previous kite Y position
let lagFactor = 0.8; // Adjust this value to control the lag effect, lower values mean more lag

setInterval(updateKitePosition, 500); // Update kite position every 300 milliseconds

root.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateKitePosition() {
    // Calculate the distance between current and previous kite positions
    const dx = mouseX - prevX;
    const dy = mouseY - prevY;

    // Update the kite's position using linear interpolation
    const newX = prevX + dx * lagFactor;
    const newY = prevY + dy * lagFactor;

    follower.style.transform = `translate(${newX}px, ${newY}px)`;

    // Update previous kite positions
    prevX = newX;
    prevY = newY;
}

// Show the kite after 1 second
setTimeout(() => {
    follower.style.opacity = '1';
}, 1000);



let x, y = -20;
const steps = [], delay = 500;

const
    message = "the  wind  is  the  progress  is  the  wind".split(""),
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
});

  i = 0;
setInterval(function() {
  i = ++i % 4;
  $(".loading").text("until it's too much" + Array(i+1).join("."));
}, 800);

// $("#flyback").click(function(){
//     $(".question").hide();
//     $(".fullquestion").fadeIn("slow");
//     $(".links").fadeIn("slow");

// }



