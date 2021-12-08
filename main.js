// document.querySelector('#show').style.display = "none"
// let btnCreate = document.querySelector('#create-btn');
// let tagBtn = document.querySelector('#tagBtn');
// let planBtn = document.querySelector('#plans-btn')
// let DangerDiv = document.querySelector('#parentDanger')
// let tagParent = document.querySelector('#tagNameParent')
// let PName = document.createElement('input')
// let PTag = document.createElement('input')
// // let abs = document.querySelector('submit-btn').addEventListener('click', (e) => { })
// let submitBtn = document.createElement('button')
// let span = document.createElement('span')
// let firstProject = ""
// let lastProject = ""
// let allProjects = [];
console.log('ee')

// class Project {
//     constructor(projectName, ...tasks) {
//         this.projectName = projectName;
//         this.tasks = tasks;
//     }
//     static GetProjectDetails() {
//         btnCreate.addEventListener('click', (e) => {
//             e.preventDefault();
//             PName.placeholder = "Project Name"; //this is for the Input Name-Project
//             PName.classList.add('form-control', 'form-control-alternative') //this is for the Input Name-Project
//             PTag.placeholder = "TagName";
//             PTag.classList.add('form-control', 'form-control-alternative', 'mt-3')
//             submitBtn.classList.add('btn', 'btn-outline-primary', 'mt-3',)
//             submitBtn.innerText = "Submit";
//             DangerDiv.appendChild(PName);
//             DangerDiv.appendChild(PTag);
//             DangerDiv.appendChild(submitBtn)
//             submitBtn.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 if (PName.value === "" || PTag.value === "") {
//                     let x = document.querySelector('#hideModel_').style.display = 'block';
//                     PName.value = "";
//                     PTag.value = "";
//                 } else {
//                     const removeSpecials = (str) => {
//                         var lower = str.toLowerCase();
//                         var upper = str.toUpperCase();
//                         var res = "";
//                         for (var i = 0; i < lower.length; ++i) {
//                             if (lower[i] != upper[i] || lower[i].trim() === '')
//                                 res += str[i];
//                         }
//                         return res;
//                     }
//                     this.projectName = removeSpecials(PName.value)
//                     // console.log(this.projectName)
//                     allProjects = localStorage.setItem(this.id, this.projectName)
//                     document.querySelector('#show').style.display = 'block'
//                     document.querySelector('#projectNamee').innerHTML = PName.value.toUpperCase()
//                     PName.value = "";
//                     PTag.value = "";
//                 }
//             })
//         })
//     }
//     static GetProjectTagNme() {
//         tagBtn.addEventListener('click', (e) => {
//             e.preventDefault()
//             if (this.projectName) {
//                 tagParent.style.display = 'block'
//                 tagParent.innerHTML = this.projectName
//             }
//         })
//     }
// }
// Project.GetProjectDetails()
// Project.GetProjectTagNme()

// testing notifs for discords
// definition of class used [ 'User , 'Tasks', 'Project']
// class Tasks extends Project {
//     constructor(nameTask, numberOfTasks, isDone, projectName, ...tasks) {
//         // super() methode is calling the functions and params used in the parent Class Project.
//         super(projectName, ...tasks)
//         this.nameTask = nameTask;
//         this.numberOfTasks = numberOfTasks;
//         this.isDone = isDone = false;

//     }

//     Task(el = this.nameTask) {
//         return `bruh this is ${el}`;
//     }


// }
// // let m = new Tasks();
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

