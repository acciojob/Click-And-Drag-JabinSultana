const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let currentCube = null;

let offsetX = 0;
let offsetY = 0;

const cubeSize = 80;
const gap = 10;
const padding = 10;

/* ---- Position cubes in grid manually ---- */

cubes.forEach((cube, index) => {

    const cols = 4;

    const row = Math.floor(index / cols);
    const col = index % cols;

    cube.style.left =
        padding + col * (cubeSize + gap) + "px";

    cube.style.top =
        padding + row * (cubeSize + gap) + "px";

});


/* ---- Drag Start ---- */

cubes.forEach(cube => {

    cube.addEventListener("mousedown", (e) => {

        currentCube = cube;

        const rect = cube.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        cube.style.zIndex = 1000;

    });

});


/* ---- Drag Move ---- */

document.addEventListener("mousemove", (e) => {

    if (!currentCube) return;

    const containerRect =
        container.getBoundingClientRect();

    let newLeft =
        e.clientX - containerRect.left - offsetX;

    let newTop =
        e.clientY - containerRect.top - offsetY;


    /* ---- Boundary Constraints ---- */

    const maxLeft =
        container.clientWidth -
        currentCube.offsetWidth;

    const maxTop =
        container.clientHeight -
        currentCube.offsetHeight;


    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;

    if (newLeft > maxLeft)
        newLeft = maxLeft;

    if (newTop > maxTop)
        newTop = maxTop;


    currentCube.style.left =
        newLeft + "px";

    currentCube.style.top =
        newTop + "px";

});


/* ---- Drag End ---- */

document.addEventListener("mouseup", () => {

    if (currentCube) {

        currentCube.style.zIndex = 1;

        currentCube = null;

    }

});