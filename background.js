var intervalId, 
    settings = {
      startTime: 9,
      offset: 12, 
      stopTime: 21,
      numTimes: 24
  };

chrome.tabs.onUpdated.addListener(function(tab, info){
  if (info.url && !chrome.mathDone) {
    if (info.url !== 'chrome-extension://ocghjfkhhhjbelfnfimcnkbocglmgibj/questionform.html') {
      urlRedirect = info.url;
    }
		chrome.tabs.update(tab.id, {
			url: 'questionform.html'
		});
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'math done!') {
    chrome.mathDone = true;
    chrome.tabs.update(window.currentTabId, {
      url: urlRedirect
    });
  } else if (request.message === 'settings updated!') {
    updateSettings();
  }
});

function convertToMilli(timeInHours){
	return timeInHours * 3.6e+6;
}

function updateSettings() {
  chrome.storage.local.get('settings', function (result) {
    settings.startTime = result.settings.startTime || settings.startTime;
    settings.stopTime = result.settings.stopTime || settings.stopTime;
    settings.numTimes = result.settings.numTimes || settings.numTimes;
    settings.offset = result.settings.offset || settings.offset;
    window.clearInterval(intervalId);
      intervalId = setInterval(function(){
      chrome.mathDone = false; 
    }, (convertToMilli(settings.stopTime) - convertToMilli(settings.startTime)) / settings.numTimes);
  });
}

updateSettings();
