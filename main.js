document.querySelector('#show').style.display = "none"
let btnCreate = document.querySelector('#create-btn');
let tagBtn = document.querySelector('#tag-btn');
let planBtn = document.querySelector('#plans-btn')
let parentDiv = document.querySelector('#parent')
let PName = document.createElement('input')
let PTag = document.createElement('input')
// let abs = document.querySelector('submit-btn').addEventListener('click', (e) => { })
let submitBtn = document.createElement('button')
let span = document.createElement('span')
let firstProject = ""
let lastProject = ""


class Project {
    constructor(projectName, ...tasks) {
        this.projectName = projectName;
        this.tasks = tasks;
    }
    static GetProjectDetails() {
        btnCreate.addEventListener('click', (e) => {
            e.preventDefault();
            PName.placeholder = "Project Name"; //this is for the Input Name-Project
            PName.classList.add('form-control', 'form-control-alternative') //this is for the Input Name-Project
            PTag.placeholder = "TagName"
            PTag.classList.add('form-control', 'form-control-alternative', 'mt-3')
            submitBtn.classList.add('btn', 'btn-outline-primary', 'mt-3',)
            submitBtn.innerText = "Submit";
            parentDiv.appendChild(PName);
            parentDiv.appendChild(PTag);
            parentDiv.appendChild(submitBtn)
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (PName.value === "" || PTag.value === "") {
                    document.querySelector('#hideModel').style.display = 'block'
                    return;
                } else {
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
                    this.projectName = removeSpecials(PName.value)
                    document.querySelector('#show').style.display = 'block'
                    document.querySelector('#projectNamee').innerHTML = PName.value

                }
            })
        })
    }
}
Project.GetProjectDetails()



// testing notifs for discords
// definition of class used [ 'User , 'Tasks', 'Project']
class Tasks extends Project {

    constructor(nameTask, numberOfTasks, isDone, projectName, ...tasks) {

        // super() methode is calling the functions and params used in the parent Class Project.

        super(projectName, ...tasks)
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

