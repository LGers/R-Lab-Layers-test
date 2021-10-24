import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Restore Password Sent. Task 2. Clinic App")
    }

    async getHtml() {
        const template = await loadHTML('../../templates/restore-password-sent-tmpl.html', import.meta.url);
        return template
    }
}