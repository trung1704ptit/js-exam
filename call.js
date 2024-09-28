function great(name) {
  console.log(`Hello, ${name}! my name is ${this.name}`)
}

const person = {
  name: "Alex"
}

great.call(person, "Tom") // Hello, Tom! my name is Alex
/**
 * 
 * Call function allows you to call a this specified this value, and the argument
 * the remaining argument ("Tom") will be passing as the argument of function great as normal
 */


