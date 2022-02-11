import {FC} from "react";
import desktopStore from "../stores/DesktopStore";
import Draggable from "react-draggable";
import {observer} from "mobx-react-lite";

interface IconProps {
    icon: WindowIcon
}

const Icon: FC<IconProps> = observer(({icon}) => {

    if (!icon) return <div />

    return (
        <Draggable
            defaultPosition={icon.position}
            bounds="body"
            onStop={(e: MouseEvent, data: DraggableData) => desktopStore.updateIconPosition(icon.id, { x: data.x, y: data.y })}
        >
            <div onDoubleClick={() => desktopStore.toggleWindow(icon.id)} className={`cursor-pointer py-2 px-3 max-w-min text-white rounded ${icon.color}`}>
                {icon.title.substr(0, 2)}
            </div>
        </Draggable>
    )
})

export default Icon
