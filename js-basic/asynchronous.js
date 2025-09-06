// handle by callback
function fetchDataCallback(url, callback) {
  setTimeout(() => {
    const data = { id: 1, name: "test"}
    callback(null, data)
  }, 1000)
}


function handleDataCallback(error, data) {
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}


const url = 'https://example.com/api/get-data';
fetchDataCallback(url, handleDataCallback);




// handle by promise

function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    const data  = { id: 1, name: "Sample data"}
    resolve(data)
  }, 1000)
} 

const url2 = 'https://example.com/api/get-data';

fetchDataPromise(url2)
  .then(data => {
    console.log("data:", data)
  }).catch(error => {
    console.log(error)
  })



// handle by async/await

function fetchDataAsync(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data  = { id: 1, name: "Sample data"}
      resolve(data)
    }, 1000)
  })
}

async function handleDataSync(url) {
  try {
    const data = await fetchDataAsync(url)
    console.log("data:", data)
  } catch(error) {
    console.log(error);
  }
}

handleDataSync()


