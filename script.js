let btn = document.querySelector(".nav-btn")
let menu = document.querySelector(".drop-down-wrapper")

let shit = document.querySelectorAll(".drop-down-item")

shit.forEach(item=> {
        item.addEventListener("click",()=>{
                menu.setAttribute("data-show","false")
        })
})

btn.addEventListener("click",()=> {
        const vis = menu.getAttribute("data-show")
        vis === "true" ? menu.setAttribute("data-show","false") : menu.setAttribute("data-show","true")
})