$('document').ready(function() {
  $('#pwalert').hide();
  $('#successalert').hide();
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

  chrome.runtime.sendMessage('dlfbaefmaboanbdoficjjdcpcnjikjba', {message: 'get me the current settings!'
  });

  $('#update').on('click', function () {
      if($('#pw').val() == 'password'){
        $('pwalert').hide();
        $('#successalert').show();
        ActivityControl.startTime = $('#start').val() || ActivityControl.startTime;
        ActivityControl.stopTime = $('#stop').val() || ActivityControl.stopTime;
        ActivityControl.numTimes = $('#sessions').val() || ActivityControl.numTimes;
        ActivityControl.offset = ActivityControl.stopTime - ActivityControl.startTime;
        chrome.runtime.sendMessage('dlfbaefmaboanbdoficjjdcpcnjikjba', {message: 'settings updated!', newSettings: ActivityControl});
      } else {
        $('#pwalert').show();
        $('#successalert').hide();
      };
    })
});
