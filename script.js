const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;

  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault();

  const walk = startX - e.pageX;

  // FORCE scroll update
  slider.scrollLeft = scrollLeft + walk;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});