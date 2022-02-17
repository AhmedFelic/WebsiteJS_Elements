
function funkcija1() {

    let inputVal = document.getElementById("wishh").value;
    if (inputVal.length > 11150) {
        alert("Input is too big, try again!");
    } else {
        document.getElementById("t1").innerHTML += inputVal;
    }

}
function f2() {

    document.getElementsByTagName("p")[1].childNodes[0].nodeValue = "";
}
var flag = true;
function f3() {
    let el = document.getElementById("t1");
    el.style.textDecoration = flag ? "line-through" : "";
    flag = !flag;
}
