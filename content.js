console.log('content loaded');
function enlargeKanji() {
    console.log('entered');
    const kanjiElements = document.getElementsByTagName('span');
    for (let i = 0; i < kanjiElements.length; i++) {
      const element = kanjiElements[i];
      const kanjiRegex = new RegExp('[\u4e00-\u9faf]+', 'g'); // regex for Kanji characters
      if (element.innerText.match(kanjiRegex)) { // check if the element contains any Kanji characters
        element.style.fontSize = '150%'; // increase the font size by 150%
      }
    }
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('message received');
    if (request.command == 'enlarge_kanji') {
      enlargeKanji();
    }
  });
  