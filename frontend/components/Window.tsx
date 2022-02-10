import Draggable from "react-draggable";
import React, {FC} from "react";

interface WindowProps {
    onStop: (e: MouseEvent, data: DraggableData) => void,
    title: string,
    classes: string,
    children?: React.ReactNode
}

const Window: FC<WindowProps> = ({onStop, title, classes, children}) => {
    return (
        <Draggable
            bounds="body"
            onStop={onStop}
            handle="header"
        >
            <div className={`rounded-lg overflow-hidden ${classes}`}>
                <header className="bg-blue-400">
                    {title}
                </header>
                <div className="bg-black">
                    {children}
                </div>
            </div>
        </Draggable>
    )
}

export default Window
