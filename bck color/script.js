
function newFunction() {
    var a = document.getElementById('clr').value;
    document.getElementsByTagName('div')[0].style.background = a;
    if (a == "black") {
        document.getElementsByTagName('div')[0].style.color = "white";
    }
}
function newFunction1() {
    var b = document.getElementsByTagName('div')[0].style.background = "white";
    document.getElementsByTagName('div')[0].style.color = "black";
}
