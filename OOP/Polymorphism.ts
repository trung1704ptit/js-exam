class Animal {
    public speak(): void {
        console.log("The animal makes a sound")
    }
}

class Dog extends Animal {
    public speak(): void {
        console.log("Bark!")
    }
}

class Cat extends Animal {
    public speak(): void {
        console.log("Meow")
    }
}

// Usage
const animals: Animal[] = [new Dog(), new Cat(), new Animal()]
animals.forEach(animal => animal.speak())

// Output:
// Bark!
// Meow!
// The animal makes a sound


/**
 * Ý nghĩa: Phương thức speak được định nghĩa lại trong từng lớp con, thể hiện hành vi khác nhau của từng loại động vật.
 */