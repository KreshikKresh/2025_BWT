function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    console.log(a)

    if (a > 100) {
        result = "0"
        check = true;
    }
    else {
        if (a < 61) {
            result = a
            check = true;
        }
        else {
            result = a**4
            check = false;
        }
    }
    document.getElementById("result").value = result;
}

let result;
let check;

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify)