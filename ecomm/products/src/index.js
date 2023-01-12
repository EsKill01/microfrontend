import faker from 'faker';

let products = '';

for(let i = 0; i < 3; i++){
    const name = faker.commerce.products.name();
    products += `<div>${name}</div>`;

}

console.log(products);