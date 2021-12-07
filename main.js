let btnCreate = document.querySelector('#create-btn');
let tagBtn = document.querySelector('#tag-btn');
// let show = document.querySelector('#show').style.display = "none"
let planBtn = document.querySelector('#plans-btn')
let parentDiv = document.querySelector('#parent')
let bsg = document.createElement('input')
let submitBtn = document.createElement('button')
let span = document.createElement('span')
let firstProject = ""
let lastProject = ""
// let firstProject =""


class Project {
    constructor(projectName, ...tasks) {
        this.projectName = projectName;
        this.tasks = tasks;
    }
    static getUserName() {
        btnCreate.addEventListener('click', (e) => {
            e.preventDefault();
            bsg.placeholder = "Project Name";
            bsg.classList.add('form-control', 'form-control-alternative')
            submitBtn.classList.add('btn', 'btn-outline-primary', 'mt-3',)
            submitBtn.innerText = "Submit";
            parentDiv.appendChild(bsg);
            parentDiv.appendChild(submitBtn)
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (bsg.value === "") {
                    span.classList.add('text-danger', 'input-group')
                    span.innerHTML = "Please Fill the Name";
                    parentDiv.appendChild(span)
                } else {
                    // submitBtn.dataToggle= ""
                    //remove special caract

                    const removeSpecials = (str) => {
                        var lower = str.toLowerCase();
                        var upper = str.toUpperCase();

                        var res = "";
                        for (var i = 0; i < lower.length; ++i) {
                            if (lower[i] != upper[i] || lower[i].trim() === '')
                                res += str[i];
                        }
                        return res;
                    }

                    projectName = removeSpecials(bsg.value)
                    console.log(projectName)
                    // localStorage.setItem(firstProject, lastProject)



                }
            })
        })
    }
}
Project.getUserName()



// testing notifs for discords
// definition of class used [ 'User , 'Tasks', 'Project']
class Tasks extends Project {

    constructor(nameTask, numberOfTasks, isDone, projectName, ...tasks) {

        // super() methode is calling the functions and params used in the parent Class Project.

        super( projectName, ...tasks)
        this.nameTask = nameTask;
        this.numberOfTasks = numberOfTasks;
        this.isDone = isDone = false;

    }

    Task(el = this.nameTask) {
        return `bruh this is ${el}`;
    }


}
// let m = new Tasks();
// console.log(m.Task('Jhon'))



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

