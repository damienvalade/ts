class Tp{

    private _name : string;
    private _summary :Array<string>;

    constructor(name :string, summary :Array<string>) {
        this._name = name;
        this._summary = summary;
    }

    description(){
        return `mon tp est ${this._name} utilise les sujets suivants
        ${this._summary.map((item) => {
           return " " + item
        }).join()}.`;
    }

}

let t = new Tp("formation", ["js","es6","typescrtipt"]);

console.log(t.description());
