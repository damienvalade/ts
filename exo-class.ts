interface Duck{
    name :string;
    swim() :string;
}

class Donald implements Duck{
    name: string;

    constructor(name :string) {
        this.name = name;
    }

    swim(): string {
        return "je nage";
    }
}

let donald = new Donald('Donald Duck');
console.log('Je suis ' + donald.name + ' et ' + donald.swim() + '.' +
    '.');
