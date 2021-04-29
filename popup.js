const newButton = document.getElementById('button');

document.querySelector('body').appendChild(newButton);

newButton.addEventListener('click', () => {
    const url = 'http://localhost:3000/';
    chrome.tabs.create({url: url});
})


console.log('outside');
chrome.omnibox.onInputEntered.addListener(function(text) {
    var newURL = `https:/localhost:3000/${text}`;
    chrome.tabs.create({ url: newURL });
  });