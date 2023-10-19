

const paragraphText = `Education remainder in so cordially. His remainder and own dejection
daughters sportsmen. In on announcing if of comparison pianoforte
projection.`

function createHomepageCard(cardNumber){
    let cardHolder = document.getElementById("homepage--cardOrganizer")

    let cardInformationProcess = document.createElement("div")
    cardInformationProcess.className = "cardHolder--informationProcess"

    let cardCircleNumber = document.createElement("h4")
    cardCircleNumber.className = "cardSection--circle"
    cardCircleNumber.innerHTML = cardNumber

    let cardHeader = document.createElement("h5")
    cardHeader.innerHTML = "Steg: " + cardNumber
    cardHeader.className = "cardSection--cardHeader"

    let paragraph = document.createElement("p1")
    paragraph.innerHTML = paragraphText
    paragraph.className = "cardSection--cardText"

    cardInformationProcess.appendChild(cardCircleNumber)
    cardInformationProcess.appendChild(cardHeader)
    cardInformationProcess.appendChild(paragraph)

    cardHolder.appendChild(cardInformationProcess)
}

for (let i=1;i < 4; i++){
    createHomepageCard(i)
}
window.onload

/*

        <div class="cardHolder--dog">
          <h4 class="cardSection--circle">1</h4>
          <h5 class="cardSection--cardHeader">Steg 1:</h5>
          <p1 class="cardSection--cardText">
            Education remainder in so cordially. His remainder and own dejection
            daughters sportsmen. In on announcing if of comparison pianoforte
            projection.
          </p1>
        </div>

        <div class="cardHolder--dog">
          <h4 class="cardSection--circle">2</h4>
          <h5 class="cardSection--cardHeader">Steg 2:</h5>
          <p1 class="cardSection--cardText">
            Education remainder in so cordially. His remainder and own dejection
            daughters sportsmen. In on announcing if of comparison pianoforte
            projection.
          </p1>
        </div>

        <div class="cardHolder--dog">
          <h4 class="cardSection--circle">3</h4>
          <h5 class="cardSection--cardHeader">Steg 3:</h5>
          <p1 class="cardSection--cardText">
            Education remainder in so cordially. His remainder and own dejection
            daughters sportsmen. In on announcing if of comparison pianoforte
            projection.
          </p1>
        </div>
*/