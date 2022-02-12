import {observer} from "mobx-react-lite";
import Layout from "../layouts/Layout";
import Window from "../components/Window";
import desktopStore from "../stores/DesktopStore";
import Icon from "../components/Icon";

const IndexPage = observer(() => {

    return (
        <Layout>
            {Object.keys(desktopStore.icons).map((key, index) => <Icon key={index} id={key} />)}

            <Window
                id="Home"
                classes="w-[500px]"
            >
                <div className="p-4 h-80 bg-gray-600">
                    Maga riecht toll! (nach Rosen!)
                </div>
            </Window>
        </Layout>
    )
})

export default IndexPage
