import styles from "../styles/modules/gradients.module.css";
import {Transition} from "@headlessui/react";
import Logo from "./common/media/Logo";
import {CgSpinner} from "react-icons/cg";
import {FC, ReactNode, useEffect, useState} from "react";

interface LoadingProps {
    children: ReactNode
}

const Loading: FC<LoadingProps> = ({children}) => {

    const [text, setText] = useState("Initializing");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setText("Starting up")

            setTimeout(() => {
                setLoading(false)
            }, 1000);

        }, 3000)
    }, [])


    if(!loading) {
        return (
            <>
                {children}
            </>
        )
    }


    return (
        <Transition
            show={true}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="relative w-full h-screen">
                <div className={`absolute w-full h-full ${styles.lightBlueGradient}`}/>
                <div className="flex absolute flex-col justify-center items-center w-full h-full text-center">
                    <Transition.Child
                        enter="transition duration-700 delay-700 transform"
                        enterFrom="opacity-0 scale-125"
                        enterTo="opacity-100 scale-100"
                    >
                        <Logo height={150} className="mx-auto transform scale-125 fill-blue-100"/>
                    </Transition.Child>

                    <Transition.Child
                        enter="transition-opacity duration-700 delay-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                    >
                        <div className="flex flex-col my-7 text-lg font-bold text-blue-100">
                            <a className="text-2xl uppercase">Prismarin OS</a>
                            <div className="flex justify-center items-center space-x-3">
                                <a className="text-gray-200 opacity-75">{text}</a>
                                <a className="mt-1 animate-spin"><CgSpinner/> </a>

                            </div>

                        </div>
                    </Transition.Child>

                </div>
            </div>
        </Transition>
    )
}

export default Loading
