let person = {
  name: "Join",
  great: function (abc) {
    console.log(`Hello, my name is ${this.name} ${abc}`)
  }
}



let greatPerson = person.great.bind(person, "11abcs")

greatPerson()


/**
 * Bind method returns a new function with specified this value and any arguments that passed
 */