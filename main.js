
console.log("connected")

let display = document.querySelector(".blank")
let numbers = document.querySelectorAll(".number")
let equals = document.getElementById("equals")
let clear = document.querySelector(".clear")

for (let number of numbers) {
    number.addEventListener("click", function (event) {
        console.log(event.target.textContent)

        if (number === equals) {
            blank.innerText = eval(blank.innerText)
        } else {
            blank.innerText += event.target.textContent
        }
        // let window = document.createElement("p")
        // window.innerHTML = `${event.target.textContent}`
        // blank.appendChild(window);
    });
}

// for (let ops of operator) {
//     ops.addEventListener("click", function (event) {
//         console.log(event.target.textContent)

//         if (event.target.id === "euqals") {
//             window.innerText = eval(window.innerText)
//         }

//         let window = document.createElement("p")
//         window.innerHTML = `${event.target.textContent}`
//         blank.appendChild(window);
//     });
// }


clear.addEventListener("click", function (event) {
    blank.innerHTML = " "
})


