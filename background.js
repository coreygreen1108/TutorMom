var intervalId, 
    settings = {};

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
    chrome.storage.local.get('ActivityControl', function (result) {
      settings.startTime = result.ActivityControl.startTime;
      settings.stopTime = result.ActivityControl.stopTime;
      settings.numTimes = result.ActivityControl.numTimes;
      settings.offset = result.ActivityControl.offset;
      window.clearInterval(intervalId);
      intervalId = setInterval(function(){
        chrome.mathDone = false; 
      }, (convertToMilli(settings.stopTime) - convertToMilli(settings.startTime)) / settings.numTimes);
    });
  }
});

function convertToMilli(timeInHours){
	return timeInHours * 3.6e+6;
}

chrome.storage.local.set({
  'ActivityControl': {
  	startTime: 9,
  	offset: 12, 
  	stopTime: 21,
  	numTimes: 24
  }
});

intervalId = setInterval(function(){
	chrome.mathDone = false; 
}, (convertToMilli(ActivityControl.stopTime) - convertToMilli(ActivityControl.startTime)) / ActivityControl.numTimes);
