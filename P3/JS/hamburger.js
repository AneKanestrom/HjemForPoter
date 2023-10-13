
let navElements = document.getElementsByClassName('nav-element');

let opened = false;

function toggle() {
    let css;
    opened = !opened;

    if (opened) {
        css = 'block';
    }
    else {
        css = 'none';
    }

    for (let i = 0; i<navElements.length; i++) {
        navElements[i].style.display = css;
    }
}