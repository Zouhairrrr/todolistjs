import ButtonsEvents from "./Buttons.js";
import Stores from "./LocalStorege.js";
import Selector from "./Selector.js";
import ValidateForm from "./Validate.js";
import Project from "./Project.js";
let validate = new ValidateForm()
let storage = new Stores()
let selector = new Selector()
let buttons = new ButtonsEvents()



selector.querySelc('#submitHome').addEventListener("click", (e) => {
    e.preventDefault();
    const id = selector.querySelc("#pr-id").value
    const name = selector.querySelc("#pr-name").value
    const desc = selector.querySelc("#pr-desc").value
    const date = selector.querySelc("#pr-date").value
    if (!validate.validate("#pr-id") || !validate.validate("#pr-name")) return
    storage.addProject(new Project(id, name, desc, date))
    let c = selector.querySelc("#dd")
    c.style.display = "block"
    selector.querySelc('#showName').innerHTML = name
});
selector.querySelc('#saveTask').addEventListener("click", (e) => {
    e.preventDefault();
    const id = selector.querySelc("#pr-id").value
    const id_ = selector.querySelc("#task-id").value
    const taskName = selector.querySelc("#task-name").value
    if (!validate.validate("#task-name")) return
    let be = storage.getProject(id)
    be.Tasks.push(taskName);
    be.Tasks.push(id_);
    storage.addProject(be)
    console.log("success")
    // storage.addProject( Project.)
    // console.log(storage.getProject(id))
})

// let b = new Master()
// b.Whatever()
