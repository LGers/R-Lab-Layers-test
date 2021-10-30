// import loadHTML from "utils/getTemplate.js";
import {loadHTML} from "./mvc-2.js"
// function loadHTML(htmlRelativeUrl, baseUrl) {
//     const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
//     return fetch(htmlUrl).then(response => response.text());
// }
const signInPage = `
<div class="wrapper">
    <header>
        <h1>Tasks 2</h1>
    </header>
    <main class="container">
        <aside class="sign-bar">
            <div class="sign-bar__container">
                <div class="sign-bar__form-container">
                    <form action="/sign-up" class="sign-bar__form">
                        <label class="sign-form__name">
                            <a class="sign-bar_back-link"
                               href="/sign-up" data-link>< </a></span>Sign In
                        </label>

                        <input class="sign-bar__input sign-form__input_email-icon sign-form__input_icon-position"
                               type="email" placeholder="Email">

                        <div class="signForm_password password-block">
                            <input class="sign-bar__input sign-form__input_password-icon sign-form__input_icon-position"
                                   type="password"
                                   placeholder="Password">
                            <button class="password-block__eye-button"></button>
                        </div>

                        <button class="sign-button sign-button_style">Sign In</button>

                        <a class="sign-bar__have-account_link" href="/restore-password" data-link>Forgot Password?</a>

                    </form>
                </div>
                <div class="sign-bar__have-account">Don't have an account?
                    <a class="sign-bar__have-account_link" href="/sign-up" data-link>Sign Up</a>
                </div>
            </div>

        </aside>
        <div>
            container
        </div>
    </main>
</div>
`
const signUpPage = `
<div class="wrapper">
    <header>
        <h1>Tasks 2</h1>
    </header>
    <main class="container">
        <aside class="sign-bar">
            <div class="sign-bar__container">
                <div class="sign-bar__form-container">
                    <form action="#" class="sign-bar__form">
                        <label class="sign-form__name">Sign Up</label>

                        <input class="sign-bar__input sign-form__input_name-icon sign-form__input_icon-position"
                               type="input" placeholder="First Name">

                        <input class="sign-bar__input sign-form__input_name-icon sign-form__input_icon-position"
                               type="input" placeholder="Last Name">

                        <input class="sign-bar__input sign-form__input_email-icon sign-form__input_icon-position"
                               type="email" placeholder="Email">

                        <div class="signForm_password password-block">
                            <input class="sign-bar__input sign-form__input_password-icon sign-form__input_icon-position"
                                   type="password"
                                   placeholder="Password">
                            <button class="password-block__eye-button"></button>
                        </div>


                        <div class="password-block">
                            <input class="sign-bar__input sign-form__input_confirm-password-icon sign-form__input_icon-position"
                                   type="password"
                                   placeholder="Confirm Password">
                            <button class="password-block__eye-button"></button>
                        </div>

                        <button class="sign-button sign-button_style">Sign Up</button>

                    </form>
                </div>
                <div class="sign-bar__have-account">Already have an account?
                    <a class="sign-bar__have-account_link" href="/sign-in" data-link>Sign in</a>
                </div>
            </div>

        </aside>
        <div class="container">
            You see main container
        </div>
    </main>
</div>
`
const restorePasswordPage = `
<div class="wrapper">
    <header>
        <h1>Tasks 2. Restore Password</h1>
    </header>
    <main class="container">
        <aside class="sign-bar">
            <div class="sign-bar__container">
                <div class="sign-bar__form-container">
                    <form action="/restore-password-sent" class="sign-bar__form">
                        <label class="sign-form__name"><span>
                            <a class="sign-bar_back-link"
                               href="/sign-in" data-link>< </a></span>Restore Password
                        </label>
                        <p>Please use your email address, and we'll send you the link to reset your password</p>

                        <input class="sign-bar__input sign-form__input_email-icon sign-form__input_icon-position"
                               type="email" placeholder="Email">
                        <a href="/restore-password-sent" data-link>
                            <button class="sign-button sign-button_style" >Send Reset Link</button>
                        </a>
                    </form>
                </div>
            </div>
        </aside>
        <div>
            container
        </div>
    </main>
</div>
`
const restorePasswordSentPage = `

<div class="wrapper">
    <header>
        <h1>Tasks 2. Restore Password Sent</h1>
    </header>
    <main class="container">
        <aside class="sign-bar">
            <div class="sign-bar__container">
                <div class="sign-bar__form-container">
                    <form action="#" class="sign-bar__form">
                        <!--                        <div><a class="sign-bar__back_link" href="task-1_sign-in.html">< Back</a></div>-->
                        <label class="sign-form__name"><span>
                            <a class="sign-bar_back-link"
                               href="/sign-up" data-link>< </a></span>Restore Password
                        </label>
                        <p>An email has been sent to example@exam.com. Check your inbox, and click the reset link provided.</p>
                    </form>
                </div>

            </div>

        </aside>
        <div>
            container
        </div>
    </main>
</div>`


class Model {
    constructor() {
        this.currentPage=signUpPage
    }

    reloadPage(currentPage) {
        this.currentPage = currentPage
        this.onClickLink(this.currentPage)
    }

    bindClickLink(callback) {
        this.onClickLink = callback
    }


}//end class Model

class View {
    constructor() {
        this.app = this.getElement('#root')

        this.title = this.createElement('h1')
        this.title.textContent = 'HW1-SPA'
        this.currentPage = this.createElement('div')

        this.app.append(this.title, this.currentPage)
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        return document.querySelector(selector)
    }

    displayContent(content) {

        // Delete all nodes
        while (this.currentPage.firstChild) {
            this.currentPage.removeChild(this.currentPage.firstChild)
        }

        if (!content) {
            const p = this.createElement('p')
            p.textContent = 'Nothing to show'
            this.currentPage.append(p)

        } else {
            const div = this.createElement('div')
            div.innerHTML = content
            this.currentPage.append(div)
        }
    }

    bindClickLink(handler) {
        this.currentPage.addEventListener('click', event => {
            switch (event.target.textContent) {
                case 'Sign in': {
                    handler(signInPage)
                    break
                }
                case 'Sign Up': {
                    handler(signUpPage)
                    break
                }
                case 'Forgot Password?': {
                    handler(restorePasswordPage)
                    break
                }
                case 'Send Reset Link': handler(restorePasswordSentPage);
            }

        })
    }

}//end class View


class Controller {

    constructor(model, view) {
        this.model = model
        this.view = view

        this.onClickLink(this.model.currentPage)
        this.view.bindClickLink(this.handleClickLink)
        this.model.bindClickLink(this.onClickLink)
    }

    onClickLink = (content) =>{
        this.view.displayContent(content)
    }

    handleClickLink = (page) => {
        this.model.reloadPage(page)
    }
}//end class Controller

const app = new Controller(new Model(), new View())




//----router

const router = async () => {

    const routes = [
        {path: "/", view: Main},
        // {path: "/", view: getTemplate("title", "")},
        {path: "/sign-in", view: SignIn},
        {path: "/sign-up", view: SignUp},
        {path: "/restore-password", view: RestorePassword},
        {path: "/restore-password-sent", view: RestorePasswordSent},
        {path: "/page404", view: Page404},
    ]

    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    if (!match) match = {route: {path: "/page404", view: Page404}, isMatch: true}

    const bodyHtml = `
            <h1> Main Page </h1>
            <a class="" href="/sign-up" data-link >Sign Up222</a>
        `
    const view = new match.route.view('Title', bodyHtml, '../../templates/footer-tmpl.html')

    document.querySelector("#app").innerHTML = await view.getHtml()
}
window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e=>{
        if (e.target.matches("[data-link]")) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})
