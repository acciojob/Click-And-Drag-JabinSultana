const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let scrollLeft = 0;

// Mouse Down
slider.addEventListener('mousedown', (e) => {
  isDown = true;

  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

// Mouse Leave
slider.addEventListener('mouseleave', () => {
  isDown = false;
});

// Mouse Up
slider.addEventListener('mouseup', () => {
  isDown = false;
});

// Mouse Move (Important Fix Here)
slider.addEventListener('mousemove', (e) => {

  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX;

  const walk = x - startX;

  slider.scrollLeft = scrollLeft - walk;

});