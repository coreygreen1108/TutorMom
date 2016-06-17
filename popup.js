$('document').ready(function() {
  $('#pwalert').hide();
  $('#successalert').hide();
  var settings = {};

  chrome.storage.local.get('settings', function (result) {
    settings.startTime = result.settings.startTime;
    settings.stopTime = result.settings.stopTime;
    settings.numTimes = result.settings.numTimes;
    settings.offset = result.settings.offset;
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
          'settings': {
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
