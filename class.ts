
class Product {
    private _name: string|number; // privé dans la classe actuelle
    private _marque : string ;

    constructor(name: string|number, marque: string) {
        this.name = name; // setter assigne une valeur à l'attribut _name
        this.marque = marque;
    }

    // setter
    set name(name: string|number) {
        this._name = name;
    }

    set marque(marque: string) {
        this._marque = marque;
    }

    // getter afficher une valeur dans le code courant
    get name(): string|number {
        return this._name;
    }

    get marque(): string {
        return this._marque;
    }
}

let peugeot = new Product(206,'peugeot');
let decat = new Product('btwin','Decathlon');

console.log('Nom :' + peugeot.name + ', marque : ' + peugeot.marque);
console.log('Nom :' + decat.name + ', marque : ' + decat.marque);
