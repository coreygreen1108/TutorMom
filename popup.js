$('document').ready(function() {
  $('#pwalert').hide();
  $('#successalert').hide();
  var settings = {};

  chrome.storage.local.get('settings', function (result) {
    settings.startTime = result.settings.startTime;
    settings.stopTime = result.settings.stopTime;
    settings.numTimes = result.settings.numTimes;
    settings.offset = result.settings.offset;
    settings.difficulties = result.settings.difficulties;
    settings.categories = result.settings.categories;
    $('#start').val(settings.startTime);
    $('#stop').val(settings.stopTime);
    $('#sessions').val(settings.numTimes);

    $('.difficulty').each(function (index, checkbox) {
      if (settings.difficulties.indexOf($(checkbox).val()) !== -1) {
        $(checkbox).prop('checked', true);
      }
    });

    $('.category').each(function (index, checkbox) {
      if (settings.categories.indexOf($(checkbox).val()) !== -1) {
        $(checkbox).prop('checked', true);
      }
    });
  });

  $('#update').on('click', function () {
      if($('#pw').val() == 'password'){
        $('#pwalert').hide();
        $('#successalert').show();
        settings.startTime = $('#start').val() || settings.startTime;
        settings.stopTime = $('#stop').val() || settings.stopTime;
        settings.numTimes = $('#sessions').val() || settings.numTimes;
        settings.offset = settings.stopTime - settings.startTime;

        settings.difficulties = [];
        $('.difficulty').each(function (index, checkbox) {
          if ($(checkbox).prop('checked')) {
            settings.difficulties.push($(checkbox).val());
          }
        }); 
        settings.difficulties = settings.difficulties.length ? settings.difficulties : null;

        settings.categories = [];
        $('.category').each(function (index, checkbox) {
          if ($(checkbox).prop('checked')) {
            settings.categories.push($(checkbox).val());
          }
        }); 
        settings.categories = settings.categories.length ? settings.categories : null;
        chrome.storage.local.set({
          'settings': {
            startTime: settings.startTime,
            offset: settings.offset, 
            stopTime: settings.stopTime,
            numTimes: settings.numTimes,
            categories: settings.categories,
            difficulties: settings.difficulties
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
