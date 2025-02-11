const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

let totalQuantity = 0;

for (const key in inventory) {
    console.log(`${key}: ${inventory[key]}`);
    totalQuantity += inventory[key];
}

console.log(`Total quantity: ${totalQuantity}`);
module.exports = inventory;