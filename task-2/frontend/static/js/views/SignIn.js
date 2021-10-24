import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Sign In. Task 2. Clinic App")
    }

    async getHtml() {
        const template = await loadHTML('../../templates/sign-in-tmpl.html', import.meta.url);
        return template
    }
}