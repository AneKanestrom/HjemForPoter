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
         "Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind" + 
         "Remainder in so cordially. His remainder and own dejection." +
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



function createDogBox() {

    const dogContainer = document.getElementById("dog-container");

    i = 0;
    // oppretter hundebokser for hver hund i dogsData-arrayen
    dogsData.forEach((dog) => {
    
        const dogBox = document.createElement("div");
        dogBox.className = "dog-box";
        //gir de forskjelig id, kan vi bruke dette til å skille mellom hvilke hundeside vi skal linke til?
        dogBox.id = "dogNo" + i;

        //henter data om hunden til dogbox og oppretter HTML-elementer 
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

        //legger til informasjon om hunden til dogBox
        dogBox.appendChild(img);
        dogBox.appendChild(h3);
        dogBox.appendChild(genderParagraph);
        dogBox.appendChild(ageParagraph);
        dogBox.appendChild(breedParagraph);

        //legger til doxBox i dogContainer
        dogContainer.appendChild(dogBox);

        i++;
    });
}

//funksjon for å legge til overskrift og bilde av hunden. Brukes i DogNPage.html
function createTopOfDogNPage(indeks) {
    const navnOgOverskrift = document.getElementById("navnOgOverskrift");

    //henter ut riktig hund
    const dog = dogsData[indeks];
    
    const h1 = document.createElement("h1") 
    h1.textContent = dog.name;

    const img = document.createElement("img");
    img.src = dog.imageSrc;
    img.alt = dog.name;
    img.id = "DogNPagebilde"; 

    navnOgOverskrift.appendChild(h1);
    navnOgOverskrift.appendChild(img);

}

//funksjon for å legge til riktig info om en hund fra lista, brukes i DogNPage.html
function createInfo(indeks){ 
    const hundeinfo = document.getElementById("hundeinfo");
    //henter ut hunden 
    let dog = dogsData[indeks];

    const hinfo = document.createElement("p")
    hinfo.textContent = dog.info;

    hundeinfo.appendChild(hinfo);

}

//funksjon for divene i dogNPage
function showDogNPage(){

    //gjør at divene fungerer som knapper med click events!
    const dogBtn1 = document.getElementById("dogNo0");
    const dogBtn2 = document.getElementById("dogNo1");
    const dogBtn3 = document.getElementById("dogNo2");

    /*eventlistnerene gir en funksjon som skal utføres når divene blir klikket på. Legger til dogID i local storage 
    med id-en hund i lista over, avhenger av hvilken knapp man trykker på. Bytter så til DogNPage.html*/
    dogBtn1.addEventListener('click', function() {
        localStorage.setItem("dogID", 0);
        window.location.href = "DogNPage.html"
    });

    dogBtn2.addEventListener('click', function() {
        localStorage.setItem('dogID', 1);

        window.location.href = "DogNPage.html"
    });
    dogBtn3.addEventListener('click', function() {
        localStorage.setItem('dogID', 2);

        window.location.href = "DogNPage.html"
    
    })
}
