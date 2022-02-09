import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable, getPersistedStore,} from "mobx-persist-store";

class PersistentStore {

    name: string | null = "Human";

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});

        makePersistable(this, {
            name: "PersistentStore",
            properties: ["name"],
        }).then(() => {
            return;
        });
    }

    async getPersistedData(): Promise<void> {
        const data = await getPersistedStore(this);
        console.info(JSON.stringify(data));
    }

    async setName(name) {
        runInAction(() => {
            this.name = name;
        });
    }
}

const persistentStore = new PersistentStore()
export default persistentStore
