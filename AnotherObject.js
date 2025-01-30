//first task
const person = {
    firstName: "divine",
    lastName: "Boss",
    age: 15
}

const displayPerson = (obj) => {
    let text = "";
    for (key in obj) {
        text += "" + key + ": " + obj[key] + ", "
    }
    console.log(text);
}

displayPerson(person);

//second task
const book = {
    title: "the great gatsby",
    author: "F. Scott Fitsgerald",
    yearPublished: 1925
};

const {title, author, yearPublished} = book;
console.log(title + " by " + author);

//third task
const profile = {
    name: "Sam",
    age: 40,
    profession: "Engineer"
};

const { name, age, profession } = profile
let profileName = name
let profileAge = age
let profileProfession = profession

685321
