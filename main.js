/*
    diffrence beetwen Class & function : 
        ## functions are hoisted Class is not. Very important !
        ## functions can be overwriten unlike Class you can't 

*/
// definition des variable utilisés ( inputs buttons ...)
let HomeInputs = document.querySelector("input");
let submitHomeButton = document.getElementById("btn-home")

/*
    ## Exemples: 
let x = document.getElementById('btn');

*/



// definition of class used [ 'User , 'Tasks', 'Project']
class Tasks {

    constructor(nameTask, numberOfTasks) {
        this.nameTask = nameTask;
        this.numberOfTasks = numberOfTasks;

    }

    Task(el = this.nameTask) {
        return "bruh this is " + `${el}`;
    }


}
let m = new Tasks();
console.log(m.Task('Jhon'))





class User {
    constructor(name) {
        this.name = name
    }
    ShowName(el = this.name) {

        return "hello its me " + `${el}`;
    }
}


let d = new User();

console.log(d.ShowName('Jhon'))



class Project {
    // definition of the attribues 





}