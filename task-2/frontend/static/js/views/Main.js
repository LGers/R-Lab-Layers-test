import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {

    constructor(title, bodyHtml, pathTemplate, params) {
        super(title, bodyHtml);
        this.setTitle("Main Page. Task 2. Clinic App")
        this.setTitle(title)
        console.log(this)
    }

    async getHtml() {

        // const template = await loadHTML('../../templates/footer-tmpl.html', import.meta.url);
        const template = await loadHTML(this.pathTemplate, import.meta.url);
        // return bodyHtml
        // return params
        return `
            <h1> Main Page </h1>
            <a class="" href="/sign-up" data-link >Sign Up</a>
            ${template}
        `;
    }
}

class aaa {

}