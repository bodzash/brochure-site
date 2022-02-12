let btn = document.querySelector(".nav-btn")
let menu = document.querySelector(".drop-down-wrapper")

btn.onclick = ()=> {
        menu.classList.toggle("nav-show")
        menu.style.opacity = "1"
}