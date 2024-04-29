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

setTimeout(() => {
    follower.style.opacity = '1';
}, 1000);

let x, y = -20;
const steps = [], delay = 100;

const
    message = "a  search  is  a  string  is  a  search".split(""),
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

$("#search_btn").click(function(){
    $(".question").hide();
    $(".fullquestion").fadeIn("slow");
    $(".searchbar").css('overflow-y','scroll');
    $(".links").fadeIn("slow");
    // $(this).hide();
}
)


