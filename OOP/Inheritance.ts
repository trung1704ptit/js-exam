class Vehicle {
  protected speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  public move(): void {
    console.log(`Moving at speed: ${this.speed}`);
  }
}

class Car extends Vehicle {
  private brand: string;

  constructor(speed: number, brand: string) {
    super(speed);
    this.brand = brand;
  }

  public showDetails(): void {
    console.log(`Car Brand: ${this.brand}, speed: ${this.speed}`);
  }
}

// Sử dụng
const myCar = new Car(120, "Toyota");
myCar.move(); // Output: Moving at speed: 120
myCar.showDetails(); // Output: Car Brand: Toyota, Speed: 120


// Ý nghĩa: Lớp Car kế thừa thuộc tính và phương thức từ lớp Vehicle.