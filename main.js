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

    Whatever = (id) => {
        if (buttons.SubmitBtn(id)) {
            const x = function () {
                console.log('azert')
            }
        }
        
    }
}
// setIn();
let b = new Master()
b.Whatever("#submitHome")