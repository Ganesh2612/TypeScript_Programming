var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.displayBrand = function () {
        console.log("Brand: ".concat(this.brand));
    };
    return Car;
}());
var car = new Car("BMW");
console.log(car.brand);
car.displayBrand();
