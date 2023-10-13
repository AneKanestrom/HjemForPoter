function addNavbar() {
    let navbar = document.getElementById("navbar");
    var navcode = '<nav id="desktop-nav">'+
    '        <div class="logo"> '+
    '            <a href="HomePage.html">'+
    '                <img src="../images/HjemForPoter-navbar-logo.png" alt="Logo">'+
    '            </a>'+
    '        </div>'+
    '        <div>'+
    '            <ul class="nav-links trasparent">'+
    '                <li> <a href="AboutUs.html">OM OSS</a></li>'+
    '                <li> <a href="Dogs.html">HUNDER</a></li>'+
    '                <li> <a href="Donate.html">DONER</a></li>'+
    '            </ul>'+
    '        </div>'+
    '    </nav>';
        
    navbar.innerHTML = navcode;
}

window.onload = addNavbar();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

