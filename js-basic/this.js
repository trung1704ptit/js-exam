const iphone7 = {
  name: "iphone7",
  color: "pink",

  // method
  takePhoto: () => {
    console.log(this)
  },
  objChild: {
    methodChild: () => {
      console.log(this)
    }
  }
}

console.log(iphone7.objChild.methodChild())


// example 2:

function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.run = function() {
    console.log("running...", this)  // this is Car object because run is a "method".
    function test() {
      console.log(this) // this is window object, because test() is a "function"
    }
    test()

    const test2 = () => {
      console.log(this) // this will be Car, because we are calling in arrow function, arrow function does not has context
    }
    test2()
  }
}

const mercedesS450 =  new Car("Mercedes S450", "black", 1400)

console.log(mercedesS450.run())



// this in global

console.log(this) // => return the window object
// this o trong 1 ham, thi tro toi window


