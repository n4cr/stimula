import {Controller} from "stimulus"

export default class extends Controller {
    /*
        This controller allows you to remove the controller element from the DOM.
     */

    remove() {
        this.element.parentNode.removeChild(this.element)
    }
}
