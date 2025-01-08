document.getElementById("changeColor").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          document.body.style.backgroundColor = "yellow";
          console.log("Color changed to yellow!");
        },
      });
    });
  });
  