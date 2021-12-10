export default class Stores {
    addProject = (obj) => localStorage.setItem(obj.id, JSON.stringify(obj));
    getProject = (key) => JSON.parse(localStorage.getItem(key));
    // gettProjects =
    deleteProject = (key) => localStorage.removeItem(key);

<<<<<<< HEAD
    deleteTask = (projectId, TaskId) => {
=======

    deleteTask=(projectId,TaskId)=>{
       
>>>>>>> eb6253bae0d5e8e8779b2afca1c8f61a6cd5faff
        let project = JSON.parse(localStorage.getItem(projectId));
        let Task = project.task
        Task.forEach(element => {
            if (element.id == TaskId) {
                console.log(element.name)
                // element.remove();
            }
        });
    }

}
