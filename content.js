console.log('content loaded');
function enlargeKanji() {
    const kanjiElements = document.querySelectorAll('span, div, p, h1, h2, h3, h4, h5, h6, li');
    const kanjiRegex = new RegExp('[\u4e00-\u9faf]+', 'g'); // regex for Kanji characters
    for (let i = 0; i < kanjiElements.length; i++) {
      const element = kanjiElements[i];
      if (element.innerText.match(kanjiRegex)) { // check if the element contains any Kanji characters
        const childNodes = element.childNodes;
        for (let j = 0; j < childNodes.length; j++) {
          const node = childNodes[j];
          if (node.nodeType === Node.TEXT_NODE) { // check if the node is a text node
            const text = node.textContent;
            const newNode = document.createDocumentFragment();
            let lastIndex = 0;
            let match;
            while ((match = kanjiRegex.exec(text)) !== null) { // loop through each Kanji character
              const span = document.createElement('span');
              span.textContent = match[0];
              span.style.fontSize = '150%';
              newNode.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
              newNode.appendChild(span);
              lastIndex = kanjiRegex.lastIndex;
            }
            newNode.appendChild(document.createTextNode(text.slice(lastIndex)));
            node.parentNode.replaceChild(newNode, node); // replace the original text node with the new nodes
          }
        }
      }
    }
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('message received');
    if (request.command == 'enlarge_kanji') {
      enlargeKanji();
    }
  });
  