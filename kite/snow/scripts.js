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
    message = "the  snow  is  a  gathering  is  a  snow".split(""),
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

dropcounter = 1;
dropamount = 55;
	function snowfall(){
		if(dropcounter < dropamount){
			setTimeout(function(){
				var fall =  document.createElement("div");
				fall.style.left = Math.random() * window.innerWidth+"px";
				fall.style.animationDuration = Math.random() * 6 + 6 + "s";
				fall.classList.add("fall");
				var inside =  document.createElement("INPUT");
				inside.setAttribute("type", "radio");
				inside.checked = Math.floor(Math.random() > 0.7) ? true : false;
				inside.classList.add("sinus");
				inside.style.animationDuration = Math.random() * 8 + 8 + "s";
				fall.appendChild(inside);
				document.getElementById( Math.floor(Math.random() > 0.25) ? "snow1" : "snow2").appendChild(fall);
				snowfall();
			}, 50);
		}
		dropcounter++;
	}
    snowfall();

dropcounter1 = 1;
dropamount1 = 15;
	function snowfallfall(){
		if(dropcounter1 < dropamount1){
			setTimeout(function(){
				var fallfall =  document.createElement("div");
				fallfall.style.left = Math.random() * window.innerWidth+"px";
				fallfall.style.animationDuration = Math.random() * 6 + 6 + "s";
				fallfall.classList.add("fallfall");
				var inside =  document.createElement("INPUT");
				inside.setAttribute("type", "radio");
				inside.checked = Math.floor(Math.random() > 0.5) ? true : false;
				inside.classList.add("sinus");
				inside.style.animationDuration = Math.random() * 8 + 8 + "s";
				fallfall.appendChild(inside);
				document.getElementById( Math.floor(Math.random() > 0.25) ? "meltsnow1" : "meltsnow2").appendChild(fallfall);
				snowfallfall();
			}, 50);
		}
		dropcounter1++;
	}
    snowfallfall();