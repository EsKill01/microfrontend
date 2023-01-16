import faker from 'faker';

const mount = (elemen) => {
    let cartText = `<div>You have ${faker.random.number()} item in your cart</div>`;

    elemen.innerHTML = cartText;
}

if(process.env.NODE_ENV === 'development'){
    const element = document.querySelector('#dev-cart');
    
    if(element){
        mount(element)
    }
}

export { mount }

