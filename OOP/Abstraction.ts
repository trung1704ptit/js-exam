abstract class Shape {
  public abstract getArea(): number;
  public abstract getPerimeter(): number;
}

class Circle extends Shape {
  private radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  public getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  public getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }

  public getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}


// Sử dụng
const shapes: Shape[] = [new Circle(5), new Rectangle(10, 20)];
shapes.forEach((shape) => {
  console.log(`Area: ${shape.getArea()}, Perimeter: ${shape.getPerimeter()}`);
});

/**
 * 
 * Ý nghĩa: Lớp Shape trừu tượng hóa cách tính diện tích và chu vi, và các lớp con Circle và Rectangle phải cung cấp cách triển khai cụ thể.
 */