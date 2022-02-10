import {observer} from "mobx-react-lite";
import Layout from "../layouts/Layout";
import styles from "../styles/modules/gradients.module.css"
import Logo from "../components/common/media/Logo";
import {Transition} from "@headlessui/react";
import Loading from "../components/Loading";

const IndexPage = observer(() => {

    return (
        <Layout>
            <Loading />
        </Layout>
    )
})

export default IndexPage
