window.addEventListener('resize', checkLandscape);

let navElements = document.getElementsByClassName('nav-element');

let opened = false;

function toggle() {
    opened = !opened;
    show(opened);
}

function show(visible) {
    let css;
    if (visible) {
        css = 'block';
    }
    else {
        css = 'none';
    }

    for (let i = 0; i<navElements.length; i++) {
        navElements[i].style.display = css;
    }
}

function checkLandscape() {
    let isLandscape = window.matchMedia('(orientation:landscape)').matches;
    console.log(isLandscape);
    console.log(1);
    if (isLandscape) {
        show(true);
    }
    else {
        show(false)
    }
}