// export default Selector();
export default class Selector {
    getElbyID = (_id) => document.getElementById(_id);
    querySelc = (_id) => document.querySelector(_id)
    queryClearSelcAll = (_id) => document.getElementsByClassName(_id).value = " ";
    
    readValue = (_id)=> document.getElementById(_id).value;
}

