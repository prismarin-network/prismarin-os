import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable} from "mobx-persist-store";

class DesktopStore {

    windows: Record<string, WindowApplication> = {
        "Home": {
            id: "Home",
            title: "Start",
            isOpen: true,
            position: {
                x: 0,
                y: 0
            }
        }
    }
    icons: Record<string, WindowIcon> = {
        "Home": {
            id: "Home",
            title: "Start Programm",
            color: "bg-red-500",
            position: {
                x: 0,
                y: 0
            }
        }
    }

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});

        makePersistable(this, {
            name: "WindowStore",
            properties: ["windows", "icons"],
        }).then(() => {
            return;
        });
    }

    updateWindowPosition(id, position: {x: number, y: number}) {
        runInAction(() => {
            this.windows[id].position = position;
        })
    }

    updateIconPosition(id, position: {x: number, y: number}) {
        runInAction(() => {
            this.icons[id].position = position;
        })
    }

    toggleWindow(id) {
        runInAction(() => {
            this.windows[id].isOpen = !this.windows[id].isOpen
        })
    }
}

const desktopStore = new DesktopStore()
export default desktopStore
