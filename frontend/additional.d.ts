// This is for global types we need in the project
// You can create types and access them in the entire project

type DraggableData = {
    node: HTMLElement,
    // lastX + deltaX === x
    x: number, y: number,
    deltaX: number, deltaY: number,
    lastX: number, lastY: number
};
