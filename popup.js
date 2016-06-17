$('document').ready(function() {
  $('#pwalert').hide();
  $('#successalert').hide();
  var settings = {};

  chrome.storage.local.get('ActivityControl', function (result) {
    settings.startTime = result.ActivityControl.startTime;
    settings.stopTime = result.ActivityControl.stopTime;
    settings.numTimes = result.ActivityControl.numTimes;
    settings.offset = result.ActivityControl.offset;
    $('#start').val(settings.startTime);
    $('#stop').val(settings.stopTime);
    $('#sessions').val(settings.numTimes);
  });

  $('#update').on('click', function () {
      if($('#pw').val() == 'password'){
        $('pwalert').hide();
        $('#successalert').show();
        settings.startTime = $('#start').val() || settings.startTime;
        settings.stopTime = $('#stop').val() || settings.stopTime;
        settings.numTimes = $('#sessions').val() || settings.numTimes;
        settings.offset = settings.stopTime - settings.startTime;
        chrome.storage.local.set({
          'ActivityControl': {
            startTime: settings.startTime,
            offset: settings.offset, 
            stopTime: settings.stopTime,
            numTimes: settings.numTimes
          }
        }, function () {
          chrome.runtime.sendMessage('ocghjfkhhhjbelfnfimcnkbocglmgibj', {message: 'settings updated!'});
        });
      } else {
        $('#pwalert').show();
        $('#successalert').hide();
      }
  });
});
