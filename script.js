const items = document.querySelector(".items");

let isDown = false;
let startX;
let scrollLeft;

items.addEventListener("mousedown", (e) => {

isDown = true;

startX = e.pageX - items.offsetLeft;

scrollLeft = items.scrollLeft;

});


items.addEventListener("mouseup", () => {

isDown = false;

});


items.addEventListener("mouseleave", () => {

isDown = false;

});


items.addEventListener("mousemove", (e) => {

if (!isDown) return;

e.preventDefault();

const x = e.pageX - items.offsetLeft;

const walk = x - startX;

items.scrollLeft = scrollLeft - walk;

});