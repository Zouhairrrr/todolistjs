import Stores from "./LocalStorege.js";
import Selector from "./Selector.js";
let stroage = new Stores()
let selector = new Selector()

// console.log('object :>> ', selector.getElbyID(""));

class Item {
    SubmitBtn = (_id) => {
        const submitBtn = selector.querySelc(_id)
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Submit btn its clicked")
        })
    }
    CancelBtn = (_id) => {
        const cancelBtn = selector.querySelc(_id)
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("cancelBtn is clicked")
        })

    }
}


let la7ya = new Item()
la7ya.SubmitBtn('#ass')
la7ya.SubmitBtn('#amm')
la7ya.SubmitBtn('#emm')
// la7ya.CancelBtn('.cancel-btn')