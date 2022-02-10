import {observer} from "mobx-react-lite";
import Layout from "../layouts/Layout";
import Window from "../components/Window";

const IndexPage = observer(() => {

    const handle = (e: MouseEvent, data: DraggableData) => {
        console.info('Position: ', data['x'] + " - " + data['y']);
    }

    return (
        <Layout>
            <Window
                title="Test Window"
                classes="w-[500px]"
                onStop={handle}
            >
                Test
            </Window>
        </Layout>
    )
})

export default IndexPage
