import {observer} from "mobx-react-lite";
import persistentStore from "../stores/PersistentStore";
import DefaultComponent from "../components/DefaultComponent";
import DefaultLayout from "../layouts/DefaultLayout";

const IndexPage = observer(() => {

    return (
        <DefaultLayout>
            <DefaultComponent name={persistentStore.name} setName={persistentStore.setName} />
        </DefaultLayout>
    )
})

export default IndexPage
