// export default Selector();

export default class Selector {
    constructor() {
        this.document = window.document;
    }
    getElbyID(_id) {
        return this.document.getElementById(_id);
    }
    
}

let variabls = new Selector();
let TaskInputCon = variabls.getElbyID('TaskInputCon');


console.log(TaskInputCon.value);

