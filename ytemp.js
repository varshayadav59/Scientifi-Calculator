
console.log("sdfsdf")
document.addEventListener("DOMContentLoaded", function () {


    console.log("Document is ready");
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";
    function evaluateResult() {
        const result = eval(currentValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            if (value == "AC") {
                currentValue += value;
                display.value = currentValue;
            } else if (value == "=") {
                evaluateResult();
            } else {

                currentValue += value;
                display.value = currentValue;
            }
        })
    }
});
