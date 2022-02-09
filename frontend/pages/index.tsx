import {observer} from "mobx-react-lite";
import Layout from "../layouts/Layout";
import styles from "../styles/modules/gradients.module.css"
import Logo from "../components/common/media/Logo";
import {Transition} from "@headlessui/react";

const IndexPage = observer(() => {

    return (
        <Layout>
            <Transition
                show={true}
                appear={true}
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
                            enter="transition-opacity duration-700 delay-700"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <Logo height={150} className="mx-auto fill-blue-100"/>
                            <div className="my-4 text-lg font-bold text-blue-100 uppercase">
                                Click anywhere to continue...
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Transition>
        </Layout>
    )
})

export default IndexPage
