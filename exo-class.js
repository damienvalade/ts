var Donald = /** @class */ (function () {
    function Donald() {
    }
    Donald.prototype.setname = function (name) {
        this.name = name;
    };
    Donald.prototype.getname = function () {
        return this.name;
    };
    Donald.prototype.swim = function () {
        return "je nage";
    };
    return Donald;
}());
var donald = new Donald();
donald.setname('Donald');
console.log('Je suis ' + donald.getname() + ' et ' + donald.swim() + '.' +
    '.');
