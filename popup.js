const newButton = document.getElementById('button');

document.querySelector('body').appendChild(newButton);

newButton.addEventListener('click', () => {
    const url = 'http://localhost:3000/';
    chrome.tabs.create({url: url});
})

chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.omnibox.setDefaultSuggestion({suggestion: DefaultSuggestResult});
    var newURL = `https://www.google.com/search?q=${text}`;
    chrome.tabs.create({ url: newURL });
  });
  
