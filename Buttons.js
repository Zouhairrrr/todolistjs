import Stores from "./LocalStorege.js";

import Selector from "./Selector.js";
import ValidateForm from "./Validate.js";
let validate = new ValidateForm();
let storage = new Stores();

let selector = new Selector();

// console.log('object :>> ', selector.getElbyID(""));

export default class ButtonsEvents {
    SubmitBtn = (_id) => {
        const submitBtn = selector.querySelc(_id);
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let val = validate.validate("#pr-id");
            let val1 = validate.validate("#pr-name");
            // val.value = ""
            // val1.value = ""
        });
    };

    CancelBtn = (_id) => {
        const cancelBtn = selector.querySelc(_id);
        cancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let j = validate.validate("#cancel-home");
            let m = validate.validate("#cancel-task");
            // j.value = "";
            // m.value = "";
        });
    };


    SaveBtn = (_id) => {
        const saveBtn = selector.querySelc(_id);
        saveBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let j = validate.validate("#task-name");
        });
    };
}

// let Button = new ButtonsEvents();
// Button.SubmitBtn("#submitHome");
// Button.CancelBtn("#cancelHome");
// Button.SaveBtn("#saveTask");
// // la7ya.CancelBtn('.cancel-btn')
