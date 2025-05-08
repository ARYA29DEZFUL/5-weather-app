let searchIcone = document.getElementById('iconeContainer')
let information = document.getElementById("information")
let container = document.querySelector(".container")
let loding = document.querySelector(".Loding")

// console.log(information)

searchIcone.addEventListener("click", () => {
    setTimeout(() => {
        loding.style.visibility = "hidden"

        information.style.display = "flex"
    }, 1000)
    container.classList.add("container-height")
})