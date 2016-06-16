// document.addEventListener('DOMContentLoaded', function(){
// 		chrome.tabs.update(tab.id, {
// 			url: "http://www.zombo.com"
// 		})	
// })

// chrome.tabs.onCreated.addListener(function(tab, changeInfo){
// 	chrome.tabs.update(tab.id, {
// 		url: "http://www.zombo.com"
// 	})
// })

// window.Geoff = true; 

// function modifyGeoff(){
// 	window.Geoff = !window.Geoff; 
// }
// setInterval(function(){
// 	if(window.Geoff){
// 		chrome.tabs.getCurrent(function(tab, info){
// 			console.log(window.Geoff);
// 			chrome.tabs.update(tab, {
// 				url: "background.html"
// 			})	
// 		})
// 	}
// },3000)

// Get the modal
alert('loaded');
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};