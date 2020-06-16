
/*Shorten my name when window size is less than 750px*/

window.onload = resizeName;
window.onresize = resizeName;

function resizeName() {
    let x = window.innerWidth;
    if (x <= 750) {
        shortenName();
    } else {
        lengthenName();
    }
}

function shortenName() {    
    document.getElementById("my-name").innerHTML = "Helen";
}

function lengthenName() {
    document.getElementById("my-name").innerHTML = "Helen Ouyang";
}
