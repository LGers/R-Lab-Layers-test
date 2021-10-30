import Controller from "./controller.js"
import View from "./view.js"
import Model from "./model.js"

const app = new Controller(new Model(), new View())


//----router
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    const routes = [
        // {path: "/", view: Main},
        {path: "/", view: () => {
                console.log("main")
                app.handleClickLink2('signUpPage')
            }},
        // {path: "/", view: app.view.currentPage = 'ddd'},
        // {path: "/sign-in", view: () => user.sayHi()},
        // {path: "/sign-in", view: () => app.onClickLink1('you at /sign-in')},
        {path: "/sign-in", view: () => app.handleClickLink2('signInPage')},
        {path: "/sign-up", view: () => app.handleClickLink2('signUpPage')},
        {path: "/restore-password", view: () => app.handleClickLink2("restorePasswordPage")},
        {path: "/restore-password-sent", view: () => app.handleClickLink2("restorePasswordSentPage")},
    ]

    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    // console.log(potentialMatches)
//
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
//     if (!match) match = {route: {path: "/page404", view: Page404}, isMatch: true}
    if (!match) match = {route: routes[0], isMatch: true}//404page must be

    // console.log(match)
    // console.log(match.route)
    console.log(match.route.view())
//
//     const bodyHtml = `
//             <h1> Main Page </h1>
//             <a class="" href="/sign-up" data-link >Sign Up222</a>
//         `
//     const view = new match.route.view('Title', bodyHtml, '../../templates/footer-tmpl.html')
//
//     // document.querySelector("#app").innerHTML = await view.getHtml()
}
window.addEventListener("popstate", router)
//
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e=>{
        if (e.target.matches("[data-link]")) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})
