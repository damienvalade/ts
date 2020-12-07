abstract class Music{
    protected _instrument: string = 'nothing';
    abstract makeSound(param :string): string;

    get instrument():string{
        return this._instrument;
    }

    play(): string{
        return "play music";
    }
}

class Guitare extends Music{
    makeSound(param :string): string {
        return param;
    }
}

let guitare = new Guitare();
console.log('I ' + guitare.play() + ' with my guitar : ' + guitare.makeSound('dring'));
