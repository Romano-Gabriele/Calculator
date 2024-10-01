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