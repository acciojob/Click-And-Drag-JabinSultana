const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('mousedown', function (e) {
  isDown = true;

  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', function (e) {

  if (!isDown) return;

  e.preventDefault();

  // Calculate movement
  const walk = (e.pageX - startX) * -1;

  // Force scroll update
  slider.scrollLeft = scrollLeft + walk;

});

slider.addEventListener('mouseup', function () {
  isDown = false;
});

slider.addEventListener('mouseleave', function () {
  isDown = false;
});