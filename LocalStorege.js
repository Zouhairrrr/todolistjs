export default class Stores {
    static addProject  = (obj) => localStorage.setItem(obj.id, JSON.stringify(obj));
    static getProject = (key) => JSON.parse(localStorage.getItem(key));
    // gettProjects =
    static deleteProject =(key) => localStorage.removeItem(key);

    deleteTask=(projectId,TaskId)=>{
       
        let project = JSON.parse(localStorage.getItem(projectId));
        let Task = project.Task
        array.forEach(element => {
            if(element.id == TaskId){
                console.log(element.name)
                element.remove();
            }
            
        });
        localStorage.setItem(projectId, JSON.stringify(project));
    }
    
}
