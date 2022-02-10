import {observer} from "mobx-react-lite";
import Layout from "../layouts/Layout";
import Draggable from 'react-draggable';

const IndexPage = observer(() => {

    // eslint-disable-next-line @typescript-eslint/ban-types
    const handle = (e: MouseEvent, data: Object) => {
        console.info('Position: ', data['x'] + " - " + data['y']);
    }

    return (
        <Layout>
            <div className="h-screen">
                <Draggable
                    bounds="body"
                    onStop={handle}
                    handle="header"
                >
                    <div className="w-96">
                        <header className="bg-blue-400 rounded-t-2xl">
                            Drag here
                        </header>
                        <div className="rounded-b-2xl bg-gray-800/50">
                            You must click my handle to drag me
                        </div>
                    </div>
                </Draggable>
                <Draggable
                    bounds="body"
                    onStop={handle}
                >
                    <div className="w-20 h-20 bg-black"/>
                </Draggable>
            </div>
        </Layout>
    )
})

export default IndexPage
