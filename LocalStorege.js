export default class Stores {
    addProject = (obj) => localStorage.setItem(obj.id, JSON.stringify(obj));
    getProject = (key) => JSON.parse(localStorage.getItem(key));

    deleteProject = (key) => localStorage.removeItem(key);
    // deleteTask = (projectId, TaskId) => {
    //     let project = JSON.parse(localStorage.getItem(projectId));
    //     let Task = project.task
    //     Task.forEach(element => {
    //         if (element.id == TaskId) {
    //             console.log(element.name)
    //             // element.remove();
    //         }
    //     });
    // }

}
