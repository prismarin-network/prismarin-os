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


export default Desktop