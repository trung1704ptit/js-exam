/**
 * Implement Promise.all
 * 
 */


function customPromiseAll(promises) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!Array.isArray(promises)) {
                throw new TypeError("Argument must be an array")
            }

            const results = [];
            for (let i = 0; i < promises.length; i++) {
                results[i] = await Promise.resolve(promises[i])
            }

            // resolve once all the promises done

            resolve(results)
        } catch (error) {
            reject(error)
        }
    })
}

// Testing

const promise1 = Promise.resolve(5)
const promise2 = 100;
const promise3 = new Promise(resolve => setTimeout(resolve, 1000, "bar"))

customPromiseAll([promise1, promise2, promise3])
    .then(results => {
        console.log(results) // [5, 100, "bar"]
    }).catch(error => {
        console.log("At least one of the promise failed", error)
    })