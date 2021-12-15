export default class Project {

    constructor(id, title, desc, date) {
        this.id = id
        this.title = title
        this.desc = desc
        this.date = date
        this.Tasks = []
    }
}