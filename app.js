let searchIcone = document.getElementById('iconeContainer')
let information = document.getElementById("information")
let container = document.querySelector(".container")
let loding = document.querySelector(".Loding")
let body = document.querySelector("body")
let inputSearch = document.querySelector(".inputSearch")

let CiteName = document.getElementById("CiteName")
let NumberDrgee = document.getElementById("NumberDrgee")
let Status = document.getElementById("status")
let Humidity = document.getElementById("Humidity")
let windSpeed = document.getElementById("windSpeed")

let cites = {
    "Dezful": { name: "Dezful", drgee: "36", status: "Sunny", Humidity: "26", windSpeed: "30", src: "url(\"img/Dezful.jpg\")" },
    "Ahvaz": { name: "Ahvaz", drgee: "40", status: "cloudy", Humidity: "28", windSpeed: "35", src: "url(\"img/Ahwaz.jpg\")" },
    "Tehran": { name: "Tehran", drgee: "25", status: "snowy", Humidity: "16", windSpeed: "34", src: "url(\"img/Tehran.jpg\")" },
    "Isfahan": { name: "Isfahan", drgee: "20", status: "rainy", Humidity: "10", windSpeed: "21", src: "url(\"img/Isfehan.jpg\")" },
}

searchIcone.addEventListener("click", () => {
    if (cites[inputSearch.value]) {

        container.style.boxShadow = ""
        loding.innerHTML = "Loding"
        loding.style.color = "white"
        loding.style.visibility = "visible"

        const InterVal = setInterval(() => {
            loding.innerHTML += " . "
        }, 600)

        setTimeout(() => {
            body.style.backgroundImage = cites[inputSearch.value].src
            information.style.display = "flex"
            CiteName.innerHTML = cites[inputSearch.value].name
            NumberDrgee.innerHTML = cites[inputSearch.value].drgee
            Status.innerHTML = cites[inputSearch.value].status
            Humidity.innerHTML = cites[inputSearch.value].Humidity
            windSpeed.innerHTML = cites[inputSearch.value].windSpeed
        }, 3000)

        setTimeout(() => {
            loding.style.visibility = "hidden"
            clearInterval(InterVal)
            container.classList.add("container-height")
        }, 2000)

    } else {
        if (body.style.backgroundImage != "url(\"img/main-background.webp\")") {
            setTimeout(() => {
                body.style.backgroundImage = "url(\"img/main-background.webp\")"
                information.style.display = "none"
                loding.style.visibility = "visible"
                loding.style.color = "red"
                loding.innerHTML = " This City not Exist ! ..."
                container.style.boxShadow = "0px 0px 15px 10px red "
            }, 1000)
        }

        information.style.display = "none"
        container.classList.remove("container-height")
    }
})