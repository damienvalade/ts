interface Duck{
    name :string;
    swim() :string;
}

class Donald implements Duck{
    name: string;

    setname(name :string){
        this.name = name;
    }

    getname(){
        return this.name;
    }

    swim(): string {
        return "je nage";
    }
}

let donald = new Donald();
donald.setname('Donald');
console.log('Je suis ' + donald.getname() + ' et ' + donald.swim() + '.' +
    '.');
