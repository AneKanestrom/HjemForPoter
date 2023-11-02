//henter knappen med id adopsjonsknapp fra DogNPage.html
const butn = document.getElementById('adopsjonsknapp');

//legger til en eventListner og sier at funksjonen clickEventHandler skal kalles når man klikker på knappen
butn.addEventListener('click', clickEventhandler);

function clickEventhandler(){
    //henter diven med skjemaet ++
    let skjema = document.getElementById('skjemaside');

    //viser skjemaet
    skjema.style.display = 'block';

}

