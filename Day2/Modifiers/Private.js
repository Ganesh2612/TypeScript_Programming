var Person = /** @class */ (function () {
    function Person(years) {
        this.years = years;
    }
    Person.prototype.showAge = function () {
        console.log("Age: ".concat(this.years));
    };
    return Person;
}());
var p = new Person(25);
p.showAge();
