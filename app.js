var input = document.querySelector("#input")
var process = document.querySelector("#process")
var output = document.querySelector("#output")

process.addEventListener("click", onClick)

function onClick() {

    var inputNumber = input.value;
    var temp = 0

    if (inputNumber == 1) {
        output.innerHTML = "The input number is neither prime nor composite"
        temp = 3;
    }

    if (temp != 3) {
        for (i = 2; i < inputNumber; i++) {

            if (temp == 1) {
                break
            }

            if (inputNumber % i == 0) {
                output.innerHTML = "The input number is not a prime number"
                temp = 1;
            }
        }

        if (temp == 0) {
            output.innerHTML = "The input number is prime. You may share this on social media if you want"
        }
    }
}