let display = document.getElementsByClassName(display);

let answer;
let clicked_1 = [];
let clicked_2 = [];
let invert_clicked = false

function clicked(number) {
    if(!invert_clicked)
        clicked_1.push(number)
    else
        clicked_2.push(number)
}

function operator(op) {
    clicked_1.push(op);
    invert_clicked = !invert_clicked;
}

function ac() {
    clicked_1 = [];
    clicked_2 = [];
    invert_clicked = false
}

function del() {
    if(!invert_clicked)
        clicked_1.pop();
    else
        clicked_2.pop();
}

function is_equal_to() {
    switch(clicked_1[clicked_1.length - 1]) {
        case 1:
        clicked_1.pop();
        answer = clicked_1 + clicked_2;
        case 2:
        clicked_1.pop();
        answer = clicked_1 - clicked_2;
        case 3:
        clicked_1.pop();
        answer = clicked_1 * clicked_2;
        case 4:
        clicked_1.pop();
        answer = clicked_1 / clicked_2;
    }

    ac();
}

function ans() {
    if(!invert_clicked)
        clicked_1 = answer;
    else
        clicked_2 = answer;
}