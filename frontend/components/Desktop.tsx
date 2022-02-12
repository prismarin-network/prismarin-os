import styles from "../styles/modules/gradients.module.css";
import ApplicationBar from "./ApplicationBar";
import desktopStore from "../stores/DesktopStore";
import Icon from "./Icon";
import Window from "./Window";

const Desktop = () => {
    return (
        <div className={`w-full h-screen ${styles.desktopBackground}`}>
            <div className="flex flex-col justify-between items-center w-full h-full">
                <section className="w-full h-full">
                    {Object.keys(desktopStore.icons).map((key, index) => <Icon key={index} id={key} />)}
                    <Window
                        id="Home"
                        classes="w-[500px]"
                    >
                        <div className="p-4 h-80 bg-gray-600">
                            Maga riecht toll! (nach Rosen!)
                        </div>
                    </Window>
                </section>
                <ApplicationBar />
            </div>
        </div>
    )
}


export default Desktop
