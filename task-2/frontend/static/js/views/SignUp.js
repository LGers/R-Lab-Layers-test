import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Sign Up. Task 2. Clinic App")
    }

    async getHtml() {
        const template = await loadHTML('../../templates/sign-up-tmpl.html', import.meta.url);
        return template
    }
}