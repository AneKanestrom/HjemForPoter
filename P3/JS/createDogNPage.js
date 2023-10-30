const dogsData = [
    {
        hundNo: "1",
        imageSrc: "../images/dog1.0.jpeg",
        name: "Buster",
        gender: "",
        age: "",
        breed: "",
        //lagt inn dette for å se om formatet blir greit
        info: "Buster er en (...). Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind." + 
         "<br />" + "Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind" + 
         "\n" + "Remainder in so cordially. His remainder and own dejection." + "\n" +
         "No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. Rooms he doors",
    },
    {
        hundNo: "2",
        imageSrc: "../images/dog2.0.jpeg",
        name: "Duster",
        gender: "",
        age: "",
        breed: "",
        info: "Duster er en (...). Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind." + 
        "<br />" + "Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind" + 
        "\n" + "Remainder in so cordially. His remainder and own dejection." + "\n" +
        "No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. Rooms he doors",
    },
    {   
        hundNo: "3",
        imageSrc: "../images/buster.png",
        name: "Guster",
        gender: "",
        age: "",
        breed: "",
        info: "Guster er en (...). Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind." + 
        "<br />" + "Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind" + 
        "\n" + "Remainder in so cordially. His remainder and own dejection." + "\n" +
        "No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. Rooms he doors",
    },
];


//må klare å slå opp på riktig hund for å finne riktig info. Avgjøres av knappen vi lager? kobling mellom sidene
//gi hver hund en primary key?
//hvordan bruke hundNo over?? Kanskje derfor bedre med dictionary?



function createDogBox() {

    const dogContainer = document.getElementById("dog-container");

    i = 0;
    dogsData.forEach((dog) => {
    
        const dogBox = document.createElement("div");
        dogBox.className = "dog-box";
        //gir de forskjelig id, kan vi bruke dette til å skille mellom hvilke hundeside vi skal linke til?
        dogBox.id = "dogNo" + i;

        console.log (dogBox.id)

        const img = document.createElement("img");
        img.src = dog.imageSrc;
        img.className = "dog-box-bilde";
        img.alt = dog.name;

        const h3 = document.createElement("h3");
        h3.textContent = dog.name;

        const genderParagraph = document.createElement("p");
        genderParagraph.textContent = "Kjønn: " + dog.gender;

        const ageParagraph = document.createElement("p");
        ageParagraph.textContent = "Alder: " + dog.age;

        const breedParagraph = document.createElement("p");
        breedParagraph.textContent = "Rase: " + dog.breed;

        dogBox.appendChild(img);
        dogBox.appendChild(h3);
        dogBox.appendChild(genderParagraph);
        dogBox.appendChild(ageParagraph);
        dogBox.appendChild(breedParagraph);

        
        dogContainer.appendChild(dogBox);

        i++;
    });
}


//funksjon for å finne hvilken hun det er snakk om! 
//tenkt å koble opp mot knapp og actionlistner ?
//god måte å løse dette på??

/*function findDog(hundNo){
    i = 0;
    for (let dog of dogsData){
        i++
        if (dog.hundNo === hundNo){
            return i;
        }
        else{
            console.log("feil i hundNo og FindDog logikk")
        }
    }

}*/

//i vil nå fortelle oss hvilken hund i lista vi har.


function createTopOfDogNPage(indeks) {
    const navnOgOverskrift = document.getElementById("navnOgOverskrift");

    //navn og overskrfift blir null, aaaaaah
    console.log(navnOgOverskrift)

    //henter ut hunden 
    const dog = dogsData[indeks];
    
    //returnere dette?
    const h1 = document.createElement("h1") 
    h1.textContent = dog.name;

    const img = document.createElement("img");
    img.src = dog.imageSrc;
    img.alt = dog.name;
    img.id = "DogNPagebilde"; 

    navnOgOverskrift.appendChild(h1);
    navnOgOverskrift.appendChild(img);

}


function createInfo(indeks){ 
    const hundeinfo = document.getElementById("hundeinfo");
    //henter ut hunden 
    let dog = dogsData[indeks];

    const hinfo = document.createElement("p")
    hinfo.textContent = dog.info;

    hundeinfo.appendChild(hinfo);

}

function showDogNPage(){
    //bytter path til DogNPage

    //gjør at divene fungerer som knapper med click events!
    const dogBtn1 = document.getElementById("dogNo0");
    const dogBtn2 = document.getElementById("dogNo1");
    const dogBtn3 = document.getElementById("dogNo2");

    dogBtn1.addEventListener('click', function() {
        localStorage.setItem("dogIndex", 0);
        createTopOfDogNPage(0);
        createInfo(0);

        window.location.href = "DogNPage.html"
    });

    dogBtn2.addEventListener('click', function() {
        createTopOfDogNPage(1);
        createInfo(1);

        window.location.href = "DogNPage.html"
    });
    dogBtn3.addEventListener('click', function() {
        createTopOfDogNPage(2);
        createInfo(2);

        window.location.href = "DogNPage.html"
    
    })
}

//chatGPT sin løsning: funker ikke for oss, kaller funksjoner fra dogs.html
/*document.addEventListener("DOMContentLoaded", function() {
    createDogBox();
    showDogNPage();
})*/
//bytte ut dette slik at vi blir sendt riktig sted når vi klikker på en av knappene (divene) våre, vil bli sendt til riktig hund