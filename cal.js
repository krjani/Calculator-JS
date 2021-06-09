console.log('this is my calculator');
let display = document.getElementById('screen');
let screen = "";
let buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {

        buttonText = e.target.innerText;
        if (buttonText == "x") {
            buttonText = '*';
            screen += buttonText;
            display.value = screen;
        }
        else if (buttonText == "C") {
            screen = "";
            display.value = screen;


        }
        else if (buttonText == "=") {
            display.value = eval(screen);

        }

        else {
            screen += buttonText;
            display.value = screen;
        }
    })
}
