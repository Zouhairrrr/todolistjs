import Selector from "./Selector.js";
import Stores from "./LocalStorege.js";
let selector = new Selector();
let stores = new Stores();
export default class ValidateForm {

  validate = (id) => {
    let m = selector.querySelc(id);
    if (m.value === "") {
      let x = selector.getElbyID("Hide");
      x.style.display = "block";
    }
  };
}
