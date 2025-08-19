/**
 * Ensures that a function is called at most once every specified time interval, regardless of how many events are triggered during that time.
 * It limits the rate of function calls, which is useful when handling high-frequency events like scrolling or resizing.
 * 
 */

function throttle(func, delay) {
  let lastCall = 0; // function scope

  return function(...args) {  // closure
    const now = new Date().getTime()

    if (now - lastCall < delay) { // one of event still was excuting, ignore current call
      return;
    }

    lastCall = now;
    func(...args)
  }
}


// Example function to be throttled
function handleScroll() {
  console.log('Scroll event handler executed', new Date().toLocaleTimeString());
}

// Throttle the function to limit calls to once every 2 seconds (2000ms)
const throttledScroll = throttle(handleScroll, 2000); // store the throttle in memory

// Simulating rapid scroll events
window.addEventListener('scroll', throttledScroll);
