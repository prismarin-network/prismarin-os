import {FC, useEffect, useState} from "react";
import desktopStore from "../stores/DesktopStore";
import Draggable from "react-draggable";
import {observer} from "mobx-react-lite";

interface IconProps {
    id: string
}

const Icon: FC<IconProps> = observer(({id}) => {
    const [icon, setIcon] = useState<WindowIcon>(undefined)

    useEffect(() => {
        setIcon(desktopStore.icons[id])
    }, [id])

    if (!icon) return <div />

    return (
        <Draggable
            defaultPosition={icon.position}
            bounds="body"
            grid={[125, 100]}
            scale={1}
            onStop={(e: MouseEvent, data: DraggableData) => desktopStore.updateIconPosition(icon.id, { x: data.x, y: data.y })}
        >
            <div onDoubleClick={() => desktopStore.toggleWindow(icon.id)} className="flex flex-col gap-1 items-center py-4 text-center max-w-[125px]">
                <span className={`cursor-pointer py-2.5 px-3 max-w-min text-white text-2xl uppercase font-bold rounded ${icon.color}`}>
                    {icon.title.substr(0, 2)}
                </span>
                <span className="text-sm text-white">
                    {icon.title}
                </span>
            </div>
        </Draggable>
    )
})

export default Icon
