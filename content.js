// Function to scroll to the bottom of the page
function scrollToEnd() {
  window.scrollTo(0, document.body.scrollHeight);
}

// Function to find and click a button
function clickButton() {
  var button = document.querySelector(".g-ui-button-next");
  if (button) {
    button.click();
  }
}

// Function to automate scrolling and clicking
function automate() {
  // Scroll to the end of the page
  scrollToEnd();

  // Wait for 1 second
  setTimeout(function () {
    // Click the button
    clickButton();
  }, 1000); // 1000 milliseconds = 1 second
}

// Set interval to repeat every 5 seconds
setInterval(function () {
  automate();
}, 5000); // 5000 milliseconds = 5 seconds
