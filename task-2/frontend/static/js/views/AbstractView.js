export default class {
    constructor(params,bodyHtml, pathTemplate) {
        this.params = params
        this.pathTemplate = pathTemplate

        console.log(this)
    }

    setTitle(title) {
        document.title = title
    }

    async getHtml() {
        return ""
    }
}