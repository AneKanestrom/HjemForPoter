function addNavbar() {
    let navbar = document.getElementById("navbar");
    var navcode = '<nav class="desktop-nav">'+
    '        <div class="logo"> '+
    '            <a href="HomePage.html">'+
    '                <img src="../images/Logo.png" alt="Logo">'+
    '            </a>'+
    '        </div>'+
    '        <div >'+
    '            <ul class="nav-links">'+
    '                <li onclick="toggle()">'+
    '                    <div class="hamburger">'+
    '                        <div class="bar"></div>'+
    '                        <div class="bar"></div>'+
    '                        <div class="bar"></div>'+
    '                    </div>'+
    '                </li>'+
    '                <li class="nav-element"> <a href="AboutUs.html">OM OSS</a></li>'+
    '                <li class="nav-element"> <a href="Dogs.html">HUNDER</a></li>'+
    '                <li class="nav-element"> <a href="Donate.html">DONER</a></li>'+
    '            </ul>'+
    '        </div>'+
    '    </nav>'+
    '    <script src="../JS/hamburger.js"> </script>';
        
    navbar.innerHTML = navcode;
}

