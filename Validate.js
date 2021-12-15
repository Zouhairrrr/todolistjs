import Selector from "./Selector.js";
import Stores from "./LocalStorege.js";
let selector = new Selector();
let stores = new Stores();
export default class ValidateForm {

  validate = (id) => {
    let m = selector.querySelc(id);
    if (m.value === "") {
      let x = selector.querySelc("#hideModel_");
      x.style.display = "block";
      return false
    }
    return true;
  };
  
  clearInputs = (id) =>  selector.querySelc(id).value = "";
  

  GeneratrId = ()=>{
    let id = Date.now();
    return id;   
  }
  // show=(id)=>{
  //    selector.querySelc(id).style.display= "block"
  // }
}
