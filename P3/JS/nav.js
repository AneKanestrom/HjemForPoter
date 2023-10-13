function addNavbar() {
    let navbar = document.getElementById("navbar");
    var navcode = '<nav id="desktop-nav">'+
    '        <div class="logo"> '+
    '            <a href="HomePage.html">'+
    '                <img src="../images/Logo.png" alt="Logo">'+
    '            </a>'+
    '        </div>'+
    '        <div>'+
    '            <ul class="nav-links">'+
    '                <li> <a href="AboutUs.html">OM OSS</a></li>'+
    '                <li> <a href="Dogs.html">HUNDER</a></li>'+
    '                <li> <a href="Donate.html">DONER</a></li>'+
    '            </ul>'+
    '        </div>'+
    '    </nav>';
        
    navbar.innerHTML = navcode;
}

const navE1 = document.querySelector('.nav-links')
const hamburgerE1 = document.querySelector('.hamburger')
