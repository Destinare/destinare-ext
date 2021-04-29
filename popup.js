chrome.omnibox.onInputEntered.addListener(function (destination) {
  const city = destination.split(",")[0];
  const state = destination.split(", ")[1] || destination.split(",")[1];
  var newURL = `http://localhost:3000/?city=${city}&state=${state}`;
  chrome.tabs.create({ url: newURL });
});
