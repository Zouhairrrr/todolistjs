/*
    diffrence beetwen Class & function : 
        ## functions are hoisted Class is not. Very important !
        ## functions can be overwriten unlike Class you can't 

*/

/*
    ==> Class Tasks extend Project
 
id : inputs / buttons
username :  input 
gobtn :btn 
create-project-btn :  btn
*/

/*
    ## Exemples: 
let x = document.getElementById('btn');

*/
class Project {
    constructor(username, projectName, ...tasks) {
        this.username = username;
        this.projectName = projectName;
        this.tasks = tasks;
    }
    static getUserName() {
        let el = document.querySelector('#username');

        let btn = document.querySelector('#gobtn');

        btn.addEventListener('click', (e) => {
            if (el.value === "") {
                let msg = document.querySelector('#spans')
                msg.classList.add('text-danger')
                msg.innerText = `Please Fill the blanck `;
                
            } else {
                console.log(`its me ${el.value}`)
               
            }

        })


    }
}
Project.getUserName()



// testing notifs for discords
// definition of class used [ 'User , 'Tasks', 'Project']
class Tasks extends Project {

    constructor(nameTask, numberOfTasks, isDone, username, projectName, ...tasks) {

        // super() methode is calling the functions and params used in the parent Class Project.

        super(username, projectName, ...tasks)
        this.nameTask = nameTask;
        this.numberOfTasks = numberOfTasks;
        this.isDone = isDone;

    }

    Task(el = this.nameTask) {
        return `bruh this is ${el}`;
    }


}
// let m = new Tasks();
// console.log(m.Task('Jhon'))





// class User {
//     constructor(name) {
//         this.name = name
//     }
//     ShowName(el = this.name) {

//         return `hello its me ${el}`;
//     }
// }


// let d = new User();

// console.log(d.ShowName('Jhon'))



