


class Stores {
    constructor() {
        this.localStore = window.localStorage
    }
    setEl(key, value) {
        return this.localStore.setItem(key, value)
    }
    
   
}
let Store = new Stores();