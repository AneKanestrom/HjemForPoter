const dogsData = [
    {
        imageSrc: "../images/dog1.0.jpeg",
        name: "Buster",
        gender: "",
        age: "",
        breed: "",
    },
    {
        imageSrc: "../images/dog2.0.jpeg",
        name: "Buster",
        gender: "",
        age: "",
        breed: "",
    },
    {
        imageSrc: "../images/buster.png",
        name: "Buster",
        gender: "",
        age: "",
        breed: "",
    },
  
];

const dogContainer = document.getElementById("dog-container");

dogsData.forEach((dog) => {
 
    const dogBox = document.createElement("div");
    dogBox.className = "dog-box";

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
});
