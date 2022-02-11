import Draggable from "react-draggable";
import React, {FC, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {HiOutlineX, HiOutlineMinusSm} from "react-icons/hi"
import desktopStore from "../stores/DesktopStore";

interface WindowProps {
    id: string,
    classes: string,
    children?: React.ReactNode
}

const Window: FC<WindowProps> = observer(({id, classes, children}) => {
    const [window, setWindow] = useState<WindowApplication>(undefined)

    useEffect(() => {
        setWindow(desktopStore.windows[id])
    }, [id])

    if (!window || !window.isOpen) {
        return <div />
    }

    return (
        <Draggable
            defaultPosition={window.position}
            bounds="body"
            onStop={(e: MouseEvent, data: DraggableData) => desktopStore.updateWindowPosition(id, { x: data.x, y: data.y })}
            handle="header"
        >
            <div className={`rounded-lg overflow-hidden ${classes}`}>
                <header className="flex gap-4 items-center py-2 px-3 bg-gray-800 cursor-pointer">
                    <div className="group flex gap-2 items-center">
                        <span onClick={() => desktopStore.toggleWindow(window.id)} className="flex overflow-hidden items-center bg-red-500 rounded-full">
                            <HiOutlineX size="0.95rem" className="invisible group-hover:visible mx-auto text-red-200" />
                        </span>
                        <span className="flex overflow-hidden items-center bg-yellow-500 rounded-full">
                            <HiOutlineMinusSm size="0.95rem" className="invisible group-hover:visible mx-auto text-yellow-200" />
                        </span>
                    </div>
                    <span className="text-lg text-gray-200">
                        {window.title}
                    </span>
                </header>
                {children}
            </div>
        </Draggable>
    )
})

export default Window
