// This is for global types we need in the project
// You can create types and access them in the entire project
type DraggableData = {
    x: number, y: number,
    deltaX: number, deltaY: number,
    lastX: number, lastY: number
};

interface WindowApplication {
    id: string,
    title: string,
    position?: {
        x: number,
        y: number
    },
    isOpen: boolean
}

interface WindowIcon {
    id: string,
    title: string
    color: string,
    position?: {
        x: number,
        y: number
    },
}
