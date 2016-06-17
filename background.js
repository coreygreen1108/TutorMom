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
    ActivityControl = request.newSettings;
  } else if (request.message === 'get me the current settings!') {
    chrome.runtime.sendMessage('ocghjfkhhhjbelfnfimcnkbocglmgibj', {message: 'current settings',
      settings: ActivityControl
  });
  }
});

function convertToMilli(timeInHours){
	return timeInHours * 3.6e+6;
}

ActivityControl = {
	startTime: 11,
	offset: 12, 
	stopTime: 21,
	numTimes: 2160
};

setInterval(function(){
	chrome.mathDone = false; 
}, (convertToMilli(ActivityControl.stopTime) - convertToMilli(ActivityControl.startTime)) / ActivityControl.numTimes);
