import ButtonsEvents from "./Buttons.js";
import Stores from "./LocalStorege.js";
import Selector from "./Selector.js";
import ValidateForm from "./Validate.js";
import Project from "./Project.js";
import Display from "./Display.js";

let validate = new ValidateForm();
let storage = new Stores();
let selector = new Selector();
let buttons = new ButtonsEvents();
let display = new Display();
let project = new Project()

selector.querySelc("#submitHome").addEventListener("click", (e) => {
    e.preventDefault();
    
    const id = validate.GeneratrId() ;
    // console.log(id);
    selector.querySelc("#pr-id").value = id;//fun generate
    const name = selector.querySelc("#pr-name").value;
    const desc = selector.querySelc("#pr-desc").value;
    const date = selector.querySelc("#pr-date").value;
   if (!validate.validate("#pr-id") || !validate.validate("#pr-name")) return;
    storage.addProject(new Project(id, name, desc, date));
    let c = selector.querySelc("#dd");
    c.style.display = "block";
    validate.clearInputs("#pr-name")
    validate.clearInputs("#pr-desc")
    validate.clearInputs("#pr-date")
},false);


selector.querySelc("#saveTask").addEventListener("click", (e) => {
    e.preventDefault();
    const id = selector.querySelc("#pr-id").value;
    const id_ = selector.querySelc("#task-id").value;
    const taskName = selector.querySelc("#task-name").value;
  //  if (!validate.validate("#task-name")) return;
    let be = storage.getProject(id);
    console.log(be)
    be.Tasks.push(taskName);
    be.Tasks.push(id_);
    storage.addProject(be);
    validate.clearInputs("#task-name")
    console.log("success");

},false);

selector.querySelc("#cancel-home").addEventListener('click', (e) => {
    e.preventDefault()
    validate.clearInputs("#pr-id")
    validate.clearInputs("#pr-name")
    validate.clearInputs("#pr-desc")
    validate.clearInputs("#pr-date")
})
selector.querySelc("#emm").addEventListener('click', (e) => {
    e.preventDefault()
    validate.clearInputs("#task-name")
})

// let b = new Master()
// b.Whatever()
display.Display_a();
// window.location.reload()
