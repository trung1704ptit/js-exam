/**
 * Implement again the Promise.race
 * Promise.race is a method that takes an array of promises and returns a single promise that solves
 * or rejects as soon as the first promise in the array settles (either fulfills or rejects).
 * 
 */


// if one of the promises is resolve/reject => return immediately

async function customPromiseRace(promises) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!Array.isArray(promises)) {
                throw new TypeError("Argument must be an array")
            }

            for (const promise of promises) {
                (async () => {
                    try {
                        const result = await Promise.resolve(promise) // time to complete is difference
                        resolve(result)  // resolve the race with the first promise is resolved
                    } catch (err) {
                        reject(err)  // reject race as soon as the first promise rejected
                    }
                })()
            }
        } catch (error) {
            reject(error)
        }
    })
}

// testing

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'First resolved'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'Second resolved'));
const promise3 = new Promise((_, reject) => setTimeout(reject, 300, 'Rejected first'));


customPromiseRace([promise1, promise2, promise3])
    .then(result => {
        console.log("Race resolved with:", result)
    })
    .catch(error => {
        console.log("Race rejected with:", error) // will log "Rejected first"
    })

// above example will run into catch, because the reject is first from promises list.