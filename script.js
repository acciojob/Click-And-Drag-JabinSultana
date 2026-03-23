const slider = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;

// Mouse Down
slider.addEventListener("mousedown", (e) => {

  isDown = true;

  startX = e.pageX - slider.offsetLeft;

  scrollLeft = slider.scrollLeft;

});

// Mouse Leave
slider.addEventListener("mouseleave", () => {

  isDown = false;

});

// Mouse Up
slider.addEventListener("mouseup", () => {

  isDown = false;

});

// Mouse Move (Dragging)
slider.addEventListener("mousemove", (e) => {

  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;

  const walk = (x - startX) * 2;

  slider.scrollLeft = scrollLeft - walk;

});