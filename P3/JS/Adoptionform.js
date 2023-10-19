const butn = document.getElementById('adopsjonsknapp');

//knapp for å få opp skjemaet
butn.addEventListener('click', clickEventhandler);

function clickEventhandler(){
    /* legg til funksjonalitet for å få opp skjema for adopsjon*/
    


    //få opp skjema til nettsiden
    let skjema = document.getElementById('skjemaside');

    skjema.style.display = 'block';

}



/* alternativt, med skjema i javaScript*/
    
    //lager et skjema for å ville adoptere en hund 
    /*var form = document.createElement('form');

    var inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name = 'navn'

    var inputMail = document.createElement('mail');
    inputMail.type = 'text';
    inputMail.name = 'mail';

    var inputSøknad = document.createElement('søknad');
    inputSøknad.type = 'text' 
    inputSøknad.name = 'søknad'

    //lager knapp for å sende inn skjemaet
    var buttonSend = document.createElement('input');
    buttonSend.type = 'submit';
    buttonSend.value = 'Send';

    //legger til elementene i skjemaet
    form.appendChild(inputName);
    form.appendChild(inputMail);
    form.appendChild(inputSøknad);
    form.appendChild(buttonSend);
    
    
    //legger til skjemaet til DOM (hva er dette??)
    document.body.appendChild(form);
    */

    //få opp skjema til nettsiden
