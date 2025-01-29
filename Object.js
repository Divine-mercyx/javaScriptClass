//First Task
const person = {
    name: "Divine Boss",
    age: 20,
    complexion: "dark",
    stateOfOrigin: "Anambra",
    country: "Nigeria"
};


//Second Task
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021
}


const displayInfo = (obj) => {
    for (detail in obj) {
        console.log(obj[detail]);
    }
}

displayInfo(car);

//Third Task
const laptop = {
    brand: "Dell",
    price: 1200
};

laptop.color = "blue"
console.log(laptop)

//fourth task
const phone = {
    brand: "Apple",
    price: 999
}
phone.price = 1500
console.log(phone)


//fifth task
const persons = {
    firstName: "divine",
    lastName: "boss",
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(persons.fullname())
