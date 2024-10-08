function throttle(func, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = new Date().getTime()

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return func(...args)
  }
}


// Example function to be throttled
function handleScroll() {
  console.log('Scroll event handler executed', new Date().toLocaleTimeString());
}

// Throttle the function to limit calls to once every 2 seconds (2000ms)
const throttledScroll = throttle(handleScroll, 2000);

// Simulating rapid scroll events
window.addEventListener('scroll', throttledScroll);