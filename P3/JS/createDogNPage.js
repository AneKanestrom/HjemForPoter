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



const navnOgOverskrift = document.getElementById("navnOgOverskrift");

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

const hundeinfo = document.getElementById("hundeinfo");

function createInfo(indeks){ 
    //henter ut hunden 
    let dog = dogsData[indeks];

    const hinfo = document.createElement("p")
    hinfo.textContent = dog.info;

    hundeinfo.appendChild(hinfo);

}

//bytte ut dette slik at vi blir sendt riktig sted når vi klikker på en av knappene (divene) våre, vil bli sendt til riktig huns
window.onload = createTopOfDogNPage(1);
window.onload = createInfo(1);