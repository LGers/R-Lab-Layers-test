import SignIn from "./views/SignIn.js";
import SignUp from "./views/SignUp.js";
import RestorePassword from "./views/RestorePassword.js";
import RestorePasswordSent from "./views/RestorePasswordSent.js";
import Page404 from "./views/Page404.js";
import Main from "./views/Main.js";
// import getTemplate from "./utils/getTemplate.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    // debugger
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
    // if (!match) match = {route: routes[0], isMatch: true} //redirect to main page. 404 page must be
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
