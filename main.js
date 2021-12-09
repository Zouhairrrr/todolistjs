class Selector {

    constructor() {
        this.selector = window.document;
    }
    getElbyTag(tagName) {
        return this.selector.getElementById(tagName);
    }


}

// let b = new Selector();
// let x = b.getElbyTag("ass");
// console.log(x)
// x
