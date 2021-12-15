import Stores from "./LocalStorege.js";

import Selector from "./Selector.js";
import ValidateForm from "./Validate.js";
let validate = new ValidateForm();
let storage = new Stores();

let selector = new Selector();

// console.log('object :>> ', selector.getElbyID(""));

export default class ButtonsEvents {
    // SubmitBtn = (_id) => {
    //     const submitBtn = selector.querySelc(_id);
    //     submitBtn.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         if(!validate.validate("#pr-id") || !validate.validate("#pr-name")) return

    //         let c = selector.querySelc("#dd")
    //         c.style.display = "block"

    //     });
    //     return;
    // };

    CancelBtn = (_id) => {
        const cancelBtn = selector.querySelc(_id);
        cancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            validate.validate("#cancel-home");
            validate.validate("#cancel-task");

        });
    };


    SaveBtn = (_id) => {
        const saveBtn = selector.querySelc(_id);
        saveBtn.addEventListener("click", (e) => {
            e.preventDefault();
            validate.validate("#task-name");
            
        });
    };
}

// let Button = new ButtonsEvents();
// Button.SubmitBtn("#submitHome");
// Button.CancelBtn("#cancelHome");
// Button.SaveBtn("#saveTask");
// // la7ya.CancelBtn('.cancel-btn')
