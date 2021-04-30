chrome.omnibox.onInputEntered.addListener(function (destination) {
  const city = destination.split(",")[0];
  const state = destination.split(", ")[1] || destination.split(",")[1];
  var newURL = `https://destinare-fe.herokuapp.com/?city=${city}&state=${state}`;
  chrome.tabs.create({ url: newURL });
});
