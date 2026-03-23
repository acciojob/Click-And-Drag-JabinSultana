// Your code here.
// Select the container
const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

// When mouse button is pressed
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  // Get starting mouse position
  startX = e.pageX - slider.offsetLeft;

  // Store initial scroll position
  scrollLeft = slider.scrollLeft;
});

// When mouse leaves container
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// When mouse button released
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// When mouse moves
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault();

  // Current mouse position
  const x = e.pageX - slider.offsetLeft;

  // Distance moved
  const walk = (x - startX) * 2; // scroll speed

  // Scroll container
  slider.scrollLeft = scrollLeft - walk;
});