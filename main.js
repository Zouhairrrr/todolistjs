import ButtonsEvents from "./Buttons.js";
import Stores from "./LocalStorege.js";
import Selector from "./Selector.js";
let storage = new Stores()
let selector = new Selector()
let ButtonsEvent = new ButtonsEvents()

// console.log('object :>> ', selector.getElbyID(""));

function setIn() {
    return storage.addProject(
        {
            id: selector.getElbyID('pr-id'),
            name: selector.getElbyID('pr-name'),
            desc: selector.getElbyID('pr-id'),
            task: [
                {
                    id: 1,
                    name: "taskName",
                    isCheked: selector.getElbyID('box')
                }
            ]
        })
}
storage.deleteTask(1, 2);

// function del() {
//     storage.deleteTask(1, 2)
// }
// del();
setIn();
// storage.deleteProject(1)
// console.log(storage.getProject(1))
// console.log(storage.getProject(1));
// Abcd()
// let Button = new ButtonsEvents()
// la7ya.CancelBtn('.cancel-btn')
// ButtonsEvent.SubmitBtn("#submitHome");
// ButtonsEvent.CancelBtn("#cancelHome");
// ButtonsEvent.SaveBtn("#saveTask");