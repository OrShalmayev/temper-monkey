function waitForElementToExist(selector) {
  return new Promise((resolve, reject) => {
    // An element might not be on the page, so we retry every 100 ms to find the element.
    // Yea, it might block forever but it's good enough!
    let intervalId = setInterval(() => {
      let element = document.querySelector(selector);
      if (element) {
        clearInterval(intervalId);
        resolve(element);
      }
    }, 100);
  })
}
