class Student{
    private age:number;
    public name:string;
    public marks:number;
    public constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    getDetails(){
        return `${this.name} has scored ${this.marks} marks in the age of ${this.age}`;
    }
}
const Information=new Student("Gopi",55,99);
console.log(Information.getDetails());