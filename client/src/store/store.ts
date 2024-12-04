import { makeAutoObservable } from "mobx"

class UserStore {
    

    constructor() {
        makeAutoObservable(this)
    }

}

export const myTimer = new UserStore()