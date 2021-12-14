import Stores from "./LocalStorege.js";
import Selector from "./Selector.js";
const selector = new Selector();
const storage = new Stores()


export default class Display {
  CheckBrowser() {
    if ("localStorage" in window && window["localStorage"] !== null) {
      // we can use localStorage object to store data
      return true;
    } else {
      return false;
    }
  };
  Display_a = () => {
    if (this.CheckBrowser()) {
      const id = selector.querySelc('#id_t')
      const name = selector.querySelc('#name_t')
      const task = selector.querySelc('#task_t')
      const Status = selector.querySelc('#status_t')
      const head = (data) => `
      <tr>
          <td scope="row">
              <div class="media align-items-center">
              ${data.id}
              </div>
          </td>
          <td  class="project_name">
          ${data.title}
          </td>
          <td>
              <div class="status">
              ${data.Tasks}
              </div>
          </td>
          <td>
              <div class="media align-items-center">
              ${data.date}
              </div>
          </td>
      </tr>`
      const HeadEmpt = () => `
      <tr>
          <td scope="row">
              <div class="media align-items-center">
             Empty
              </div>
          </td>
          <td  class="project_name">
         Empty
          </td>
          <td>
              <div class="status">
              Empty
              </div>
          </td>
          <td>
              <div class="media align-items-center">
              Empty
              </div>
          </td>
      </tr>`

      let key = ""

      let i = 0;

      if (localStorage.length == 0) {
        selector.querySelc(".list").innerHTML = "";
        selector.querySelc(".list").innerHTML += HeadEmpt();

      }
      else {
        selector.querySelc("#tableau").innerHTML = ''
        for (i = 0; i < localStorage.length; i++) {
          key = localStorage.key(i);
          let data = storage.getProject(key)
          // console.log(data)
          selector.querySelc(".list").innerHTML += head(data);
        }
      }
    } else {
      alert('Cannot store shopping list as your browser do not support local storage');
    }
  }
}
/*
 * Checking the browser compatibility.
 */
