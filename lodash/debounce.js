/**
 * Debounce Ensures that a function is only called after a certain delay has passed since the last time the user stopped typing.
 * It waits until the user has finished typing (or paused) for a specified time before making the API call.
 */

function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func(...args)
    }, delay);
  }
}


/// how to test it

function performQuery(query) {
  console.log("Searching for query:", query)
}

const debouncedSearch = debounce(performQuery, 500)

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => {
  debouncedSearch(event.target.value);
});
