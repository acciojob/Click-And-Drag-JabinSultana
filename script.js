const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Mouse Down → Start Drag
cubes.forEach(cube => {

  cube.addEventListener("mousedown", (e) => {

    activeCube = cube;

    const rect = cube.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    cube.style.position = "absolute";
    cube.style.zIndex = "1000";

  });

});

// Mouse Move → Drag
document.addEventListener("mousemove", (e) => {

  if (!activeCube) return;

  const containerRect =
    container.getBoundingClientRect();

  let newLeft =
    e.clientX - containerRect.left - offsetX;

  let newTop =
    e.clientY - containerRect.top - offsetY;

  // Boundary Constraints

  const cubeWidth = activeCube.offsetWidth;
  const cubeHeight = activeCube.offsetHeight;

  const maxLeft =
    container.offsetWidth - cubeWidth;

  const maxTop =
    container.offsetHeight - cubeHeight;

  // Prevent leaving container

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  activeCube.style.left = newLeft + "px";
  activeCube.style.top = newTop + "px";

});

// Mouse Up → Drop
document.addEventListener("mouseup", () => {

  if (activeCube) {
    activeCube.style.zIndex = "1";
  }

  activeCube = null;

});