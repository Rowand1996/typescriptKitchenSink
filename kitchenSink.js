var myName = "Rowan";
// makes a window on the screen with the word Rowan in it 
// numOfStates is number of states in the U.S.
var numOfStates = 50;
//im adding 5 and 4 and saving it to a variable 
var number = 5 + 4;
// makes a window on the screen with the words Say Hello in it 
function sayHello() {
    alert("Say Hello");
}
// calling the function Say Hello
//this is a function that checks the age of the given input 
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you arent old enough to view this page!");
    }
}
// checkAge("Charles",21);
// checkAge("Abby",27);
// checkAge("James",18);
// checkAge("Jhon",17);
var favVegtables = ["corn", "potatoes", "broccoli", "green beans", "carrots"];
//i am console.loging all of the vegtables in an array
for (var i = 0; i < favVegtables.length; i++) {
    console.log(favVegtables[i]);
}
var pet = { name: "sachi", breed: "pitadore" };
console.log(pet.name, pet.breed);
var people = [
    {
        name: "bob",
        age: 19
    },
    {
        name: "jerry",
        age: 17
    },
    {
        name: "mark",
        age: 23
    },
    {
        name: "marry",
        age: 27
    },
    {
        name: "jacob",
        age: 15
    }
];
// this is a loop that uses check age on the array of objects i made 
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
//this is a function that gets the length of whatever string is inserted in the params then checks if its even or odd
function getLength(name) {
    var wordLength = name.length;
    if (wordLength % 2) {
        console.log("the world is nice and even");
    }
    else {
        console.log("the world is an odd place!");
    }
}
getLength("Hello World");
getLength("Hello World!");
