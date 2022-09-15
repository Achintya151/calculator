const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
let str = "";
Array.from(btn).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == "=") {
            let result = eval(str);
            input.value = result;
        } else if (e.target.innerText == "C") {
            str = " ";
            input.value = str;
        } else if (e.target.innerText == "%") {
            let percentage = eval(str) / 100;
            input.value = percentage ? percentage : percentage.toFixed(2);
        } else {
            str += e.target.innerText;
            input.value = str;
        }
    })
})