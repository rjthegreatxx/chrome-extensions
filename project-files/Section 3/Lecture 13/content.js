chrome.runtime.onMessage.addListener(function (request) {
  // Check for the message name
  if (request.message === "example_message") {
    // Run some code on the current page
    window.alert("Message received!");
  }
});
