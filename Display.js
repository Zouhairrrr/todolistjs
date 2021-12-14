import Selector from "./Selector.js";
let selector = new Selector();




export default class Display {
   CheckBrowser () {
    if ("localStorage" in window && window["localStorage"] !== null) {
      // we can use localStorage object to store data
      return true;
    } else {
      return false;
    }
  };

   Display_a = () => {
    if (this.CheckBrowser()) {
    //   var key = "";
    //   var list = "<tr><th>Name</th><th>Value</th><th>Item</th></tr>\n";
     const id = selector.querySelc('#id_t')
     const name = selector.querySelc('#name_t')
     const task = selector.querySelc('#task_t')
     const Status = selector.querySelc('#status_t')

    //   var i = 0;

      if (localStorage.length == 0) {
        // list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td><td><i>empty</i></td></tr>\n";
            id.innerHTML = "empty"
            name.innerHTML = "empty"
            task.innerHTML = "empty"
            Status.innerHTML = "empty" 
        
      } 
    //   else {
    //     for (i = 0; i < localStorage.length; i++) {
    //       key = localStorage.key(i);
    //       let data = JSON.parse(localStorage.getItem(key));
    //       list += "<tr><td>" + key + "</td>\n<td>" +
    //         data[0] + "</td>" + data[1] + "</tr>\n";

    //     }
    //   }
    //   selector.querySelc('.list').innerHTML = list;
    } else {
      alert('Cannot store shopping list as your browser do not support local storage');
    }
  }

}


  /*
   * Checking the browser compatibility.
   */
