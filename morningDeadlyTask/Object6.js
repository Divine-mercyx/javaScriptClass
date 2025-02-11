const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 },
    { id: 4, name: 'Desktop', price: 400 },
];

const findExpensiveProducts = (products, threshold) => {
    return products.filter(product => product.price > threshold);
}

console.log(findExpensiveProducts(products, 700));
module.exports = findExpensiveProducts