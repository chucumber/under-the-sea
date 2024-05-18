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

const
    message = "a  lightning  is  a  notice  is  a  lightning".split("");
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


let openedWindows = []; // Array to store references to opened windows

$("#big-red-button").click(function(){
    $(this).hide();
    $("#description").hide();
    $("#flyback").show();
    });

function lightning() {
    const urls = [
        "./lightning/warning.html",
        "./lightning/warning2.html",
        "./lightning/warning3.html",
        "./lightning/warning4.html",
        "./lightning/warning5.html",
        "./lightning/warning6.html",
        "./lightning/warning7.html",
        "./lightning/warning8.html",
        "./lightning/warning9.html",
        "./lightning/warning10.html"
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
        { posX: '5vw', posY: '3vh' }, // 1
        { posX: '30vw', posY: '10vh' }, // 2
        { posX: '20vw', posY: '50vh' }, // 3
        { posX: '60vw', posY: '20vh' }, // 4
        { posX: '28vw', posY: '78vh' }, // 5
        { posX: '2vw', posY: '45vh' }, // 6
        { posX: '75vw', posY: '30vh' }, // 7
        { posX: '45vw', posY: '93vh' }, // 8
        { posX: '73vw', posY: '65vh' }, // 9
        { posX: '80vw', posY: '7vh' } // 10
    ];

    // Open each pop-up window
    urls.forEach((url, index) => {
        const { width, height } = windowSizes[index];
        const { posX, posY } = windowPositions[index];
        const posXPixel = (window.innerWidth * parseFloat(posX) / 100).toFixed(0);
        const posYPixel = (window.innerHeight * parseFloat(posY) / 100).toFixed(0);
        const features = `width=${width},height=${height},top=${posYPixel},left=${posXPixel}`;
        const newWindow = window.open(url, `_blank`, features); // Open the window
        openedWindows.push(newWindow); // Store the reference to the opened window
    });
}

function closeall(windowToKeepOpen) {
    window.location.href = 'index.html';
    // Iterate through the array of opened windows
    openedWindows.forEach(window => {
        // Check if the current window is not the one to keep open
        if (window !== windowToKeepOpen) {
            window.close(); // Close the window
        }
    });
}

