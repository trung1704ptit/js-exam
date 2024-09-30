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

const person2 = {
  name: "abc",
  intro: function(a) {
    console.log(this.name + " " + a)
  }
}


const introPerson = person2.intro.bind(person2, "test")
