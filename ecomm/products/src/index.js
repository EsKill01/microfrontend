import faker from 'faker';

let products = '';

for(let i = 0; i < 6; i++){
    const name = faker.commerce.product();
    products += `<div>${name}</div>`;

}

document.querySelector('#dev-products').innerHTML = products;