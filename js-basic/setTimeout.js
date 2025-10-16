const delay = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
})


// reverse countdown from 5 to 1 with a 1 second delay between each
async function reverseCountdown() {
    for (let i = 5; i>= 1; i--) {
        console.log(i);
        await delay(1000)
    }

    console.log('Go!')
}

reverseCountdown();

// delayed sum with error handling
async function delayedSum(a, b, delayMs) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers')
    } else if (typeof delayMs !== 'number' || delayMs < 0) {
        throw new Error('Delay must be a non-negative number')
    }
    await delay(delayMs)
    console.log(a + b)
}

// retry util success
async function retryUtilSuccess() {
    let attemp  = 1;

    while (true) {
        const success = Math.random() > 0.5;

        if (success) {
            console.log('Success on attempt', attemp);
            break;
        } else {
            console.log('Attempt', attemp, 'failed. Retrying in 1 second...');
            attemp++;
            await delay(1000)
        }
    }
}

// log squares of numbers from 1 to 5 with a 1 second delay between each
async function sequentialSquares() {
    for (let i = 1; i <= 5; i++) {
        console.log(i * i);
        await delay(1000)
    }

    console.log("Finished!")
}



// log with random
async function randomWaitLogger() {
    console.log('waiting...');

    const seconds = Math.floor(Math.random() * 5) + 1
    await delay(seconds * 1000)
}


db.users.aggregate([
    {
        $match: {
            status: "active",
            createdAt: {
                $gte: new Date(Date.now() - 30*24*60*60*1000) // last 30 days
            }
        }
    }, {
        $group: {
            _id: '$country',
            userCount: { $sum: 1}
        }
    }, 
    {
        $sort: {
            userCount: -1
        }
    }
])

// performance optimization:
db.users.createIndex({ status: 1, createdAt: -1})