import desktopStore from "../stores/DesktopStore";
import Icon from "./Icon";
import Window from "./Window";
import styles from "../styles/modules/gradients.module.css";
import ApplicationBar from "./ApplicationBar";

const Desktop = () => {
    return (
        <div className="relative w-full h-screen">
            <div className={`absolute w-full h-full ${styles.desktopBackground}`}/>

            <div className="flex absolute flex-col justify-center items-center w-full h-full">
                <a className="flex-grow text-2xl text-white">Content</a>

               <ApplicationBar />

            </div>
        </div>
    )
}


const Others = () => {
    return (
        <>
            {Object.entries(desktopStore.icons).map(([, icon], index) => <Icon key={index} icon={icon} />)}

            <Window
                id="Home"
                classes="w-[500px]"
            >
                <div className="p-4 h-80 bg-gray-600">
                    Maga riecht toll! (nach Rosen!)
                </div>
            </Window>
        </>
    )
}

export default Desktop