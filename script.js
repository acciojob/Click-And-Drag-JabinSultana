const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;

  // Correct start position
  startX = e.pageX - slider.offsetLeft;

  // Save current scroll
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault();

  // Correct mouse position
  const x = e.pageX - slider.offsetLeft;

  // Movement distance
  const walk = (x - startX);

  // Scroll movement
  slider.scrollLeft = scrollLeft - walk;
});