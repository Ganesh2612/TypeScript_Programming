var Student = /** @class */ (function () {
    function Student(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    Student.prototype.getDetails = function () {
        return "".concat(this.name, " has scored ").concat(this.marks, " marks in the age of ").concat(this.age);
    };
    return Student;
}());
var Information = new Student("Gopi", 55, 99);
console.log(Information.getDetails());
