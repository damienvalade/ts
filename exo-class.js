var Donald = /** @class */ (function () {
    function Donald(name) {
        this.name = name;
    }
    Donald.prototype.swim = function () {
        return "je nage";
    };
    return Donald;
}());
var donald = new Donald('Donald Duck');
console.log('Je suis ' + donald.name + ' et ' + donald.swim() + '.' +
    '.');
