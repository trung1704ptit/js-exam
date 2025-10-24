function LogClass(target: Function) {
    console.log(`Class decorator called for:`, target.name)
}

@LogClass
class User {
    constructor(public name: string) {}
}
// console tra ve: Class decorator called for: User\



// -------------------------------------------------------------------
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Called ${propertyKey} with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };

  return descriptor;
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3)