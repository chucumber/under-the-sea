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
    message = "a  lightning  is  a  notice  is  a  lightning".split(""),
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
});

let openedWindows = []; // Array to store references to opened windows

$("#strike").click(function(){
    $(this).hide();
    $("#flyback").show();
})

function lightning() {
    const urls = [
        "./lightning/warning.html", // 1
        "./lightning/warning2.html", // 2
        "./lightning/warning3.html", // 3
        "./lightning/warning4.html", // 4
        "./lightning/warning5.html", // 5
        "./lightning/warning6.html", // 6
        "./lightning/warning7.html", // 7
        "./lightning/warning8.html", // 8
        "./lightning/warning9.html", // 9
        "./lightning/warning10.html" // 10
    ];
    const windowSizes = [
        { width: 300, height: 200 }, // 1
        { width: 400, height: 250 }, // 2
        { width: 250, height: 100 }, // 3
        { width: 300, height: 220 }, // 4
        { width: 360, height: 210 }, // 5
        { width: 300, height: 270 }, // 6
        { width: 300, height: 320 }, // 7
        { width: 250, height: 100 }, // 8
        { width: 500, height: 300 }, // 9
        { width: 330, height: 170 }, // 10
    ];
    const windowPositions = [
        { posX: 100, posY: 100 }, // 1
        { posX: 500, posY: 200 }, // 2
        { posX: 440, posY: 700 }, // 3
        { posX: 800, posY: 270 }, // 4
        { posX: 500, posY: 850 }, // 5
        { posX: 50, posY: 500 }, // 6
        { posX: 1350, posY: 360 }, // 7
        { posX: 1300, posY: 950 }, // 8
        { posX: 900, posY: 600 }, // 9
        { posX: 1000, posY: 150 } // 10
    ];

    // Loop through each window position and open a new window with the corresponding URL
    windowPositions.forEach((position, index) => {
        const { posX, posY } = position;
        const { width, height } = windowSizes[index]; // Get the size corresponding to the current window index
        const url = urls[index]; // Get the URL corresponding to the current window index
        const features = `width=${width},height=${height},top=${posY},left=${posX}`;
        const newWindow = window.open(url, `Pop-up_${posX}_${posY}`, features);
        openedWindows.push(newWindow); 
    });
}

function changeImage(isHovered) {
    const image = document.getElementById("flyback");
    
    const hoverSrc = "../img/exit.png";
    const nonHoverSrc = "../img/blowaway.png";

    image.src = isHovered ? hoverSrc : nonHoverSrc;
}

function closeall(windowToKeepOpen) {
    // Iterate through the array of opened windows
    openedWindows.forEach(window => {
        // Check if the current window is not the one to keep open
        if (window !== windowToKeepOpen) {
            window.close(); // Close the window
        }
    });
    window.location.href = 'index.html';
}