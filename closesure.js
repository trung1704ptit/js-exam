function outerFunction (outerValue) {
  return function innerFunction(innerValue) {
    console.log('Outer value:', outerValue);
    console.log('Inner value:', innerValue);
  }
}

const outer = outerFunction("out")