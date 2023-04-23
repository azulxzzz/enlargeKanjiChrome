console.log('content loaded');
function enlargeKanji() {
    const kanjiElements = document.querySelectorAll('span, div, p, h1, h2, h3, h4, h5, h6, li');
    const kanjiRegex = new RegExp('[\u4e00-\u9faf]+', 'g'); // regex for Kanji characters
    for (let i = 0; i < kanjiElements.length; i++) {
      const element = kanjiElements[i];
      if (element.innerText.match(kanjiRegex)) { // check if the element contains any Kanji characters
        const style = window.getComputedStyle(element);
        const fontSize = parseInt(style.fontSize);
        element.style.fontSize = (fontSize * 1.5) + 'px'; // increase the font size by 150%
      }
    }
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('message received');
    if (request.command == 'enlarge_kanji') {
      enlargeKanji();
    }
  });
  