import persistentStore from "../stores/PersistentStore";
import {FC} from "react";
import {BaseButton} from "@woolgens/web-library";

type SetNameFunction = (newName) => void;

interface DefaultComponentProps {
    name: string,
    setName: SetNameFunction
}

const DefaultComponent: FC<DefaultComponentProps> = ({name, setName}) => {
    return (
        <div className="mx-auto mt-20 text-center">
            <h1 className="text-2xl font-bold">
                Hi {name} There is nothing here yet!
            </h1>
            <h2 onClick={() => persistentStore.getPersistedData()} className="text-xl">
                Add a new page in <code className="p-1 bg-gray-200 rounded">/src/pages</code>.
            </h2>
            <div className="mt-10">
                <input
                    onChange={(el) => setName(el.target.value)}
                    className="py-1 px-3 rounded border-2 border-black"
                    placeholder="Your name..."
                    type="text"
                />
                <BaseButton type="primary" className="ml-2" onClick={() => console.info("Button clicked!")}>
                    Save
                </BaseButton>
            </div>
        </div>
    )
}

export default DefaultComponent
