
/*Creates the footer that is used on all the pages*/
function addFooter() {
  let divElement = document.getElementsByClassName("grid");
  var footerCode = `<img src="../images/Logo.png" class="grid-item-1" />
    <p class="grid-item-2">Kontakt oss</p>
    <p class="grid-item-3">Følg oss</p>
    <img src="../images/icon_phone.png" class="grid-item-4" />
    <p1 class="grid-item-5">46574286</p1>
    <p1 class="grid-item-6">Postegata 47</p1>
    <p1 class="grid-item-7">7035 Trondheim</p1>
    <p1 class="grid-item-8">✉ post@hjemforpoter.no</p1>
    <img src="../images/icon_insta.png" class="grid-item-9" />
    <img src="../images/icon_facebook.png" class="grid-item-10" />
    <img src="../images/icon_linkedin.png" class="grid-item-11" />`;
  divElement[0].innerHTML = footerCode;
}

window.onload = addFooter();
