import {signInPage} from "../templates/sign-in.js";
import {signUpPage} from "../templates/sign-up.js";
import {restorePasswordPage} from "../templates/restore-password.js";
import {restorePasswordSentPage} from "../templates/restore-password-sent.js";

export default class Controller {

    constructor(model, view) {
        this.model = model
        this.view = view

        this.onClickLink(this.model.currentPage)
        // this.view.bindClickLink(this.handleClickLink)
        this.view.bindClickLink2(this.handleClickLink2)
        this.model.bindClickLink(this.onClickLink)
        // this.view.alertMessage(this.onClickLink1)
    }

    onClickLink = (content) =>{
        this.view.displayContent(content)
    }

    handleClickLink = (page) => {
        // debugger
        this.model.reloadPage(page)
    }

    handleClickLink2 = (pageName) => {
        // debugger

            switch (pageName) {
                case 'signInPage': {
                    this.model.reloadPage(signInPage)
                    break
                }
                case 'signUpPage': {
                    this.model.reloadPage(signUpPage)
                    break
                }
                case 'restorePasswordPage': {
                    this.model.reloadPage(restorePasswordPage)
                    break
                }
                case 'restorePasswordSentPage': this.model.reloadPage(restorePasswordSentPage);
            }
    }

    /*onClickLink1(content) {
        this.view.alertMessage(content)
    }*/
}//end class Controller
