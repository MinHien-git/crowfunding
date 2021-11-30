const nav = document.querySelector(".primary--navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

const x = document.getElementById("close")
const menu = document.getElementById("menu")

const option1 = document.getElementById("opt1")
const option2 = document.getElementById("opt2")
const option3 = document.getElementById("opt3")

let opt1 = document.getElementById("option1")
let opt2 = document.getElementById("option2")
let opt3 = document.getElementById("option3")

const close = document.getElementById("close-card")

const thankscard = document.getElementById("thankscard");

navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible")
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else {
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

const backProject = () => {
    // menu.style.display = "grid"
    menu.style.transform = "translate(-50%, 30%) scale(1,1)"
}

close.addEventListener("click", () => {
    thankscard.setAttribute("data-visible", false)
})

const thankcard = () => {
    const visiblity = thankscard.getAttribute("data-visible")


    if (visiblity === "false") {
        thankscard.setAttribute("data-visible", true)
        menu.style.transform = "translate(-50%, 30%) scale(0,0)"
    } else {
        thankscard.setAttribute("data-visible", false)
        menu.style.transform = "translate(-50%, 30%) scale(1,1)"
    }
}

x.addEventListener("click", () => {
    // menu.style.display = "none"
    menu.style.transform = "translate(-50%,30%) scale(0,0)"
})

option1.addEventListener("click", () => {
    opt1.style.outline = "2px solid hsl(var(--moderate-cyan))"
    opt2.style.outline = "none"
    opt3.style.outline = "none"

    document.getElementById("payment1").style.display = "none"
    document.getElementById("payment2").style.display = "none"

})

option2.addEventListener("click", () => {
    opt2.style.outline = "2px solid hsl(var(--moderate-cyan))"
    opt1.style.outline = "none"
    opt3.style.outline = "none"
    document.getElementById("payment1").style.display = window.screen.width > 550 ? "flex" : "grid"
    document.getElementById("payment2").style.display = "none"
})

option3.addEventListener("click", () => {
    opt3.style.outline = "2px solid hsl(var(--moderate-cyan))"
    opt2.style.outline = "none"
    opt1.style.outline = "none"

    document.getElementById("payment1").style.display = "none"
    document.getElementById("payment2").style.display = window.screen.width > 550 ? "flex" : "grid"

})