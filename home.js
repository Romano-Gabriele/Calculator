let display = document.getElementById('display');

function clicked(number) {
    display.value += number;
}

function operator(op) {
    display.value += op;
}

function is_equal_to() {
    display.value = eval(display.value)
}

function ac() {
    display.value = '';
}

function del() {
    display.value = display.value.slice(0, -1);
}

function x10() {
    display.value += "*10**";
}

function sr() {
    display.value += "Math.sqrt(";
}

function cr() {
    display.value += "Math.cbrt(";
}

function power2() {
    display.value += "**2";
}

function powerx() {
    display.value += "**";
}

function lp() {
    display.value += "(";
}

function rp() {
    display.value += ")";
}

function sin() {
    display.value += "Math.sin(";
}

function cos() {
    display.value += "Math.cos(";
}

function tan() {
    display.value += "Math.tan(";
}

function asin() {
    display.value += "Math.asin(";
}

function acos() {
    display.value += "Math.acos(";
}

function atan() {
    display.value += "Math.atan(";
}