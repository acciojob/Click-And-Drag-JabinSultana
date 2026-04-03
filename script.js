const container = document.getElementById("container");
const cubes = document.querySelectorAll(".cube");

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

// Add listeners to all cubes
cubes.forEach(cube => {

    cube.addEventListener("mousedown", (e) => {

        selectedCube = cube;

        // Change position to absolute when dragging starts
        selectedCube.style.position = "absolute";

        // Get mouse offset
        const rect = selectedCube.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        // Move cube relative to container
        selectedCube.style.left =
            rect.left - containerRect.left + "px";

        selectedCube.style.top =
            rect.top - containerRect.top + "px";

        selectedCube.style.zIndex = 1000;

    });

});

document.addEventListener("mousemove", (e) => {

    if (!selectedCube) return;

    const containerRect = container.getBoundingClientRect();

    let newLeft =
        e.clientX - containerRect.left - offsetX;

    let newTop =
        e.clientY - containerRect.top - offsetY;

    // Boundary restriction
    const cubeWidth = selectedCube.offsetWidth;
    const cubeHeight = selectedCube.offsetHeight;

    const maxLeft =
        container.clientWidth - cubeWidth;

    const maxTop =
        container.clientHeight - cubeHeight;

    // Prevent going outside
    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(0, Math.min(newTop, maxTop));

    selectedCube.style.left = newLeft + "px";
    selectedCube.style.top = newTop + "px";

});

document.addEventListener("mouseup", () => {

    if (selectedCube) {
        selectedCube.style.zIndex = 1;
    }

    selectedCube = null;

});