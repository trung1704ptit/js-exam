function performAsyncActions() {
  function handleOperation1(result1) {
    asyncOperation2(result1, handleOperation2)
  }

  function handleOperation2(result2) {
    asyncOperation3(result2, handleOperation3)
  }

  function handleOperation3(result3) {
    console.log(result3)
  }

  asyncOperation1(handleOperation1)
}

performAsyncActions()


// combine with async/await and promise:
function performAsyncActions1() {
  function asyncOperation1() {
    return new Promise((result, reject) => {
      setTimeout(() => {
        result('result1')
      }, 1000)
    })
  }
  function asyncOperation2(result1) {
    return new Promise((result, reject) => {
      setTimeout(() => {
        result('result2')
      }, 1000)
    })
  }
  function asyncOperation3(result2) {
    return new Promise((result, reject) => {
      setTimeout(() => {
        result('result3')
      }, 1000)
    })
  }

  async function execute() {
    try {
      const result1 = await asyncOperation1()
      const result2 = await asyncOperation2(result1)
      const result3 = await asyncOperation3(result2)
      console.log(result3)
    } catch (error) {
      console.error(error)
    }
  }
  execute()
}

performAsyncActions1()

// void closure making memory leaks
// inefficient
for (let i=0; i< 1000; i ++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

// efficient
for(let i =0; i < 1000; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i)
    })
  })(i)
}