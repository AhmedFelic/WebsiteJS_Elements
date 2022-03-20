
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':   // umjesto vec ispisanog texta ispise samo " ", tj obrise sve
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1); //brise jedan broj na klik strelice
                }
                break;
            case '=':
                display.innerText = eval(display.innerText); //eval daje funkcionalnost matematickim funckijama i brojevima kao kalkulaturu
                break;
            default:
                display.innerText += e.target.innerText;  //ovaj def daje mogucnost da se brojevi ispisuju na display
        }
    });
});