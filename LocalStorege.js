


export default class Stores {
    setEl = (key, value) => localStore.setItem(key, JSON.stringify(value))
    getEl = (key) => JSON.parse(localStorage.getItem(key))
}
let Store = new Stores();