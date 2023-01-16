import {mount as productMount} from 'products/productsIndex';
import {mount as cartMount}  from 'cart/cartShow';

console.log('Container');

productMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));