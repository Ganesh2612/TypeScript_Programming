class Person {
    private years : number;
  
    constructor(years: number) {
      this.years = years;
    }
  
    showAge() {
      console.log(`Age: ${this.years}`);
    }
  }
  
  let p = new Person(25);
  p.showAge();