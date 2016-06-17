$('document').ready(function() {
  var ActivityControl;

  chrome.runtime.onMessage.addListener(function (request) {
    if (request.message === 'current settings') {
      ActivityControl = {
        startTime: request.settings.startTime,
        offset: request.settings.offset, 
        stopTime: request.settings.stopTime,
        numTimes: request.settings.numTimes
      };

      $('#start').val(ActivityControl.startTime);
      $('#stop').val(ActivityControl.stopTime);
      $('#sessions').val(ActivityControl.numTimes);
    }
  });

  chrome.runtime.sendMessage('ocghjfkhhhjbelfnfimcnkbocglmgibj', {message: 'get me the current settings!'
  });

  $('#update').on('click', function () {
    ActivityControl.startTime = $('#start').val() || ActivityControl.startTime;
    ActivityControl.stopTime = $('#stop').val() || ActivityControl.stopTime;
    ActivityControl.numTimes = $('#sessions').val() || ActivityControl.numTimes;
    ActivityControl.offset = ActivityControl.stopTime - ActivityControl.startTime;

    chrome.runtime.sendMessage('ocghjfkhhhjbelfnfimcnkbocglmgibj', {message: 'settings updated!', newSettings: ActivityControl});
    });
});
