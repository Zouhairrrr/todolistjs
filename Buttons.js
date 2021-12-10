import Stores from "./LocalStorege.js";
import Selector from "./Selector.js";
let stroage = new Stores()
let selector = new Selector()
// console.log('object :>> ', selector.getElbyID(""));

export default class ButtonsEvents {
    SubmitBtn = (_id) => {
        const submitBtn = selector.querySelc(_id)
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("submitBtn is clicked")
        })
    }
    CancelBtn = (_id) => {
        const cancelBtn = selector.querySelc(_id)
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("cancelBtn is clicked")
        })
    }
    SaveBtn = (_id) => {
        const cancelBtn = selector.querySelc(_id)
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Save is clicked")
        })

    }
}



// let Button = new ButtonsEvents()
// Button.SubmitBtn("#submitHome");
// Button.CancelBtn("#cancelHome");
// Button.SaveBtn("#saveTask");
// // la7ya.CancelBtn('.cancel-btn')