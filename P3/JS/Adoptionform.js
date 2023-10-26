const butn = document.getElementById('adopsjonsknapp');

//knapp for å få opp skjemaet
butn.addEventListener('click', clickEventhandler);

function clickEventhandler(){
    //henter diven med skjemaet ++
    let skjema = document.getElementById('skjemaside');

    //viser skjemaet
    skjema.style.display = 'block';

}

