// document.getElementById("double-btn").addEventListener("click", function(){
//     const doubleInput = document.getElementById("double-input");
//     const doubleInputText = doubleInput.value;
//     const doubleNumber = parseFloat(doubleInputText);

//     const double = doubleNumber * 2;

//     const doubleOutput = document.getElementById("double-output");
//     const doubleOutputText = doubleOutput.innerText;
//     doubleOutput.innerText = double;

// doubleInput.value = ""

// });


function multiplyNumber(clickButton, getInput, multipliedBy, output) {
    document.getElementById(clickButton).addEventListener("click", function () {
        const inputText = document.getElementById(getInput);
        const multiply = parseFloat(inputText.value) * multipliedBy;
        const outputText = document.getElementById(output);
        outputText.innerText = multiply;
    })
}
multiplyNumber("double-btn", "double-input", 2, "double-output");
multiplyNumber("triple-btn", "triple-input", 3, "triple-output");

