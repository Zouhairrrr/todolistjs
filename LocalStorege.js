export default class Stores {
    addProject = (obj) => localStorage.setItem(obj.id, JSON.stringify(obj));
    getProject = (key) => JSON.parse(localStorage.getItem(key));
    deleteAllProjects = (id) => localStorage.clear(id);
    deleteProject = (id) => localStorage.removeItem(id);
}
