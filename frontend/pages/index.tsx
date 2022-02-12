import {observer} from "mobx-react-lite";
import Layout from "../layouts/Layout";
import Loading from "../components/Loading";
import Desktop from "../components/Desktop";

const IndexPage = observer(() => {

    return (
        <Layout>
            <Loading>
                <Desktop />
            </Loading>
        </Layout>
    )
})

export default IndexPage
