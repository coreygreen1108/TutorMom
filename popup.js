function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
      renderStatus("Here's a cat!");
      imageUrl = 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg';
      var imageResult = document.getElementById('image-result');
      // Explicitly set the width/height to minimize the number of reflows. For
      // a single image, this does not matter, but if you're going to embed
      // multiple external images in your page, then the absence of width/height
      // attributes causes the popup to resize multiple times.
      imageResult.width = 800;
      imageResult.height = 300;
      imageResult.src = imageUrl;
      imageResult.hidden = false;

    })

// chrome.browserAction.onClicked.addListener(function(tab) {
//   alert('hello');
// });
