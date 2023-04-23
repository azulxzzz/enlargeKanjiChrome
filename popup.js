function sendCommandToContentScript(command) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: command});
      console.log('sent');
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var enlargeKanjiButton = document.getElementById('enlarge_kanji_button');
    console.log('got id');
    enlargeKanjiButton.addEventListener('click', function() {
        console.log('enter');
      sendCommandToContentScript('enlarge_kanji');
    });
  });