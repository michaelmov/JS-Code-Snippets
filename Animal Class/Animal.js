var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pet = (function () {
    function Pet(theName) {
        this.name = theName;
    }
    Pet.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Pet;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.apply(this, arguments);
    }
    Cat.prototype.speak = function () {
        return console.log(this.name + " says \"Meow!\"");
    };
    return Cat;
}(Pet));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.speak = function () {
        return console.log(this.name + " says \"Woof! Woof!\"");
    };
    return Dog;
}(Pet));
var myCat = new Cat('Linux');
myCat.speak();
myCat.move(10);
var myDog = new Dog("Colby");
myDog.speak();
myDog.move(20);
