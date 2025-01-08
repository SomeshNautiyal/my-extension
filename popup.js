document.addEventListener("DOMContentLoaded", () => {
  const newColorInput = document.getElementById("newColorInput");
  const resetColorButton = document.getElementById("resetColorButton");
  const applyColorButton = document.getElementById("applyColorButton");
  const closeExtensionButton = document.getElementById("closeExtension");

  applyColorButton.addEventListener("click", async () => {
    const selectedColor = newColorInput.value;
    if (selectedColor) {
      // Get the active tab and send a message to the content script
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (color) => {
          document.body.style.backgroundColor = color;
        },
        args: [selectedColor],
      });
    }
  });

  resetColorButton.addEventListener("click", async () => {
    // Get the active tab and send a message to the content script
    resetColour();
  });


  if(closeExtensionButton){
      //close extension
      closeExtensionButton.addEventListener("click", async () => {
        window.close();
        resetColour();
         
      });
  }

  async function resetColour() {
    // Get the active tab and send a message to the content script
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        document.body.style.backgroundColor = "";
      },
    });
  }

});
