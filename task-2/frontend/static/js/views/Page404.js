import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("404Page. Task 2. Clinic App")
    }

    async getHtml() {
        return `
            <h1>404 error</h1>
            <h2>This page doesn't exist</h2>
            <a class="" href="/" data-link>Back to Main Page</a>
        `;
    }
}