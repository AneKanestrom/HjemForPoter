const dogsData = [
    {
        hundNo: "1",
        imageSrc: "../images/dog1.0.jpeg",
        name: "Buster",
        gender: "",
        age: "",
        breed: "",
    },
    {
        hundNo: "2",
        imageSrc: "../images/dog2.0.jpeg",
        name: "Buster",
        gender: "",
        age: "",
        breed: "",
    },
    {
        hundNo: "3",
        imageSrc: "../images/buster.png",
        name: "Buster",
        gender: "",
        age: "",
        breed: "",
    },
];

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


//gjør at divene fungerer som knapper med click events!
const dogBtn1 = document.getElementById("dogNo0");
const dogBtn2 = document.getElementById("dogNo1");
const dogBtn3 = document.getElementById("dogNo2");

dogBtn1.addEventListener('click', showDogNPage)
dogBtn2.addEventListener('click', showDogNPage)
dogBtn3.addEventListener('click', showDogNPage)

function showDogNPage(n){
    //bytter path til DogNPage
    window.location.href = "DogNPage.html"


}
