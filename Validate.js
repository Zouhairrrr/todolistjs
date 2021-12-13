import Selector from "./Selector.js";
let selector = new Selector()

export default class ValidateForm {

    constructor(id, name, desc, date, tasks = []) {
        this.id = selector.querySelc('#pr-id')
        this.name = selector.querySelc('#pr-name')
        this.desc = selector.querySelc('#pr-desc')
        this.date = new Date()
        this.tasks = selector.querySelc('#task-name')
    }
    validate = () => {
        if (this.id === "" || this.name === "") {
            console.log('error')
        }
    }
}



