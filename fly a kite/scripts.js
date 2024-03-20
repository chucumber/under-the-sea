const root = document.querySelector('body');

// Following extra cursor element
const follower = document.createElement('div');
follower.classList.add('kite');
root.appendChild(follower);

root.addEventListener('mousemove', e => {
  setPosition(follower, e);
});

function setPosition(element, e) {
  // Generate a random scale between 0.5 and 1.5
  const randomScale = Math.random() + 0.5;
  
  // Apply transform with random scale
  element.style.transform = `translate(${e.clientX-60}px, ${e.clientY-30}px) scale(${randomScale})`;
}
