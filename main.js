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
        desc: "lorem epsilm",
        task: [
            {
                id: 1,
                name: "taskName",
            },
            {
                id: 2,
                name: "taskName2",
            },
            {
                id: 3,
                name: "taskName3",
            }
        ]
    })
}
storage.deleteTask(1, 3);

// function del() {
//     storage.deleteTask(1, 2)
// }
// del();
// setIn();
// storage.deleteProject(1)
// console.log(storage.getProject(1))
// console.log(storage.getProject(1));
// Abcd()
// let Button = new ButtonsEvents()
// la7ya.CancelBtn('.cancel-btn')
ButtonsEvent.SubmitBtn("#submitHome");
ButtonsEvent.CancelBtn("#cancelHome");
ButtonsEvent.SaveBtn("#saveTask");