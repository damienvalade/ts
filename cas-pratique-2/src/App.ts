import { Product } from "./Product";
import { Delivery, Details, MockDetails, MockDelivery } from "./data/MockProducts";

let produits: Array<Product<Details,Delivery>> = []

MockDetails.forEach( (item :Details) => {
    let id = item.id;
    let delivery = MockDelivery.find( (deliveryDetail ) => {
        return deliveryDetail.id === id;
    } )
    produits.push(new Product<Details, Delivery>(item, delivery.delivery));
})

let produitSpecial = produits.filter(( item :Product<Details, Delivery>) =>{
    return item.option === 'special';
})

console.log(produitSpecial);
