// JS Fundamentals

// //Variables
// let mycountry = "Brazil";
// const continent = "South America";
// var thepopulation = 2000;

// console.log(country, continent, population);
// console.log(continent);

// let isIsland = true;
// let language; 

// console.log(typeof isIsland, typeof country, typeof population, typeof continent );


// let middlePopulation = population/2;
// console.log(middlePopulation);

// console.log(population + 1);

// if(population<6000000) console.log(false)

//Functions

// function describeCountry(country, population, capitalCity){
//     return console.log(`${country} has ${population} people and its capital city is ${capitalCity}`);
// }

// describeCountry("finland", "6 million", "Helsinky");
// describeCountry("brazil", "6 million", "bsb");
// describeCountry("uruguai", "6 million", "montevideo");

// let worldPop = 7900;

// function population (countrypop){
//     console.log(`Country's population represents ${countrypop/worldPop} of World's population`);
// };

// population(1441);

// let BrazilPop = 300000;
// let IndianPop = 50000;

// population(BrazilPop);
// population(IndianPop);

// //Arrow function 

// let pop = (countrypop) => console.log(`Arrow Function: Country's population represents ${countrypop/worldPop} of World's population`);
// pop(BrazilPop);
// pop(IndianPop);

// worldPop = 8900000;
// let describePop = (countryName, population) => console.log(`${countryName} has ${population} people, which is about ${population/worldPop} of the world`); 
// let countryName = "China"
// describePop(countryName, 1441000000);

// describePop("India", 43947394);


// //Array
// let populations =[
//     {
//         country: "China",
//         population: 847492
//     },
//     {
//         country: "Brazil",
//         population: 78452
//     },
//     {
//         country: "Finland",
//         population: 4455221
//     },
//     {
//         country: "USA",
//         population: 78452
//     },
// ];

// if (populations.length >= 4) {
//     console.log(populations)
// }

// const percentageOfWorld = population => (population/7900)*100;
// const percPortugal = percentageOfWorld(10);
// const percSpain = percentageOfWorld(8);
// const percCanada = percentageOfWorld(56);
// let percentages =[percPortugal, percSpain, percCanada];
// console.log(percentages);

//Methods 

let neighbours = ["Argentina", "Chile", "Uruguai"];
// console.log(neighbours);

// neighbours.push("Utopia");
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// for (paises in neighbours) { console.log(paises, neighbours[paises]); }

// neighbours[1] = "Paraguai";
// console.log(neighbours);

// let dataCountry ={
//     country: "Uruguay",
//     capital: "Montevideo",
//     language: "Spanish",
//     spanishSpeaking: 6
// };

// let myCountry =[
//     dataCountry,
//     neighbours
// ];

// console.log(myCountry);

let neighbouring = neighbours.length;
// let {capital} = dataCountry;
// let{country} = dataCountry;
// let{spanishSpeaking} = dataCountry;

// console.log(
//     `${country} has ${spanishSpeaking} million spanish speaking people, ${neighbouring} neighbouring countries and a capital called ${capital}`
// );

// spanishSpeaking = spanishSpeaking + 2; 
// console.log(
//     `${country} has ${spanishSpeaking} spanish speaking people, ${neighbouring} neighbouring countries and a capital called ${capital}`
// );

// //Object methods 
// //Adding a method 
// let dataCountry = {
//     country: "Uruguay",
//     capital: "Montevideo",
//     language: "Spanish",
//     spanishSpeaking: 6,
//     describe: function (){
//         console.log(
//             `${this.country} has ${this.spanishSpeaking} spanish speaking people, ${this.neighbouring} neighbouring countries and a capital called ${this.capital}`
//         );
//     }

// };

// dataCountry.describe();



// let dataCountry = {
//     country: "Uruguay",
//     capital: "Montevideo",
//     language: "Spanish",
//     spanishSpeaking: 6,
//     describe: function (){
//         console.log(
//             `${this.country} has ${this.spanishSpeaking} spanish speaking people, ${this.neighbouring} neighbouring countries and a capital called ${this.capital}`
//         );
//     },

//     isIsland: "", 

//     checkIsIsland: function(){
//         if (neighbours == []){
//             this.isIsland = true
//             console.log("Yeah, this is a island")
//         }
//         else this.isIsland = false;
//         console.log("Nope");
//     }

// };


// dataCountry.checkIsIsland();

//How to add a method on an object that already exists?


// function dataCountry (){
//     if (neighbours == []){
//         this.isIsland = true
//         console.log("Yeah, this is a island")
//     }
//     else this.isIsland = false;
//     console.log("Nope");
// }

// dataCountry.prototype.checkIsIsland = function(){}
// let myCountryCtor = new dataCountry();
// myCountryCtor.checkIsIsland();
// console.log(dataCountry);

//Iteration 

// for (i=0; i<50; i++){
//     console.log(`Voter number ${i} is currently voting`)
// }

//Lopping arrays, breaking and continuing

// const populations = [10000, 1441, 332, 83];
// const percentageOfWorld = population => (population/100);
// const percents = [];
// for (let i=0; i<populations.length; i++){
//     const perc = percentageOfWorld(populations[i]);
//     percents.push(perc);
// }
// console.log(percents);

//Looping backwards and loops in loops 

// let listOfNeighbours = [
//     ['Canada', 'Mexico'], 
//     ['Spain'], 
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let i=0; i< listOfNeighbours.length; i++)
//     for (let y=0; y<listOfNeighbours[i].length; y++)
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`)

// While loop

const populations = [10000, 1441, 332, 83];
const percentageOfWorld = population => (population/100);
const percents = [];

let i = 0;

while (i<populations.length){
    const perc = percentageOfWorld(populations[i]);
    percents.push(perc);
    i++
};

console.log(percents);