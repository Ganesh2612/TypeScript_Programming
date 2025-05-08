class Car {
    public brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  
    public displayBrand(): void {
      console.log(`Brand: ${this.brand}`);
    }
  }
  
  const car = new Car("BMW");
  console.log(car.brand);       
  car.displayBrand();