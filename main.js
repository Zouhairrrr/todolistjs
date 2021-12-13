import ButtonsEvents from "./Buttons.js";
import Stores from "./LocalStorege.js";
import Selector from "./Selector.js";
import ValidateForm from "./Validate.js";
let validate = new ValidateForm()
let storage = new Stores()
let selector = new Selector()
let buttons = new ButtonsEvents()

// console.log('arrect :>> ', selector.getElbyID(""));
class Master {
        //    constructor(id, name, desc, tasks) {
        //     this.id = selector.querySelc('#pr-id').value
        //     this.name = selector.querySelc('#pr-name').value
        //     this.desc = selector.querySelc('#pr-desc').value
        //     this.tasks = selector.querySelc('#task-name').value
        //    }
        Whatever = (id) => {
            buttons.SubmitBtn(id)
            buttons.SaveBtn(id)


    }
}
// setIn();
let b = new Master()
b.Whatever("#saveTask")
b.Whatever("#submitHome")

// buttons.SubmitBtn("#submitHome")

