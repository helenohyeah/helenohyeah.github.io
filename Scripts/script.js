
/*Shorten my name when window size is less than 750px*/

window.onload = resizeName;
window.onresize = resizeName;

function resizeName() {
    let x = window.innerWidth;
    if (x <= 750) {
        document.getElementById("my-name").innerHTML = "Helen";
    } else {
        document.getElementById("my-name").innerHTML = "Helen Ouyang";
    }
}
