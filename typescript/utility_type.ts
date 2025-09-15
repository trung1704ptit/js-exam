// Partial changes properies in an object to be optional
interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // Parital allows x and y to be optional
pointPart.x = 10;

// Required changes all properties in an object to be required
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar : Required<Car> = {
    make: '123',
    model: 'Tesla',
    mileage: 1233
}

// Record is shortcut to defining an object type with specific key type and value type
const nameAgeMap: Record<string, number> = {
    'Alice': 234,
    'Bob': 123
}

// Omit Remove keys from an object type
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name: 'bob'
    // 'Omit' has removed age and location from type and they can't be defined here
}



// Pick removes all but keep the specified keys from an object type
const bob2: Pick<Person, 'name'> = {
    name: 'Bob2',
}

// Exclude removes types from a union
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // remove string type here, string type cannot be use here


// ReturnType extracts the return type of a funciton type
type PointGenerator = () => {
    x: number;
    y: number;
}

const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
}

// Parameters extracts the paramter types of a function type as an array
type PointPrinter = (p: { x: number; y: number }) => void;
const point2: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 12,
}

// Readonly is used to create a new type where all properties are readonly, meaning tey cannot be modified once assigned a value
interface Person2 {
    name: string;
    age: number;
}

const person2: Readonly<Person2> = {
    name: 'Dylan',
    age: 32
}

// person2.age = 23 => cannot re-assign when compie time.