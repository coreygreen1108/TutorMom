chrome.tabs.onUpdated.addListener(function(tab, info){
  if (info.url && !chrome.mathDone) {
    if (info.url !== 'chrome-extension://dlfbaefmaboanbdoficjjdcpcnjikjba/questionform.html') {
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
  }
});

function convertToMilli(timeInHours){
	return timeInHours * 3.6e+6;
}

ActivityControl = {
	startTime: 9,
	offset: 12, 
	stopTime: 21,
	numTimes: 4320
}

// alert(ActivityControl.startTime + "    STOP TIME     " + ActivityControl.stopTime)

setInterval(function(){
	chrome.mathDone = false; 
}, (convertToMilli(ActivityControl.stopTime) - convertToMilli(ActivityControl.startTime)) / ActivityControl.numTimes);

// setInterval(function () {
//   alert('updating');
// }, 5000);

