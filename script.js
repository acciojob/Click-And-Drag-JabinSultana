// Select the container
const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let scrollLeft = 0;

// Mouse Down
slider.addEventListener('mousedown', function (e) {
  isDown = true;
  slider.classList.add('active');

  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

// Mouse Leave
slider.addEventListener('mouseleave', function () {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse Up
slider.addEventListener('mouseup', function () {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse Move
slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX;
  const walk = x - startX;

  slider.scrollLeft = scrollLeft - walk;
});