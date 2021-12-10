import ButtonsEvents from "./Buttons.js";
import Stores from "./LocalStorege.js";
import Selector from "./Selector.js";

let storage = new Stores()
let selector = new Selector()
let ButtonsEvent = new ButtonsEvents()
// console.log('object :>> ', selector.getElbyID(""));






function setIn() {
    return storage.addProject({
        id: 1,
        name: "projectName",
        task: [
            {
                id: 1,
                name: "taskName",
            },
            {
                id: 2,
                name: "taskName2",
            }
        ]
    })

}
//setIn();
function del() {
    storage.deleteTask(1, 2)
}
del();
// console.log(storage.getProject(1));
// Abcd()


// let Button = new ButtonsEvents()
ButtonsEvent.SubmitBtn("#submitHome");
ButtonsEvent.CancelBtn("#cancelHome");
ButtonsEvent.SaveBtn("#saveTask");
// la7ya.CancelBtn('.cancel-btn')